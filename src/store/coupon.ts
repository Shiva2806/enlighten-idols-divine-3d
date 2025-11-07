import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { COUPON_CODES } from '@/lib/config';

interface CouponStore {
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string; discount?: number };
  removeCoupon: () => void;
  calculateDiscount: (subtotal: number) => number;
}

export const useCoupon = create<CouponStore>()(
  persist(
    (set, get) => ({
      appliedCoupon: null,

      applyCoupon: (code: string) => {
        const upperCode = code.toUpperCase();
        const coupon = COUPON_CODES[upperCode];

        if (!coupon) {
          return { success: false, message: 'Invalid coupon code' };
        }

        set({ appliedCoupon: upperCode });
        
        return {
          success: true,
          message: `Coupon applied! You get ${coupon.discount}${coupon.type === 'percentage' ? '%' : '₹'} off`,
          discount: coupon.discount
        };
      },

      removeCoupon: () => {
        set({ appliedCoupon: null });
      },

      calculateDiscount: (subtotal: number) => {
        const code = get().appliedCoupon;
        if (!code) return 0;

        const coupon = COUPON_CODES[code];
        if (!coupon) return 0;

        if (coupon.type === 'percentage') {
          return Math.round((subtotal * coupon.discount) / 100);
        }
        
        return coupon.discount;
      },
    }),
    {
      name: 'enlighthub-coupon',
    }
  )
);
