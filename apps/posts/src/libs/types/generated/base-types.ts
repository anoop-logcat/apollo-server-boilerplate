import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IFeedDocument } from '../../../modules/feed/feed.model';
import { PostsContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type FieldWrapper<T> = T;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
  EmailAddress: { input: string; output: string; }
  JSON: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  _id?: Maybe<FieldWrapper<Scalars['ID']['output']>>;
};

export type CreateFeedInput = {
  createdById: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Feed = {
  __typename?: 'Feed';
  _id: FieldWrapper<Scalars['ID']['output']>;
  createdAt?: Maybe<FieldWrapper<Scalars['DateTime']['output']>>;
  createdBy?: Maybe<FieldWrapper<Account>>;
  createdById?: Maybe<FieldWrapper<Scalars['ID']['output']>>;
  description?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  imageUrl?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  title?: Maybe<FieldWrapper<Scalars['String']['output']>>;
  updatedAt?: Maybe<FieldWrapper<Scalars['DateTime']['output']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFeed: FieldWrapper<Feed>;
  createManyFeed: Array<FieldWrapper<Feed>>;
  deleteFeed: FieldWrapper<Feed>;
  deleteManyFeed: Array<FieldWrapper<Feed>>;
  updateFeed: FieldWrapper<Feed>;
  updateManyFeed: Array<FieldWrapper<Feed>>;
};


export type MutationCreateFeedArgs = {
  data: CreateFeedInput;
};


export type MutationCreateManyFeedArgs = {
  datas: Array<CreateFeedInput>;
};


export type MutationDeleteFeedArgs = {
  _id: Scalars['ID']['input'];
};


export type MutationDeleteManyFeedArgs = {
  filter: Scalars['JSON']['input'];
};


export type MutationUpdateFeedArgs = {
  data: UpdateFeedInput;
};


export type MutationUpdateManyFeedArgs = {
  datas: Array<UpdateFeedInput>;
};

export type Query = {
  __typename?: 'Query';
  getAllFeed: Array<Maybe<FieldWrapper<Feed>>>;
  getAllFeedCount: FieldWrapper<Scalars['Int']['output']>;
  getFeedById?: Maybe<FieldWrapper<Feed>>;
  getOneFeed?: Maybe<FieldWrapper<Feed>>;
  postsHello: FieldWrapper<Scalars['String']['output']>;
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


export type QueryGetOneFeedArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateFeedInput = {
  _id: Scalars['ID']['input'];
  createdById?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type UnwrappedObject<T> = {
        [P in keyof T]: T[P] extends infer R | Promise<infer R> | (() => infer R2 | Promise<infer R2>)
          ? R & R2 : T[P]
      };
export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  CreateFeedInput: CreateFeedInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  Feed: ResolverTypeWrapper<IFeedDocument>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  UpdateFeedInput: UpdateFeedInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  ID: Scalars['ID']['output'];
  CreateFeedInput: CreateFeedInput;
  String: Scalars['String']['output'];
  DateTime: Scalars['DateTime']['output'];
  EmailAddress: Scalars['EmailAddress']['output'];
  Feed: IFeedDocument;
  JSON: Scalars['JSON']['output'];
  Mutation: {};
  Query: {};
  Int: Scalars['Int']['output'];
  UpdateFeedInput: UpdateFeedInput;
  Boolean: Scalars['Boolean']['output'];
}>;

export type IsMhAdminDirectiveArgs = { };

export type IsMhAdminDirectiveResolver<Result, Parent, ContextType = PostsContext, Args = IsMhAdminDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = PostsContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Account']>, { __typename: 'Account' } & GraphQLRecursivePick<UnwrappedObject<ParentType>, {"_id":true}>, ContextType>;

  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type FeedResolvers<ContextType = PostsContext, ParentType extends ResolversParentTypes['Feed'] = ResolversParentTypes['Feed']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Feed']>, { __typename: 'Feed' } & GraphQLRecursivePick<UnwrappedObject<ParentType>, {"_id":true}>, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  createdById?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = PostsContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createFeed?: Resolver<ResolversTypes['Feed'], ParentType, ContextType, RequireFields<MutationCreateFeedArgs, 'data'>>;
  createManyFeed?: Resolver<Array<ResolversTypes['Feed']>, ParentType, ContextType, RequireFields<MutationCreateManyFeedArgs, 'datas'>>;
  deleteFeed?: Resolver<ResolversTypes['Feed'], ParentType, ContextType, RequireFields<MutationDeleteFeedArgs, '_id'>>;
  deleteManyFeed?: Resolver<Array<ResolversTypes['Feed']>, ParentType, ContextType, RequireFields<MutationDeleteManyFeedArgs, 'filter'>>;
  updateFeed?: Resolver<ResolversTypes['Feed'], ParentType, ContextType, RequireFields<MutationUpdateFeedArgs, 'data'>>;
  updateManyFeed?: Resolver<Array<ResolversTypes['Feed']>, ParentType, ContextType, RequireFields<MutationUpdateManyFeedArgs, 'datas'>>;
}>;

export type QueryResolvers<ContextType = PostsContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAllFeed?: Resolver<Array<Maybe<ResolversTypes['Feed']>>, ParentType, ContextType, Partial<QueryGetAllFeedArgs>>;
  getAllFeedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryGetAllFeedCountArgs>>;
  getFeedById?: Resolver<Maybe<ResolversTypes['Feed']>, ParentType, ContextType, RequireFields<QueryGetFeedByIdArgs, '_id'>>;
  getOneFeed?: Resolver<Maybe<ResolversTypes['Feed']>, ParentType, ContextType, Partial<QueryGetOneFeedArgs>>;
  postsHello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = PostsContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  Feed?: FeedResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = PostsContext> = ResolversObject<{
  isMHAdmin?: IsMhAdminDirectiveResolver<any, any, ContextType>;
}>;
