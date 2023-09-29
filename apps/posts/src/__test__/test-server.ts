import { ApolloServer } from "@apollo/server";
import { PostsContext } from "../libs/types";
import { Modules } from "../modules";
import { TestDB } from "./test-db";

export default class TestApolloServer {
  constructor(
    public readonly apollo = new ApolloServer<PostsContext>({
      schema: Modules.schemas,
    })
  ) {}

  async start() {
    await TestDB.connect();
    await this.apollo.start();
  }
  async stop() {
    await TestDB.disconnect();
    await this.apollo.stop();
  }
}
