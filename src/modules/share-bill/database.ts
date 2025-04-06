import dayjs from "dayjs";
import { Collections } from "../share/config";
import BaseRepository, { lokiDB } from "../share/database";
import { ShareBillLog } from "./types";
import _ from "lodash";

export const shareBillCollection = lokiDB.addCollection<ShareBillLog>(
  Collections.ShareBill
);

class ShareBillRepository extends BaseRepository {
  store: Collections = Collections.ShareBill;

  getShareBill(): Promise<ShareBillLog[]> {
    return super.getAll<ShareBillLog>(this.store);
  }

  async syncShareBill(): Promise<ShareBillLog[]> {
    const shareBill = shareBillCollection.find({} as ShareBillLog);
    await super.deleteAll(this.store);
    for (const item of shareBill) {
      const cleaned = _.omit(item, ["$loki", "meta"]);
      await super.save(this.store, cleaned);
    }
    return shareBill;
  }
}

export const shareBillRepository = new ShareBillRepository();

export function getShareBill(): ShareBillLog[] {
  const shareBill = shareBillCollection
    .find({} as ShareBillLog)
    .sort((a: ShareBillLog, b: ShareBillLog) =>
      new Date(b.created_at).getTime() > new Date(a.created_at).getTime()
        ? 1
        : -1
    );
  return shareBill;
}

export async function addShareBillLog(
  shareBill: ShareBillLog
): Promise<ShareBillLog | undefined> {
  const result = await Promise.resolve(
    shareBillCollection.insert({
      ...shareBill,
      name: `Chia tiền ngày ${dayjs().format("DD/MM/YYYY HH:mm:ss")}`,
      created_at: dayjs().toDate(),
    })
  );
  await shareBillRepository.syncShareBill();
  return result;
}
