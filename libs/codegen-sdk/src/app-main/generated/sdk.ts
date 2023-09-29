import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  hobbies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  lastName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateAccountInput = {
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  hobbies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName: Scalars['String']['input'];
};

export type CreateFeedInput = {
  createdById: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Feed = {
  __typename?: 'Feed';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  createFeed: Feed;
  createManyAccount: Array<Account>;
  createManyFeed: Array<Feed>;
  deleteAccount: Account;
  deleteFeed: Feed;
  deleteManyAccount: Array<Account>;
  deleteManyFeed: Array<Feed>;
  updateAccount: Account;
  updateFeed: Feed;
  updateManyAccount: Array<Account>;
  updateManyFeed: Array<Feed>;
};


export type MutationCreateAccountArgs = {
  data: CreateAccountInput;
};


export type MutationCreateFeedArgs = {
  data: CreateFeedInput;
};


export type MutationCreateManyAccountArgs = {
  datas: Array<CreateAccountInput>;
};


export type MutationCreateManyFeedArgs = {
  datas: Array<CreateFeedInput>;
};


export type MutationDeleteAccountArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationDeleteFeedArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationDeleteManyAccountArgs = {
  filter: Scalars['JSON']['input'];
};


export type MutationDeleteManyFeedArgs = {
  filter: Scalars['JSON']['input'];
};


export type MutationUpdateAccountArgs = {
  data: UpdateAccountInput;
};


export type MutationUpdateFeedArgs = {
  data: UpdateFeedInput;
};


export type MutationUpdateManyAccountArgs = {
  datas: Array<UpdateAccountInput>;
};


export type MutationUpdateManyFeedArgs = {
  datas: Array<UpdateFeedInput>;
};

export type Query = {
  __typename?: 'Query';
  getAccountById?: Maybe<Account>;
  getAllAccount: Array<Maybe<Account>>;
  getAllAccountCount: Scalars['Int']['output'];
  getAllFeed: Array<Maybe<Feed>>;
  getAllFeedCount: Scalars['Int']['output'];
  getFeedById?: Maybe<Feed>;
  getOneAccount?: Maybe<Account>;
  getOneFeed?: Maybe<Feed>;
  postsHello: Scalars['String']['output'];
  usersHello: Scalars['String']['output'];
};


export type QueryGetAccountByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetAllAccountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllAccountCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllFeedArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllFeedCountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetFeedByIdArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetOneAccountArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetOneFeedArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateAccountInput = {
  _id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  hobbies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFeedInput = {
  _id: Scalars['ID']['input'];
  createdById?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostsHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsHelloQuery = { __typename?: 'Query', postsHello: string };

export type UsersHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersHelloQuery = { __typename?: 'Query', usersHello: string };


export const PostsHelloDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postsHello"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsHello"}}]}}]} as unknown as DocumentNode;
export const UsersHelloDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"usersHello"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersHello"}}]}}]} as unknown as DocumentNode;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    postsHello(variables?: PostsHelloQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostsHelloQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostsHelloQuery>(PostsHelloDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postsHello', 'query');
    },
    usersHello(variables?: UsersHelloQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UsersHelloQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersHelloQuery>(UsersHelloDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'usersHello', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;