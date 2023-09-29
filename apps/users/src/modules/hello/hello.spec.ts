import { get } from "lodash";
import {
  ContextValueType,
  MockContextValue,
} from "../../__test__/context-mock";
import TestApolloServer from "../../__test__/test-server";

const helloQuery = {
  query: `query{
    usersHello
  }`,
};

describe("Test Hello World", () => {
  const server = new TestApolloServer();

  beforeAll(async () => {
    await server.start();
  });

  it("hello query testing...", async () => {
    const response = await server.apollo.executeOperation(helloQuery, {
      contextValue: MockContextValue(ContextValueType.unAuthenticated),
    });
    expect(get(response, "body.singleResult.data.usersHello")).toBe(
      "Hello World from shared-backend"
    );
  });

  afterAll(async () => {
    await server.stop();
  });
});
