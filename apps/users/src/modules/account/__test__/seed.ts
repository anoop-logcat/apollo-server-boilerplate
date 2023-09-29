import mongoose, { Types } from "mongoose";

export const rawAccountData = [
  {
    _id: new Types.ObjectId("6516ad72d4c9429c9ab7aa38"),
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: "EKRzAcDImx",
    lastName: "xmmTBbkMZC",
    email: "RGI09Z0@gmail.com",
    hobbies: ["OCBO5XW5wI"],
  },
  {
    _id: new Types.ObjectId("6516ad72d4c9429c9ab7aa39"),
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: "df18OtaFBz",
    lastName: "BefRWAtkBZ",
    email: "KS2KsGH@gmail.com",
    hobbies: ["B2TQQBp9qt"],
  },
  {
    _id: new Types.ObjectId("6516ad72d4c9429c9ab7aa3a"),
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: "MNRANVGPUS",
    lastName: "cNY6BYNSng",
    email: "pndmhDW@gmail.com",
    hobbies: ["rBoQP5siTh"],
  },
  {
    _id: new Types.ObjectId("6516ad72d4c9429c9ab7aa3b"),
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: "gM2bJq86n9",
    lastName: "YqK0fDXhxl",
    email: "amu314V@gmail.com",
    hobbies: ["0PK4JXWxzK"],
  },
  {
    _id: new Types.ObjectId("6516ad72d4c9429c9ab7aa3c"),
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: "XFDrOoeEDc",
    lastName: "NNXgJEDwy5",
    email: "wlFmXJO@gmail.com",
    hobbies: ["ht0PAL3UMH"],
  },
];

export const seedAccount = async () => {
  const { collections } = mongoose.connection;
  const accountCollection = collections["accounts"];
  console.log(
    "Inserted Doc Ids: ",
    await accountCollection.insertMany(rawAccountData)
  );
};
