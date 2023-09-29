import { Resolvers } from "../../libs/types";

export default {
  Query: {
    postsHello: (parent, args, context, info) =>
      context.dataSources.helloDataSource.sayHello(),
  },
} as Resolvers;
