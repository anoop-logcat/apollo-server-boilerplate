import { Document, Model, Schema, model, Types } from "mongoose";

type IAccount = {
  firstName: string;
  lastName: string;
  email: string;
  hobbies: string[];
} & Record<"createdAt" | "updatedAt", Readonly<Date>>;

export interface IAccountDocument extends IAccount, Document {}

export interface IAccountModel extends Model<IAccountDocument> {}

const AccountSchema = new Schema<IAccountDocument, IAccountModel>(
  {
    firstName: {
      type: String,
      required: true,
      unique: false,
    },
    lastName: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hobbies: {
      type: [String],
      required: false,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

export const AccountModel = model<IAccountDocument, IAccountModel>(
  "accounts",
  AccountSchema
);
