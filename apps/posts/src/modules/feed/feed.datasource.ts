import { GraphQLError } from "graphql";
import { get, isEmpty, map, omit, set, size } from "lodash";
import { PipelineStage } from "mongoose";
import { getSearchRegex, parseQuery } from "shared-backend";
import {
  CreateFeedInput,
  MutationDeleteManyFeedArgs,
  QueryGetAllFeedArgs,
  QueryGetAllFeedCountArgs,
  QueryGetOneFeedArgs,
  UpdateFeedInput,
} from "../../libs/types";
import { FeedModel } from "./feed.model";

export default class FeedDataSource {
  private readonly model = FeedModel;

  async getAllFeed(args: QueryGetAllFeedArgs) {
    const pipelines: PipelineStage[] = [];
    const limit = Number(args.limit) || 10;
    const offset = Number(args.offset) || 0;

    if (size(args.search?.trim()) > 2) {
      pipelines.push({
        $search: {
          index: "search-index-name",
          regex: {
            path: ["field-name"],
            query: getSearchRegex(args.search?.trim() || ""),
            allowAnalyzedField: true,
          },
        },
      });
    }
    pipelines.push({
      $match: parseQuery(args.filter),
    });
    size(args.search?.trim()) <= 2 &&
      pipelines.push({ $sort: args.sort || { createdAt: -1 } });
    pipelines.push({ $skip: offset });
    pipelines.push({ $limit: limit });

    return this.model.aggregate(pipelines);
  }

  async getAllFeedCount(args: QueryGetAllFeedCountArgs) {
    const pipelines: PipelineStage[] = [];

    if (size(args.search?.trim()) > 2) {
      pipelines.push({
        $search: {
          index: "search-index-name",
          regex: {
            path: ["field-name"],
            query: getSearchRegex(args.search?.trim() || ""),
            allowAnalyzedField: true,
          },
        },
      });
    }
    pipelines.push({
      $match: parseQuery(args.filter),
    });
    pipelines.push({ $count: "totalCount" });

    return (await this.model.aggregate(pipelines))[0]?.totalCount || 0;
  }

  async getFeedById(_id: string) {
    return this.model.findById(_id).lean();
  }

  async getOneFeed(args: QueryGetOneFeedArgs) {
    return this.model.findOne(args.filter).sort(args.sort).lean();
  }

  async createFeed(data: CreateFeedInput) {
    const feed = new this.model({ ...data });
    return feed.save();
  }

  async createManyFeed(datas: CreateFeedInput[]) {
    const feeds = datas.map((input: CreateFeedInput) => this.createFeed(input));
    return feeds;
  }

  async updateFeed(data: UpdateFeedInput) {
    const feed = await this.model.findById(data._id);
    if (!feed) throw new GraphQLError("feed not found");

    for (const field in omit(data, "_id")) set(feed, field, get(data, field));

    return feed.save();
  }

  async updateManyFeed(datas: UpdateFeedInput[]) {
    const feeds = datas.map((input: UpdateFeedInput) => this.updateFeed(input));
    return feeds;
  }

  async deleteFeed(_id: string) {
    const feed = await this.model.findById(_id);
    if (!feed) throw new GraphQLError("feed not found");

    await this.model.deleteOne({ _id });
    return feed;
  }

  async deleteManyFeed(args: MutationDeleteManyFeedArgs) {
    const feeds = await this.model.find(args.filter);
    if (isEmpty(feeds)) throw new GraphQLError("feeds not found");

    await this.model.deleteMany({ _id: { $in: map(feeds, "_id") } });
    return feeds;
  }
}
