import { get } from "lodash";
import {
  ContextValueType,
  MockContextValue,
} from "../../../__test__/context-mock";
import TestApolloServer from "../../../__test__/test-server";
import { CreateFeedInput, UpdateFeedInput } from "../../../libs/types";
import {
  createFeed,
  createManyFeed,
  deleteFeed,
  deleteManyFeed,
  getAllFeed,
  getAllFeedCount,
  getFeedById,
  getOneFeed,
  updateFeed,
  updateManyFeed,
} from "./queries";

export const getFeedByIdOperation = async (
  feedId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(getFeedById(feedId), {
    contextValue: MockContextValue(ContextValueType.mhToken),
  });

  const refinedResult = get(result, "body.singleResult.data.getFeedById");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "_id")).toEqual(feedId);
};

export const getAllFeedOperation = async (
  feedId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    getAllFeed("", { _id: { $eq: feedId } }, { createdAt: 1 }, 10, 0),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(result, "body.singleResult.data.getAllFeed");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "0._id")).toEqual(feedId);
};

export const getOneFeedOperation = async (
  feedId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    getOneFeed({ _id: { $eq: feedId } }, { createdAt: 1 }),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(result, "body.singleResult.data.getOneFeed");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "_id")).toEqual(feedId);
};

export const getAllFeedCountOperation = async (server: TestApolloServer) => {
  const result = await server.apollo.executeOperation(getAllFeedCount("", {}), {
    contextValue: MockContextValue(ContextValueType.mhToken),
  });

  const refinedResult = get(result, "body.singleResult.data.getAllFeedCount");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(5);
};

export const createFeedOperation = async (
  data: CreateFeedInput,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(createFeed(data), {
    contextValue: MockContextValue(ContextValueType.mhToken),
  });

  const refinedResult = get(result, "body.singleResult.data.createFeed");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(expect.objectContaining(data));
};

export const createManyFeedOperation = async (
  datas: CreateFeedInput[],
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(createManyFeed(datas), {
    contextValue: MockContextValue(ContextValueType.mhToken),
  });

  const refinedResult: any = get(
    result,
    "body.singleResult.data.createManyFeed"
  );
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(
    expect.arrayContaining([expect.objectContaining(datas[0])])
  );
  return refinedResult;
};

export const updateFeedOperation = async (
  data: UpdateFeedInput,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(updateFeed(data), {
    contextValue: MockContextValue(ContextValueType.mhToken),
  });

  const refinedResult = get(result, "body.singleResult.data.updateFeed");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(expect.objectContaining(data));
};

export const updateManyFeedOperation = async (
  datas: UpdateFeedInput[],
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(updateManyFeed(datas), {
    contextValue: MockContextValue(ContextValueType.mhToken),
  });

  const refinedResult = get(result, "body.singleResult.data.updateManyFeed");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(
    expect.arrayContaining([expect.objectContaining(datas[0])])
  );
};

export const deleteFeedOperation = async (
  feedId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(deleteFeed(feedId), {
    contextValue: MockContextValue(ContextValueType.mhToken),
  });

  const refinedResult = get(result, "body.singleResult.data.deleteFeed");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "_id")).toEqual(feedId);
};

export const deleteManyFeedOperation = async (
  feedId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    deleteManyFeed({ _id: { $eq: feedId } }),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(result, "body.singleResult.data.deleteManyFeed");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "0._id")).toEqual(feedId);
};
