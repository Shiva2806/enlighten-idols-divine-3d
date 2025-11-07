import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/store/cart";
import { useCoupon } from "@/store/coupon";
import { useOrders, OrderAddress } from "@/store/orders";
import { useAuth } from "@/store/authContext";
import { formatPrice } from "@/lib/formatters";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { toast } from "@/hooks/use-toast";
import { ShoppingBag } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { calculateDiscount, appliedCoupon } = useCoupon();
  const { addOrder } = useOrders();
  const { user, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState<OrderAddress>({
    name: user?.name || "",
    phone: user?.phone || "",
    email: user?.email || "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  const [errors, setErrors] = useState<Partial<OrderAddress>>({});

  const subtotal = totalPrice();
  const discount = calculateDiscount(subtotal);
  const shipping = 100; // Placeholder
  const total = subtotal - discount + shipping;

  const validateForm = (): boolean => {
    const newErrors: Partial<OrderAddress> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.street.trim()) newErrors.street = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Pincode must be 6 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "Please login to place your order",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (!validateForm()) {
      toast({
        title: "Invalid form",
        description: "Please check all required fields",
        variant: "destructive",
      });
      return;
    }

    // Create order record
    const order = addOrder({
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: item.qty,
      })),
      subtotal,
      discount,
      shipping,
      total,
      status: "Placed via WhatsApp",
      address: formData,
      userId: user?.id,
    });

    // Build WhatsApp message
    const itemsList = items
      .map((item) => `• ${item.name} x${item.qty} - ${formatPrice(item.price * item.qty)}`)
      .join("\n");

    const message = `
🛍️ *New Order from TheEnlightHub*

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

📍 *Delivery Address:*
${formData.street}
${formData.city}, ${formData.state} - ${formData.pincode}
${formData.landmark ? `Landmark: ${formData.landmark}` : ""}

🛒 *Order Details:*
${itemsList}

💰 *Order Summary:*
Subtotal: ${formatPrice(subtotal)}
${appliedCoupon ? `Discount (${appliedCoupon}): -${formatPrice(discount)}` : ""}
Shipping: ${formatPrice(shipping)}
*Total: ${formatPrice(total)}*

Order ID: ${order.id}

Please confirm delivery details and preferred payment method.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Clear cart and redirect
    clearCart();
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Order placed!",
      description: "Redirecting to WhatsApp to complete your order",
    });

    navigate("/orders");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-6">Add items to proceed to checkout</p>
          <Button onClick={() => navigate("/products")} size="lg">
            Browse Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl font-bold mb-8 text-gradient-gold text-center">
          Checkout
        </h1>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Address Form */}
          <Card className="p-6">
            <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">
              Delivery Address
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="street">Street Address *</Label>
                <Input
                  id="street"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className={errors.street ? "border-destructive" : ""}
                />
                {errors.street && <p className="text-sm text-destructive mt-1">{errors.street}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={errors.city ? "border-destructive" : ""}
                  />
                  {errors.city && <p className="text-sm text-destructive mt-1">{errors.city}</p>}
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className={errors.state ? "border-destructive" : ""}
                  />
                  {errors.state && <p className="text-sm text-destructive mt-1">{errors.state}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input
                    id="pincode"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className={errors.pincode ? "border-destructive" : ""}
                  />
                  {errors.pincode && <p className="text-sm text-destructive mt-1">{errors.pincode}</p>}
                </div>
                <div>
                  <Label htmlFor="landmark">Landmark (Optional)</Label>
                  <Input
                    id="landmark"
                    value={formData.landmark}
                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full shadow-gold mt-6">
                Place Order via WhatsApp
              </Button>
            </form>
          </Card>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                    </div>
                    <p className="font-semibold text-foreground">
                      {formatPrice(item.price * item.qty)}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">{formatPrice(subtotal)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedCoupon})</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">{formatPrice(shipping)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
