export const WHATSAPP_NUMBER = "917780391225";

function isMobile() {
  return /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function openWhatsApp(message: string) {
  const text = encodeURIComponent(message);
  const deepLink = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${text}`;
  const webLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  
  if (isMobile()) {
    // Try deep link first on mobile
    window.location.href = deepLink;
    // Fallback to web link if app not installed
    setTimeout(() => {
      const opened = window.open(webLink, '_blank', 'noopener,noreferrer');
      if (!opened) window.location.href = webLink;
    }, 700);
  } else {
    // Desktop: open in new tab
    const opened = window.open(webLink, '_blank', 'noopener,noreferrer');
    // Fallback if popup blocked
    if (!opened) window.location.href = webLink;
  }
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
