import { getDB } from './db';

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

export async function getAllProducts(): Promise<Product[]> {
  const db = await getDB();
  return db.getAll('products');
}

export async function getActiveProducts(): Promise<Product[]> {
  const db = await getDB();
  const all = await db.getAll('products');
  return all.filter((p) => p.active);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const db = await getDB();
  return db.get('products', id);
}

export async function createProduct(product: Omit<Product, 'id' | 'createdAt'>): Promise<Product> {
  const db = await getDB();
  const newProduct: Product = {
    ...product,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  await db.add('products', newProduct);
  return newProduct;
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<void> {
  const db = await getDB();
  const existing = await db.get('products', id);
  if (!existing) throw new Error('Product not found');
  await db.put('products', { ...existing, ...updates });
}

export async function deleteProduct(id: string): Promise<void> {
  const db = await getDB();
  await db.delete('products', id);
}

export async function saveMedia(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataURL = e.target?.result as string;
      const db = await getDB();
      const id = crypto.randomUUID();
      await db.add('media', {
        id,
        dataURL,
        mime: file.type,
        name: file.name,
      });
      resolve(dataURL);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
