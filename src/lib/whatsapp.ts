export const WHATSAPP_NUMBER = "917780391225";

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export function formatCartMessage(items: CartItem[], total: number): string {
  const lines = [
    "Hi TheEnlightHub, I'd like to place an order:",
    "",
    ...items.map((item, idx) => `${idx + 1}) ${item.name} x${item.qty} = ₹${(item.qty * item.price).toLocaleString()}`),
    "",
    "---",
    `Total: ₹${total.toLocaleString()}`,
    "",
    "Delivery: Pickup / Home Delivery",
    "Name:",
    "Phone:",
    "Address:",
  ];
  return lines.join('\n');
}

export function openWhatsAppOrder(items: CartItem[]) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const message = formatCartMessage(items, total);
  openWhatsApp(message);
}

export function openWhatsAppContact() {
  openWhatsApp("Hi TheEnlightHub, I have a question.");
}

export function openWhatsAppGeneral() {
  openWhatsApp("Hi TheEnlightHub, I'd like to place an order.");
}
