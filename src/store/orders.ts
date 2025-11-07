import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { generateId } from '@/lib/formatters';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

export interface OrderAddress {
  name: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

export interface Order {
  id: string;
  createdAt: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: 'Placed via WhatsApp' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  address?: OrderAddress;
  userId?: string;
}

interface OrdersStore {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'createdAt'>) => Order;
  getOrderById: (id: string) => Order | undefined;
  getUserOrders: (userId?: string) => Order[];
}

export const useOrders = create<OrdersStore>()(
  persist(
    (set, get) => ({
      orders: [],
      
      addOrder: (orderData) => {
        const newOrder: Order = {
          ...orderData,
          id: generateId(),
          createdAt: new Date().toISOString(),
        };
        
        set((state) => ({
          orders: [newOrder, ...state.orders]
        }));
        
        return newOrder;
      },

      getOrderById: (id) => {
        return get().orders.find((o) => o.id === id);
      },

      getUserOrders: (userId) => {
        if (!userId) return [];
        return get().orders.filter((o) => o.userId === userId);
      },
    }),
    {
      name: 'enlighthub-orders',
    }
  )
);
