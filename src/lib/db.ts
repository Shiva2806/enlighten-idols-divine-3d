import { openDB, IDBPDatabase } from 'idb';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  active: boolean;
  createdAt: string;
}

export interface Media {
  id: string;
  dataURL: string;
  mime: string;
  name: string;
}

export interface Admin {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
}

interface EnlightHubDB {
  products: Product;
  media: Media;
  admin: Admin;
}

let dbInstance: IDBPDatabase | null = null;

export async function getDB() {
  if (dbInstance) return dbInstance;

  dbInstance = await openDB('enlighthub', 1, {
    upgrade(db) {
      // Products store
      if (!db.objectStoreNames.contains('products')) {
        const productStore = db.createObjectStore('products', { keyPath: 'id' });
        productStore.createIndex('by-category', 'category');
        productStore.createIndex('by-active', 'active');
      }

      // Media store
      if (!db.objectStoreNames.contains('media')) {
        db.createObjectStore('media', { keyPath: 'id' });
      }

      // Admin store
      if (!db.objectStoreNames.contains('admin')) {
        const adminStore = db.createObjectStore('admin', { keyPath: 'id' });
        adminStore.createIndex('by-email', 'email', { unique: true });
      }
    },
  });

  return dbInstance;
}
