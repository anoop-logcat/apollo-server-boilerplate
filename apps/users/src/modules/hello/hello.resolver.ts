import { Resolvers } from "../../libs/types";

export default {
  Query: {
    usersHello: (parent, args, context, info) =>
      context.dataSources.helloDataSource.sayHello(),
  },
} as Resolvers;
