import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
  category?: string;
}

const ProductCard = ({ id, name, image, price, description, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-divine transition-divine border-border/50">
      <Link to={`/products/${id}`}>
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-divine group-hover:scale-110"
          />
          {category && (
            <div className="absolute top-4 left-4 bg-secondary/90 text-primary px-3 py-1 rounded-full text-xs font-semibold shadow-gold">
              {category}
            </div>
          )}
        </div>
      </Link>
      <CardContent className="p-6">
        <Link to={`/products/${id}`}>
          <h3 className="font-serif font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-divine">
            {name}
          </h3>
        </Link>
        {description && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">₹{price.toLocaleString()}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full gradient-gold text-primary font-semibold shadow-gold hover:shadow-divine transition-divine group">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
