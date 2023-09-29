import { TestDB } from "../../__test__/test-db";
import TestApolloServer from "../../__test__/test-server";
import {
  createAccountOperation,
  createManyAccountOperation,
  deleteAccountOperation,
  deleteManyAccountOperation,
  getAllAccountCountOperation,
  getAllAccountOperation,
  getAccountByIdOperation,
  getOneAccountOperation,
  updateAccountOperation,
  updateManyAccountOperation,
} from "./__test__/operations";
import { rawAccountData, seedAccount } from "./__test__/seed";

describe("Account Module", () => {
  const server = new TestApolloServer();
  let updateUserIdOne: string = "";
  let updateUserIdTwo: string = "";

  beforeAll(async () => {
    await server.start();
    await seedAccount();
  });

  afterAll(async () => {
    await TestDB.clearData();
    await server.stop();
  });

  it("Positive - QUERY: LIST ACCOUNT BY ID", async () => {
    await getAccountByIdOperation(
      String(rawAccountData[0]._id.valueOf()),
      server
    );
  });

  it("Positive - QUERY: LIST ACCOUNTS", async () => {
    await getAllAccountOperation(
      String(rawAccountData[1]._id.valueOf()),
      server
    );
  });

  it("Positive - QUERY: LIST ONE ACCOUNT", async () => {
    await getOneAccountOperation(
      String(rawAccountData[2]._id.valueOf()),
      server
    );
  });

  it("Positive - QUERY: COUNT ACCOUNTS", async () => {
    await getAllAccountCountOperation(server);
  });

  it("Positive - MUTATION: CREATE ACCOUNT", async () => {
    await createAccountOperation(
      {
        firstName: "xgb4YQuyTP",
        lastName: "L6Om9bmEY7",
        email: "Hx2cFbm@gmail.com",
        hobbies: ["5KVLMjuHJv"],
      },
      server
    );
  });

  it("Positive - MUTATION: CREATE MANY ACCOUNTS", async () => {
    const newUsers = await createManyAccountOperation(
      [
        {
          firstName: "Vt818oOtPz",
          lastName: "a5EUZoETlJ",
          email: "rocvsW6@gmail.com",
          hobbies: ["9aLsVhdwmc"],
        },
        {
          firstName: "3YuQ0ZwiJp",
          lastName: "fb9eNe9teF",
          email: "mhBgHoT@gmail.com",
          hobbies: ["o2RSRo0xAM"],
        },
      ],
      server
    );
    updateUserIdOne = newUsers[0]._id;
    updateUserIdTwo = newUsers[1]._id;
  });

  it("Positive - MUTATION: UPDATE ACCOUNT ", async () => {
    await updateAccountOperation(
      {
        _id: updateUserIdOne,
        firstName: "ytIJ4g3WGo",
        lastName: "HaJagKn54r",
        email: "lNaIfJ9@gmail.com",
        hobbies: ["28PJZiwfwj"],
      },
      server
    );
  });

  it("Positive - MUTATION: UPDATE MANY ACCOUNTS", async () => {
    await updateManyAccountOperation(
      [
        {
          _id: updateUserIdOne,
          firstName: "Y0adlFSL9O",
          lastName: "AcRc6rl5Y0",
          email: "jXvdtbx@gmail.com",
          hobbies: ["ahZst0y4yR"],
        },
        {
          _id: updateUserIdTwo,
          firstName: "HhQrkePFEh",
          lastName: "OCDldm6MpC",
          email: "GVDrcOa@gmail.com",
          hobbies: ["ByXehN9tId"],
        },
      ],
      server
    );
  });

  it("Positive - MUTATION: DELETE ACCOUNT", async () => {
    await deleteAccountOperation(
      String(rawAccountData[3]._id.valueOf()),
      server
    );
  });

  it("Positive - MUTATION: DELETE ACCOUNT BY FILTER", async () => {
    await deleteManyAccountOperation(
      String(rawAccountData[4]._id.valueOf()),
      server
    );
  });
});
