import { Resolvers } from "../../libs/types";

export default {
  Query: {
    getFeedById: (parent, args, context, info) =>
      context.dataSources.feedDataSource.getFeedById(String(args._id)),
    getAllFeed: (parent, args, context, info) =>
      context.dataSources.feedDataSource.getAllFeed(args),
    getOneFeed: (parent, args, context, info) =>
      context.dataSources.feedDataSource.getOneFeed(args),
    getAllFeedCount: (parent, args, context, info) =>
      context.dataSources.feedDataSource.getAllFeedCount(args),
  },
  Mutation: {
    createFeed: (parent, args, context, info) =>
      context.dataSources.feedDataSource.createFeed(args.data),
    createManyFeed: (parent, args, context, info) =>
      context.dataSources.feedDataSource.createManyFeed(args.datas),
    updateFeed: (parent, args, context, info) =>
      context.dataSources.feedDataSource.updateFeed(args.data),
    updateManyFeed: (parent, args, context, info) =>
      context.dataSources.feedDataSource.updateManyFeed(args.datas),
    deleteFeed: (parent, args, context, info) =>
      context.dataSources.feedDataSource.deleteFeed(String(args._id)),
    deleteManyFeed: (parent, args, context, info) =>
      context.dataSources.feedDataSource.deleteManyFeed(args),
  },
  Feed: {
    __resolveReference: async (ref, context, info) =>
      ref._id ? context.loaders.feedByIdLoader.load(ref._id) : null,
    createdBy: async (feed) => ({
      __typename: "User",
      _id: feed.createdById || null,
    }),
  },
} as Resolvers;
