import { Resolvers } from "../../libs/types";

export default {
  Query: {
    getAccountById: (parent, args, context, info) =>
      context.dataSources.accountDataSource.getAccountById(String(args._id)),
    getAllAccount: (parent, args, context, info) =>
      context.dataSources.accountDataSource.getAllAccount(args),
    getOneAccount: (parent, args, context, info) =>
      context.dataSources.accountDataSource.getOneAccount(args),
    getAllAccountCount: (parent, args, context, info) =>
      context.dataSources.accountDataSource.getAllAccountCount(args),
  },
  Mutation: {
    createAccount: (parent, args, context, info) =>
      context.dataSources.accountDataSource.createAccount(args.data),
    createManyAccount: (parent, args, context, info) =>
      context.dataSources.accountDataSource.createManyAccount(args.datas),
    updateAccount: (parent, args, context, info) =>
      context.dataSources.accountDataSource.updateAccount(args.data),
    updateManyAccount: (parent, args, context, info) =>
      context.dataSources.accountDataSource.updateManyAccount(args.datas),
    deleteAccount: (parent, args, context, info) =>
      context.dataSources.accountDataSource.deleteAccount(String(args._id)),
    deleteManyAccount: (parent, args, context, info) =>
      context.dataSources.accountDataSource.deleteManyAccount(args),
  },
  Account: {
    __resolveReference: async (ref, context, info) =>
      ref._id ? context.loaders.accountByIdLoader.load(ref._id) : null,
  },
} as Resolvers;
