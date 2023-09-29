import { GraphQLError } from "graphql";
import { get, isEmpty, map, omit, set, size } from "lodash";
import { PipelineStage } from "mongoose";
import { getSearchRegex, parseQuery } from "shared-backend";
import {
  CreateAccountInput,
  MutationDeleteManyAccountArgs,
  QueryGetAllAccountArgs,
  QueryGetAllAccountCountArgs,
  QueryGetOneAccountArgs,
  UpdateAccountInput,
} from "../../libs/types";
import { AccountModel } from "./account.model";

export default class AccountDataSource {
  private readonly model = AccountModel;

  async getAllAccount(args: QueryGetAllAccountArgs) {
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

  async getAllAccountCount(args: QueryGetAllAccountCountArgs) {
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

  async getAccountById(_id: string) {
    return this.model.findById(_id).lean();
  }

  async getOneAccount(args: QueryGetOneAccountArgs) {
    return this.model.findOne(args.filter).sort(args.sort).lean();
  }

  async createAccount(data: CreateAccountInput) {
    const account = new this.model({ ...data });
    return account.save();
  }

  async createManyAccount(datas: CreateAccountInput[]) {
    const accounts = datas.map((input: CreateAccountInput) =>
      this.createAccount(input)
    );
    return Promise.all(accounts);
  }

  async updateAccount(data: UpdateAccountInput) {
    const account = await this.model.findById(data._id);
    if (!account) throw new GraphQLError("account not found");

    for (const field in omit(data, "_id"))
      set(account, field, get(data, field));

    return account.save();
  }

  async updateManyAccount(datas: UpdateAccountInput[]) {
    const accounts = datas.map((input: UpdateAccountInput) =>
      this.updateAccount(input)
    );
    return Promise.all(accounts);
  }

  async deleteAccount(_id: string) {
    const account = await this.model.findById(_id);
    if (!account) throw new GraphQLError("account not found");

    await this.model.deleteOne({ _id });
    return account;
  }

  async deleteManyAccount(args: MutationDeleteManyAccountArgs) {
    const accounts = await this.model.find(args.filter);
    if (isEmpty(accounts)) throw new GraphQLError("accounts not found");

    await this.model.deleteMany({ _id: { $in: map(accounts, "_id") } });
    return accounts;
  }
}
