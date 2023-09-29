import { get } from "lodash";
import {
  ContextValueType,
  MockContextValue,
} from "../../../__test__/context-mock";
import TestApolloServer from "../../../__test__/test-server";
import { CreateAccountInput, UpdateAccountInput } from "../../../libs/types";
import {
  createAccount,
  createManyAccount,
  deleteAccount,
  deleteManyAccount,
  getAccountById,
  getAllAccount,
  getAllAccountCount,
  getOneAccount,
  updateAccount,
  updateManyAccount,
} from "./queries";

export const getAccountByIdOperation = async (
  accountId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    getAccountById(accountId),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(result, "body.singleResult.data.getAccountById");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "_id")).toEqual(accountId);
};

export const getAllAccountOperation = async (
  accountId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    getAllAccount("", { _id: { $eq: accountId } }, { createdAt: 1 }, 10, 0),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(result, "body.singleResult.data.getAllAccount");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "0._id")).toEqual(accountId);
};

export const getOneAccountOperation = async (
  accountId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    getOneAccount({ _id: { $eq: accountId } }, { createdAt: 1 }),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(result, "body.singleResult.data.getOneAccount");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "_id")).toEqual(accountId);
};

export const getAllAccountCountOperation = async (server: TestApolloServer) => {
  const result = await server.apollo.executeOperation(
    getAllAccountCount("", {}),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(
    result,
    "body.singleResult.data.getAllAccountCount"
  );
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(5);
};

export const createAccountOperation = async (
  data: CreateAccountInput,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(createAccount(data), {
    contextValue: MockContextValue(ContextValueType.mhToken),
  });

  const refinedResult = get(result, "body.singleResult.data.createAccount");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(expect.objectContaining(data));
};

export const createManyAccountOperation = async (
  datas: CreateAccountInput[],
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    createManyAccount(datas),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult: any = get(
    result,
    "body.singleResult.data.createManyAccount"
  );
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(
    expect.arrayContaining([expect.objectContaining(datas[0])])
  );
  return refinedResult;
};

export const updateAccountOperation = async (
  data: UpdateAccountInput,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(updateAccount(data), {
    contextValue: MockContextValue(ContextValueType.mhToken),
  });

  const refinedResult = get(result, "body.singleResult.data.updateAccount");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(expect.objectContaining(data));
};

export const updateManyAccountOperation = async (
  datas: UpdateAccountInput[],
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    updateManyAccount(datas),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(result, "body.singleResult.data.updateManyAccount");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(refinedResult).toEqual(
    expect.arrayContaining([expect.objectContaining(datas[0])])
  );
};

export const deleteAccountOperation = async (
  accountId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    deleteAccount(accountId),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(result, "body.singleResult.data.deleteAccount");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "_id")).toEqual(accountId);
};

export const deleteManyAccountOperation = async (
  accountId: string,
  server: TestApolloServer
) => {
  const result = await server.apollo.executeOperation(
    deleteManyAccount({ _id: { $eq: accountId } }),
    {
      contextValue: MockContextValue(ContextValueType.mhToken),
    }
  );

  const refinedResult = get(result, "body.singleResult.data.deleteManyAccount");
  const refinedError = get(result, "body.singleResult.errors");

  expect(refinedError).toBeUndefined();
  expect(get(refinedResult, "0._id")).toEqual(accountId);
};
