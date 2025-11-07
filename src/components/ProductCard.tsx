import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart";
import { Product } from "@/lib/dataProvider";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "/placeholder.svg",
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-gold transition-divine border-border">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-divine group-hover:scale-110"
          />
          {product.category && (
            <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              {product.category}
            </div>
          )}
        </div>
      </Link>
      <CardContent className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif font-semibold text-xl mb-2 text-foreground group-hover:text-gold transition-divine">
            {product.name}
          </h3>
        </Link>
        {product.description && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{product.description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full font-semibold shadow-gold transition-divine group"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
