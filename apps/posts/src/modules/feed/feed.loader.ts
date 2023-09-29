import { IFeedDocument, FeedModel } from "./feed.model";

export async function FeedByIdBatchFunc(ids: readonly string[]) {
  const feeds = await FeedModel.find({
    _id: {
      $in: ids,
    },
  });
  return ids.map((id: string) =>
    feeds.find((feed: IFeedDocument) => String(feed._id.valueOf()) === id)
  );
}
