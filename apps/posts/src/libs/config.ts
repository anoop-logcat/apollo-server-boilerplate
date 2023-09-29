import DataLoader from "dataloader";
import { FeedByIdBatchFunc } from "../modules/feed/feed.loader";

export function getLoaders() {
  return {
    feedByIdLoader: new DataLoader(FeedByIdBatchFunc),
  };
}
