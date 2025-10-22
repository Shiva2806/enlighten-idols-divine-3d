import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, Award, Users } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Divine 3D Idols"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary/30">
              <Sparkles className="w-4 h-4 text-secondary glow-gold" />
              <span className="text-sm font-medium text-secondary">Premium 3D Divine Craftsmanship</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bring Divinity to Life with{" "}
              <span className="text-secondary glow-gold">3D Precision</span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Experience the perfect fusion of ancient spirituality and modern technology. Each idol is meticulously crafted with divine attention to detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="gradient-gold text-primary font-semibold text-lg px-8 shadow-gold hover:shadow-divine transition-divine w-full sm:w-auto">
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-semibold text-lg px-8 transition-divine w-full sm:w-auto">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured <span className="text-gradient-gold">Creations</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most beloved divine idols, each crafted with precision and devotion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-divine">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-divine text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-secondary glow-gold">Enlight Idols</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We combine traditional craftsmanship with cutting-edge 3D technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-divine hover:shadow-gold">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-secondary glow-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center">Divine Precision</h3>
              <p className="text-white/80 text-center leading-relaxed">
                Every detail is rendered with microscopic accuracy using advanced 3D printing technology, ensuring unmatched quality.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-divine hover:shadow-gold">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-secondary glow-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center">Premium Quality</h3>
              <p className="text-white/80 text-center leading-relaxed">
                We use only the finest materials with divine gold finishes that capture light beautifully and last for generations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-divine hover:shadow-gold">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-secondary glow-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center">Custom Creations</h3>
              <p className="text-white/80 text-center leading-relaxed">
                Need something unique? We offer personalized designs tailored to your spiritual preferences and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Bring Divinity Home?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience the perfect blend of tradition and technology. Each idol is a testament to divine craftsmanship and modern innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="gradient-gold text-primary font-semibold text-lg px-8 shadow-gold hover:shadow-divine transition-divine">
                  Browse Collection
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 transition-divine">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
