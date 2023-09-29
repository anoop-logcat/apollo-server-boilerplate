import { GraphQLSchema } from "graphql";
import FeedDataSource from "../../modules/feed/feed.datasource";
import HelloDataSource from "../../modules/hello/hello.datasource";
import { getLoaders } from "../config";
export * from "./generated/base-types";

export interface PostsContext {
  accessToken?: string;
  isMHAdmin: boolean;
  dataSources: TDataSourceContext;
  loaders: ReturnType<typeof getLoaders>;
}

export type TDataSourceContext = {
  helloDataSource: HelloDataSource;
  feedDataSource: FeedDataSource;
};

export type TModule = {
  schemas: GraphQLSchema;
  dataSources: TDataSourceContext;
};
