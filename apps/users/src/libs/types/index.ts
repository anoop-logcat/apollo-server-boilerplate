import { GraphQLSchema } from "graphql";
import AccountDataSource from "../../modules/account/account.datasource";
import HelloDataSource from "../../modules/hello/hello.datasource";
import { getLoaders } from "../config";
export * from "./generated/base-types";

export interface UsersContext {
  accessToken?: string;
  isMHAdmin: boolean;
  dataSources: TDataSourceContext;
  loaders: ReturnType<typeof getLoaders>;
}

export type TDataSourceContext = {
  helloDataSource: HelloDataSource;
  accountDataSource: AccountDataSource;
};

export type TModule = {
  schemas: GraphQLSchema;
  dataSources: TDataSourceContext;
};
