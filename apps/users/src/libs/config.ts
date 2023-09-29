import DataLoader from "dataloader";
import { AccountByIdBatchFunc } from "../modules/account/account.loader";

export function getLoaders() {
  return {
    accountByIdLoader: new DataLoader(AccountByIdBatchFunc),
  };
}
