import { RemoteGraphQLDataSource } from "@apollo/gateway";
import { AppMainContext } from "./types";

export class HeaderDataSource extends RemoteGraphQLDataSource {
  willSendRequest({
    request,
    context,
  }: {
    request: any;
    context: Partial<AppMainContext>;
  }) {
    request.http.headers.set("Authorization", context.authorization);
    if (context.isMHAdmin) {
      switch (String(request.http.url)) {
        case String(process.env.POSTS_URL):
          request.http.headers.set("mh-token", process.env.POSTS_TOKEN);
          break;
        case String(process.env.USERS_URL):
          request.http.headers.set("mh-token", process.env.USERS_TOKEN);
          break;
      }
    }
  }
}
