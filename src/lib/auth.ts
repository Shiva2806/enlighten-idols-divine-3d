import bcrypt from 'bcryptjs';
import { getDB } from './db';

const ADMIN_STORAGE_KEY = 'enlighthub_admin';

export interface AdminUser {
  id: string;
  email: string;
  name: string;
}

export async function signup(name: string, email: string, password: string) {
  const db = await getDB();
  
  // Check if admin already exists
  const existing = await db.getFromIndex('admin', 'by-email', email);
  if (existing) {
    throw new Error('Admin with this email already exists');
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // Create admin
  const admin = {
    id: crypto.randomUUID(),
    email,
    passwordHash,
    name,
  };

  await db.add('admin', admin);

  // Save session
  const session: AdminUser = { id: admin.id, email: admin.email, name: admin.name };
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(session));

  return session;
}

export async function login(email: string, password: string) {
  const db = await getDB();
  
  const admin = await db.getFromIndex('admin', 'by-email', email);
  if (!admin) {
    throw new Error('Invalid credentials');
  }

  const valid = await bcrypt.compare(password, admin.passwordHash);
  if (!valid) {
    throw new Error('Invalid credentials');
  }

  // Save session
  const session: AdminUser = { id: admin.id, email: admin.email, name: admin.name };
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(session));

  return session;
}

export function logout() {
  localStorage.removeItem(ADMIN_STORAGE_KEY);
}

export function getAdminSession(): AdminUser | null {
  const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getAdminSession() !== null;
}
