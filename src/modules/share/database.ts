"use client";
import loki from "lokijs";
import { Collections } from "./config";
export const lokiDB = new loki("anuong.db");

export class BaseRepository {
  database: IDBDatabase | null = null;

  async init(): Promise<IDBDatabase> {
    if (this.database) return this.database;

    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open("anuong", 1);

      request.onupgradeneeded = () => {
        const db = request.result;
        // Chỉ tạo Object Store nếu chưa tồn tại
        if (!db.objectStoreNames.contains(Collections.RandomList)) {
          db.createObjectStore(Collections.RandomList, {
            keyPath: "id",
            autoIncrement: true,
          });
        }
        if (!db.objectStoreNames.contains(Collections.ShareBill)) {
          db.createObjectStore(Collections.ShareBill, {
            keyPath: "id",
            autoIncrement: true,
          });
        }
      };

      request.onsuccess = () => {
        this.database = request.result;
        resolve(this.database);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async save<T extends object>(store: string, payload: T): Promise<void> {
    const db = await this.init();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(store, "readwrite");
      const objectStore = transaction.objectStore(store);
      const serialized = JSON.parse(JSON.stringify(payload));
      const request = objectStore.add(serialized);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async getAll<T extends object>(store: string): Promise<T[]> {
    const db = await this.init();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(store, "readonly");
      const objectStore = transaction.objectStore(store);
      const request = objectStore.getAll();

      request.onsuccess = () => resolve(request.result as T[]);
      request.onerror = () => reject(request.error);
    });
  }

  async deleteAll(store: string): Promise<string> {
    const db = await this.init();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(store, "readwrite");
      const objectStore = transaction.objectStore(store);
      const request = objectStore.clear();

      request.onsuccess = () => resolve(store);
      request.onerror = () => reject(request.error);
    });
  }
}

export default BaseRepository;
