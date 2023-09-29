import { IAccountDocument, AccountModel } from "./account.model";

export async function AccountByIdBatchFunc(ids: readonly string[]) {
  const accounts = await AccountModel.find({
    _id: {
      $in: ids,
    },
  });
  return ids.map((id: string) =>
    accounts.find(
      (account: IAccountDocument) => String(account._id.valueOf()) === id
    )
  );
}
