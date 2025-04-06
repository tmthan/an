"use client";
import BaseRepository, { lokiDB } from "@/modules/share/database";
import dayjs from "dayjs";
import { Food, RandomList } from "./types";
import { v4 } from "uuid";
import _ from "lodash";
import { Collections } from "../share/config";

export const randomListCollection = lokiDB.addCollection<RandomList>(
  Collections.RandomList
);

class RandomListRepository extends BaseRepository {
  store: Collections = Collections.RandomList;

  getRandomList(): Promise<RandomList[]> {
    return super.getAll<RandomList>(this.store);
  }

  async syncRandomList(): Promise<RandomList[]> {
    const randomList = randomListCollection.find({} as RandomList);
    await super.deleteAll(this.store);
    for (const item of randomList) {
      const cleaned = _.omit(item, ["$loki", "meta"]);
      await super.save(this.store, cleaned);
    }
    return randomList;
  }
}

export const randomListRepository = new RandomListRepository();

export function getRandomList(): RandomList[] {
  const randomList = randomListCollection
    .find({} as RandomList)
    .sort((a: RandomList, b: RandomList) =>
      dayjs(b.created_at).isAfter(dayjs(a.created_at)) ? 1 : -1
    );
  return randomList;
}

type AddRandomListParams = {
  name: string;
  list: Food[];
};

export async function addRandomList({
  name,
  list,
}: AddRandomListParams): Promise<RandomList | undefined> {
  const result = await Promise.resolve(
    randomListCollection.insert({
      id: v4(),
      name,
      items: list,
      created_at: dayjs().toDate(),
    })
  );
  await randomListRepository.syncRandomList();
  return result;
}

export async function deleteRandomList(id: string): Promise<void> {
  const result = await Promise.resolve(
    randomListCollection.findAndRemove({ id })
  );
  await randomListRepository.syncRandomList();
  return result;
}
