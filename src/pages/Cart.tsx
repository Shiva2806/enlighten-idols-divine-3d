import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/store/cart';
import { useAuth } from '@/store/authContext';
import { WHATSAPP_NUMBER } from '@/lib/config';
import { ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, updateQty, removeItem, totalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    const userName = isAuthenticated ? user?.name : "Guest";
    const userEmail = isAuthenticated ? user?.email : "";
    
    const orderDetails = items.map((item, idx) => 
      `${idx + 1}. ${item.name} x${item.qty} = ₹${(item.price * item.qty).toLocaleString()}`
    ).join('\n');
    
    const total = totalPrice();
    const message = `Hi TheEnlightHub, I'd like to place an order:\n\n${isAuthenticated ? `Name: ${userName}\nEmail: ${userEmail}\n\n` : 'Guest Order\n\n'}${orderDetails}\n\n---\nSubtotal: ₹${total.toLocaleString()}\nShipping: TBD\nTotal: ₹${total.toLocaleString()}\n\nPlease confirm delivery address and payment preference.`;
    
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Add some divine creations to your cart</p>
          <Link to="/products">
            <Button size="lg">Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-gradient-gold mb-8">Shopping Cart</h1>

        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-xl mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">₹{item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">{item.qty}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Subtotal</p>
                    <p className="text-2xl font-bold">₹{(item.price * item.qty).toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-serif font-bold">Total</span>
              <span className="text-3xl font-bold text-primary">₹{totalPrice().toLocaleString()}</span>
            </div>
            <Button onClick={handleCheckout} size="lg" className="w-full mb-4">
              Order on WhatsApp
            </Button>
            <Button variant="outline" onClick={clearCart} className="w-full">
              Clear Cart
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
