import { Document, Model, Schema, model, Types } from "mongoose";

type IFeed = {
  title: string;
  description: string;
  imageUrl: string;
  createdById: Types.ObjectId;
} & Record<"createdAt" | "updatedAt", Readonly<Date>>;

export interface IFeedDocument extends IFeed, Document {}

export interface IFeedModel extends Model<IFeedDocument> {}

const FeedSchema = new Schema<IFeedDocument, IFeedModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
      unique: false,
    },
    imageUrl: {
      type: String,
      required: true,
      unique: true,
    },
    createdById: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

export const FeedModel = model<IFeedDocument, IFeedModel>("feeds", FeedSchema);
