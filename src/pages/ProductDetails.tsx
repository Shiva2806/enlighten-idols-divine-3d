import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Package, Ruler, Palette } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/store/cart";
import { useAuth } from "@/store/authContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const { user } = useAuth();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWhatsAppEnquiry = () => {
    const message = `Hi TheEnlightHub, I'm interested in:\n\n${product.name}\nPrice: ₹${product.price.toLocaleString()}\n\n${user ? `Name: ${user.name}\nEmail: ${user.email}` : "Guest inquiry"}\n\nPlease share more details.`;
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-divine">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-divine">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.category && (
                  <div className="absolute top-6 left-6 bg-secondary text-primary px-4 py-2 rounded-full font-semibold shadow-gold">
                    {product.category}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                <span className="text-muted-foreground">inclusive of all taxes</span>
              </div>

              {/* Product Specifications */}
              <div className="bg-muted rounded-xl p-6 mb-8 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Specifications</h3>
                
                <div className="flex items-start gap-3">
                  <Palette className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Material</p>
                    <p className="text-muted-foreground">{product.material}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Dimensions</p>
                    <p className="text-muted-foreground">{product.dimensions}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Shipping</p>
                    <p className="text-muted-foreground">Securely packaged, ships within 3-5 business days</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="gradient-gold text-primary font-semibold text-lg shadow-gold hover:shadow-divine transition-divine flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-divine text-lg font-semibold"
                  onClick={handleWhatsAppEnquiry}
                >
                  Enquire on WhatsApp
                </Button>
              </div>

              {/* Detailed Description */}
              <div className="border-t border-border pt-8">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">About This Piece</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {product.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
