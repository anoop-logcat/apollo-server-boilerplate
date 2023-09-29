import { TestDB } from "../../__test__/test-db";
import TestApolloServer from "../../__test__/test-server";
import {
  createFeedOperation,
  createManyFeedOperation,
  deleteFeedOperation,
  deleteManyFeedOperation,
  getAllFeedCountOperation,
  getAllFeedOperation,
  getFeedByIdOperation,
  getOneFeedOperation,
  updateFeedOperation,
  updateManyFeedOperation,
} from "./__test__/operations";
import { rawFeedData, seedFeed } from "./__test__/seed";

describe("Feed Module", () => {
  const server = new TestApolloServer();
  let updateUserIdOne: string = "";
  let updateUserIdTwo: string = "";

  beforeAll(async () => {
    await server.start();
    await seedFeed();
  });

  afterAll(async () => {
    await TestDB.clearData();
    await server.stop();
  });

  it("Positive - QUERY: LIST FEED BY ID", async () => {
    await getFeedByIdOperation(String(rawFeedData[0]._id.valueOf()), server);
  });

  it("Positive - QUERY: LIST FEEDS", async () => {
    await getAllFeedOperation(String(rawFeedData[1]._id.valueOf()), server);
  });

  it("Positive - QUERY: LIST ONE FEED", async () => {
    await getOneFeedOperation(String(rawFeedData[2]._id.valueOf()), server);
  });

  it("Positive - QUERY: COUNT FEEDS", async () => {
    await getAllFeedCountOperation(server);
  });

  it("Positive - MUTATION: CREATE FEED", async () => {
    await createFeedOperation(
      {
        title: "JAiKP0PcAc",
        description: "mzsfBCkAj5",
        imageUrl: "Ac62OPJJKj",
        createdById: "6516af735e10d27e4c2b1ff9",
      },
      server
    );
  });

  it("Positive - MUTATION: CREATE MANY FEEDS", async () => {
    const newUsers = await createManyFeedOperation(
      [
        {
          title: "C2lrSa9uy6",
          description: "ZOuf2DoE9S",
          imageUrl: "uNjVmVQz7H",
          createdById: "6516af735e10d27e4c2b1ffa",
        },
        {
          title: "lXNYR9icf1",
          description: "yrQKt8QqU5",
          imageUrl: "IYsbfuUlBY",
          createdById: "6516af735e10d27e4c2b1ffb",
        },
      ],
      server
    );
    updateUserIdOne = newUsers[0]._id;
    updateUserIdTwo = newUsers[1]._id;
  });

  it("Positive - MUTATION: UPDATE FEED ", async () => {
    await updateFeedOperation(
      {
        _id: updateUserIdOne,
        title: "sPvJYP9qXQ",
        description: "12Kig7eK6s",
        imageUrl: "auTKoDR2OS",
        createdById: "6516af735e10d27e4c2b1ffc",
      },
      server
    );
  });

  it("Positive - MUTATION: UPDATE MANY FEEDS", async () => {
    await updateManyFeedOperation(
      [
        {
          _id: updateUserIdOne,
          title: "sbwr8TzTic",
          description: "nepTz4iclP",
          imageUrl: "AGnzjATYTd",
          createdById: "6516af735e10d27e4c2b1ffd",
        },
        {
          _id: updateUserIdTwo,
          title: "grMtupzy4R",
          description: "mK8COVfigL",
          imageUrl: "mLaBD5UN5A",
          createdById: "6516af735e10d27e4c2b1ffe",
        },
      ],
      server
    );
  });

  it("Positive - MUTATION: DELETE FEED", async () => {
    await deleteFeedOperation(String(rawFeedData[3]._id.valueOf()), server);
  });

  it("Positive - MUTATION: DELETE FEED BY FILTER", async () => {
    await deleteManyFeedOperation(String(rawFeedData[4]._id.valueOf()), server);
  });
});
