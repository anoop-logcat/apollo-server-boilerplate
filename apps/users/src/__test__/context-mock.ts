import { getLoaders } from "../libs/config";
import { UsersContext } from "../libs/types";
import { Modules } from "../modules";

export enum ContextValueType {
  mhToken = "MH_TOKEN",
  authenticated = "AUTHENTICATED",
  unAuthenticated = "UNAUTHENTICATED",
}

export const MockContextValue = (
  type: ContextValueType,
  accessToken?: string
): UsersContext => {
  switch (type) {
    case ContextValueType.mhToken:
      return {
        isMHAdmin: true,
        accessToken: undefined,
        dataSources: Modules.dataSources,
        loaders: getLoaders(),
      };
    case ContextValueType.authenticated:
      return {
        isMHAdmin: false,
        accessToken,
        dataSources: Modules.dataSources,
        loaders: getLoaders(),
      };
    default:
      return {
        isMHAdmin: false,
        accessToken: undefined,
        dataSources: Modules.dataSources,
        loaders: getLoaders(),
      };
  }
};
