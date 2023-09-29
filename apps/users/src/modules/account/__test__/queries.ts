import { CreateAccountInput, UpdateAccountInput } from "../../../libs/types";

export const getAccountById = (_id: string) => {
  return {
    query: ` 
      query getAccountById($_id: ID!) {
        getAccountById(_id: $_id) {
          _id
          createdAt
          updatedAt
          firstName
lastName
email
hobbies
        }
      }
      `,
    variables: {
      _id: _id,
    },
  };
};

export const getAllAccount = (
  search: string,
  filter: any,
  sort: any,
  limit: number,
  offset: number
) => {
  return {
    query: `
      query getAllAccount($search:String, $filter: JSON, $sort: JSON, $limit: Int, $offset: Int) {
        getAllAccount(search:$search, filter: $filter, sort: $sort, limit: $limit, offset: $offset) {
          _id
          createdAt
          updatedAt
          firstName
lastName
email
hobbies
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

export const getOneAccount = (filter: any, sort: any) => {
  return {
    query: `
      query getOneAccount($filter: JSON, $sort: JSON) {
        getOneAccount(filter: $filter, sort: $sort) {
          _id
          createdAt
          updatedAt
          firstName
lastName
email
hobbies
        }
      }
  `,
    variables: {
      filter: filter,
      sort: sort,
    },
  };
};

export const getAllAccountCount = (search: string, filter: any) => {
  return {
    query: `
      query getAllAccountCount($search: String, $filter: JSON) {
        getAllAccountCount(filter: $filter, search: $search) 
      }
  `,
    variables: {
      search: search,
      filter: filter,
    },
  };
};

export const createAccount = (data: CreateAccountInput) => {
  return {
    query: `
      mutation createAccount($data: CreateAccountInput!) {
        createAccount(data: $data) {
          _id
          createdAt
          updatedAt
          firstName
lastName
email
hobbies
        }
      }
  `,
    variables: {
      data: data,
    },
  };
};

export const createManyAccount = (datas: CreateAccountInput[]) => {
  return {
    query: `
      mutation createManyAccount($datas: [CreateAccountInput!]!) {
        createManyAccount(datas: $datas) {
          _id
          createdAt
          updatedAt
          firstName
lastName
email
hobbies
        }
      }
  `,
    variables: {
      datas: datas,
    },
  };
};

export const updateAccount = (data: UpdateAccountInput) => {
  return {
    query: `
      mutation updateAccount($data: UpdateAccountInput!) {
        updateAccount(data: $data) {
          _id
          createdAt
          updatedAt
          firstName
lastName
email
hobbies
        }
      }
  `,
    variables: {
      data: data,
    },
  };
};

export const updateManyAccount = (datas: UpdateAccountInput[]) => {
  return {
    query: `
      mutation updateManyAccount($datas: [UpdateAccountInput!]!) {
        updateManyAccount(datas: $datas) {
          _id
          createdAt
          updatedAt
          firstName
lastName
email
hobbies
        }
      }
  `,
    variables: {
      datas: datas,
    },
  };
};

export const deleteAccount = (_id: string) => {
  return {
    query: `
      mutation deleteAccount($_id: ID!) {
        deleteAccount(_id: $_id) {
          _id
          createdAt
          updatedAt
          firstName
lastName
email
hobbies
        }
      }
  `,
    variables: {
      _id: _id,
    },
  };
};

export const deleteManyAccount = (filter: any) => {
  return {
    query: `
      mutation deleteManyAccount($filter: JSON!) {
        deleteManyAccount(filter: $filter) {
          _id
          createdAt
          updatedAt
          firstName
lastName
email
hobbies
        }
      }
  `,
    variables: {
      filter: filter,
    },
  };
};
