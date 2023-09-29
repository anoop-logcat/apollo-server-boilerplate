import { CreateFeedInput, UpdateFeedInput } from "../../../libs/types";

export const getFeedById = (_id: string) => {
  return {
    query: ` 
      query getFeedById($_id: ID!) {
        getFeedById(_id: $_id) {
          _id
          createdAt
          updatedAt
          title
description
imageUrl
createdById
        }
      }
      `,
    variables: {
      _id: _id,
    },
  };
};

export const getAllFeed = (
  search: string,
  filter: any,
  sort: any,
  limit: number,
  offset: number
) => {
  return {
    query: `
      query getAllFeed($search:String, $filter: JSON, $sort: JSON, $limit: Int, $offset: Int) {
        getAllFeed(search:$search, filter: $filter, sort: $sort, limit: $limit, offset: $offset) {
          _id
          createdAt
          updatedAt
          title
description
imageUrl
createdById
        }
      }
  `,
    variables: {
      search: search,
      filter: filter,
      sort: sort,
      limit: limit,
      offset: offset,
    },
  };
};

export const getOneFeed = (filter: any, sort: any) => {
  return {
    query: `
      query getOneFeed($filter: JSON, $sort: JSON) {
        getOneFeed(filter: $filter, sort: $sort) {
          _id
          createdAt
          updatedAt
          title
description
imageUrl
createdById
        }
      }
  `,
    variables: {
      filter: filter,
      sort: sort,
    },
  };
};

export const getAllFeedCount = (search: string, filter: any) => {
  return {
    query: `
      query getAllFeedCount($search: String, $filter: JSON) {
        getAllFeedCount(filter: $filter, search: $search) 
      }
  `,
    variables: {
      search: search,
      filter: filter,
    },
  };
};

export const createFeed = (data: CreateFeedInput) => {
  return {
    query: `
      mutation createFeed($data: CreateFeedInput!) {
        createFeed(data: $data) {
          _id
          createdAt
          updatedAt
          title
description
imageUrl
createdById
        }
      }
  `,
    variables: {
      data: data,
    },
  };
};

export const createManyFeed = (datas: CreateFeedInput[]) => {
  return {
    query: `
      mutation createManyFeed($datas: [CreateFeedInput!]!) {
        createManyFeed(datas: $datas) {
          _id
          createdAt
          updatedAt
          title
description
imageUrl
createdById
        }
      }
  `,
    variables: {
      datas: datas,
    },
  };
};

export const updateFeed = (data: UpdateFeedInput) => {
  return {
    query: `
      mutation updateFeed($data: UpdateFeedInput!) {
        updateFeed(data: $data) {
          _id
          createdAt
          updatedAt
          title
description
imageUrl
createdById
        }
      }
  `,
    variables: {
      data: data,
    },
  };
};

export const updateManyFeed = (datas: UpdateFeedInput[]) => {
  return {
    query: `
      mutation updateManyFeed($datas: [UpdateFeedInput!]!) {
        updateManyFeed(datas: $datas) {
          _id
          createdAt
          updatedAt
          title
description
imageUrl
createdById
        }
      }
  `,
    variables: {
      datas: datas,
    },
  };
};

export const deleteFeed = (_id: string) => {
  return {
    query: `
      mutation deleteFeed($_id: ID!) {
        deleteFeed(_id: $_id) {
          _id
          createdAt
          updatedAt
          title
description
imageUrl
createdById
        }
      }
  `,
    variables: {
      _id: _id,
    },
  };
};

export const deleteManyFeed = (filter: any) => {
  return {
    query: `
      mutation deleteManyFeed($filter: JSON!) {
        deleteManyFeed(filter: $filter) {
          _id
          createdAt
          updatedAt
          title
description
imageUrl
createdById
        }
      }
  `,
    variables: {
      filter: filter,
    },
  };
};
