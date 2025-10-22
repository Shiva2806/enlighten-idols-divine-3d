import { useState } from "react";
import { Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, getCategories } from "@/data/products";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = getCategories();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-divine text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary/30">
              <Sparkles className="w-4 h-4 text-secondary glow-gold" />
              <span className="text-sm font-medium text-secondary">Divine Collection</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-secondary glow-gold">Products</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our curated collection of meticulously crafted 3D divine idols
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-divine ${
                  selectedCategory === category
                    ? "gradient-gold text-primary shadow-gold"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We offer custom designs tailored to your specific requirements. Get in touch with us to discuss your vision.
            </p>
            <Button size="lg" className="gradient-gold text-primary font-semibold shadow-gold hover:shadow-divine transition-divine">
              Request Custom Design
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
