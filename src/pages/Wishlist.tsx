import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useWishlist } from "@/store/wishlist";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/formatters";
import { toast } from "@/hooks/use-toast";

const Wishlist = () => {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  const handleMoveToCart = (item: typeof items[0]) => {
    addItem(item);
    removeItem(item.id);
    toast({
      title: "Moved to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">Your Wishlist is Empty</h2>
          <p className="text-muted-foreground mb-6">
            Save items you love for later
          </p>
          <Link to="/products">
            <Button size="lg" className="shadow-gold">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-8 text-gradient-gold">
            My Wishlist
          </h1>

          <div className="grid grid-cols-1 gap-4">
            {items.map((item) => (
              <Card key={item.id} className="p-4 hover:shadow-gold transition-divine">
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                    <p className="text-primary font-semibold text-xl">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleMoveToCart(item)}
                      size="sm"
                      className="gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Move to Cart
                    </Button>
                    <Button
                      onClick={() => {
                        removeItem(item.id);
                        toast({ title: "Removed from wishlist" });
                      }}
                      size="sm"
                      variant="outline"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
