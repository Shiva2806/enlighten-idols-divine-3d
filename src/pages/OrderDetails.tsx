import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useOrders } from "@/store/orders";
import { formatPrice, formatDate } from "@/lib/formatters";

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getOrderById } = useOrders();
  const order = getOrderById(id!);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Order Not Found</h2>
          <Button onClick={() => navigate("/orders")}>
            Back to Orders
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/orders")}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Orders
          </Button>

          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="font-serif text-3xl font-bold text-gradient-gold mb-2">
                Order Details
              </h1>
              <p className="text-sm text-muted-foreground">Order ID: {order.id}</p>
              <p className="text-sm text-muted-foreground">
                Placed on {formatDate(order.createdAt)}
              </p>
            </div>
            <Badge variant="secondary" className="text-sm">
              {order.status}
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Order Items */}
            <Card className="p-6">
              <h2 className="font-serif text-xl font-bold mb-4 text-foreground">
                Order Items
              </h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.id}`}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        Quantity: {item.qty}
                      </p>
                      <p className="text-sm font-semibold text-foreground mt-1">
                        {formatPrice(item.price)} × {item.qty}
                      </p>
                    </div>
                    <p className="font-bold text-foreground">
                      {formatPrice(item.price * item.qty)}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">{formatPrice(order.subtotal)}</span>
                </div>
                {order.discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span>-{formatPrice(order.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">{formatPrice(order.shipping)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">{formatPrice(order.total)}</span>
                </div>
              </div>
            </Card>

            {/* Delivery Address */}
            <div className="space-y-6">
              {order.address && (
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h2 className="font-serif text-xl font-bold text-foreground">
                      Delivery Address
                    </h2>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-foreground">{order.address.name}</p>
                    <p className="text-muted-foreground">{order.address.phone}</p>
                    <p className="text-muted-foreground">{order.address.email}</p>
                    <Separator className="my-2" />
                    <p className="text-foreground">{order.address.street}</p>
                    <p className="text-foreground">
                      {order.address.city}, {order.address.state} - {order.address.pincode}
                    </p>
                    {order.address.landmark && (
                      <p className="text-muted-foreground italic">
                        Landmark: {order.address.landmark}
                      </p>
                    )}
                  </div>
                </Card>
              )}

              <Card className="p-6 bg-muted/50">
                <h3 className="font-semibold mb-2 text-foreground">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For any queries about your order, feel free to reach out to us.
                </p>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Support
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
