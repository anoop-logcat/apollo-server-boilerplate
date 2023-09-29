import mongoose, { Types } from "mongoose";

export const rawFeedData = [
  {
    _id: new Types.ObjectId("6516af735e10d27e4c2b1fff"),
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "ic7sWsYnrX",
    description: "b37NnYxuTt",
    imageUrl: "vJO1ItW5cT",
    createdById: new Types.ObjectId("6516af735e10d27e4c2b2000"),
  },
  {
    _id: new Types.ObjectId("6516af735e10d27e4c2b2001"),
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "BH9mv8DZzg",
    description: "iBxZmsbs2D",
    imageUrl: "bexF9oM2Qu",
    createdById: new Types.ObjectId("6516af735e10d27e4c2b2002"),
  },
  {
    _id: new Types.ObjectId("6516af735e10d27e4c2b2003"),
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "bK6F3rUxft",
    description: "VoPcZurb1J",
    imageUrl: "Y84xYZEepR",
    createdById: new Types.ObjectId("6516af735e10d27e4c2b2004"),
  },
  {
    _id: new Types.ObjectId("6516af735e10d27e4c2b2005"),
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "SIGXRADRKl",
    description: "AfvjhOTEFI",
    imageUrl: "knTZVFk4pe",
    createdById: new Types.ObjectId("6516af735e10d27e4c2b2006"),
  },
  {
    _id: new Types.ObjectId("6516af735e10d27e4c2b2007"),
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "Rx3la7Wulq",
    description: "nx6GaT38FT",
    imageUrl: "sy2OmqFyVl",
    createdById: new Types.ObjectId("6516af735e10d27e4c2b2008"),
  },
];

export const seedFeed = async () => {
  const { collections } = mongoose.connection;
  const feedCollection = collections["feeds"];
  console.log(
    "Inserted Doc Ids: ",
    await feedCollection.insertMany(rawFeedData)
  );
};
