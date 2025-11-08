import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users } from "lucide-react";
import { openWhatsAppGeneral } from "@/lib/whatsapp";
import heroIdol from "@/assets/hero-idol.jpg";
import heroAnime from "@/assets/hero-anime.jpg";
import heroKeychain from "@/assets/hero-keychain.jpg";
import heroCustom from "@/assets/hero-custom.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Bring Ideas to Life with{" "}
                <span className="text-gradient-gold">Timeless Craftsmanship</span>
              </h1>
              
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We design and produce high-quality creations — from traditional idols and anime collectibles to everyday accessories and custom gifts — all made with lightweight, eco-friendly PLA+ material.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <Button size="lg" className="font-semibold text-lg px-8 shadow-gold transition-divine w-full sm:w-auto">
                    Explore Products
                  </Button>
                </Link>
                <Button 
                  onClick={openWhatsAppGeneral}
                  size="lg" 
                  variant="outline" 
                  className="font-semibold text-lg px-8 w-full sm:w-auto border-2"
                >
                  Contact on WhatsApp
                </Button>
              </div>
            </div>

            {/* Diagonal Collage */}
            <section id="home-collage" className="w-full mt-16">
              {/* Desktop: 4 columns */}
              <div className="hidden lg:grid grid-cols-4 gap-6">
                {[
                  { img: heroIdol, label: "Traditional Idols", alt: "PLA+ printed Ganesha idol with visible layer lines", href: "/products?category=idols" },
                  { img: heroAnime, label: "Anime Collectibles", alt: "PLA+ printed anime figure in matte plastic", href: "/products?category=collectibles" },
                  { img: heroKeychain, label: "Keychains & Utilities", alt: "PLA+ printed geometric keychain with matte finish", href: "/products?category=utilities" },
                  { img: heroCustom, label: "Custom Creations", alt: "Custom PLA+ printed creation with visible filament texture", href: "/products?category=custom" }
                ].map((item, idx) => (
                  <Link 
                    key={idx}
                    to={item.href}
                    className="diag-panel h-[360px] block"
                  >
                    <img className="diag-img" src={item.img} alt={item.alt} />
                    <div className="diag-overlay" />
                    <div className="diag-title">
                      <h3 className="text-2xl md:text-3xl">{item.label}</h3>
                      <div className="diag-sub">Crafted in PLA+</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Tablet: 2x2 */}
              <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
                {[
                  { img: heroIdol, label: "Traditional Idols", alt: "PLA+ printed Ganesha idol with visible layer lines", href: "/products?category=idols" },
                  { img: heroAnime, label: "Anime Collectibles", alt: "PLA+ printed anime figure in matte plastic", href: "/products?category=collectibles" },
                  { img: heroKeychain, label: "Keychains & Utilities", alt: "PLA+ printed geometric keychain with matte finish", href: "/products?category=utilities" },
                  { img: heroCustom, label: "Custom Creations", alt: "Custom PLA+ printed creation with visible filament texture", href: "/products?category=custom" }
                ].map((item, idx) => (
                  <Link 
                    key={idx}
                    to={item.href}
                    className="diag-panel h-[280px] block"
                  >
                    <img className="diag-img" src={item.img} alt={item.alt} />
                    <div className="diag-overlay" />
                    <div className="diag-title">
                      <h3 className="text-xl">{item.label}</h3>
                      <div className="diag-sub">Crafted in PLA+</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile: stacked */}
              <div className="sm:hidden space-y-4">
                {[
                  { img: heroIdol, label: "Traditional Idols", alt: "PLA+ printed Ganesha idol with visible layer lines", href: "/products?category=idols" },
                  { img: heroAnime, label: "Anime Collectibles", alt: "PLA+ printed anime figure in matte plastic", href: "/products?category=collectibles" },
                  { img: heroKeychain, label: "Keychains & Utilities", alt: "PLA+ printed geometric keychain with matte finish", href: "/products?category=utilities" },
                  { img: heroCustom, label: "Custom Creations", alt: "Custom PLA+ printed creation with visible filament texture", href: "/products?category=custom" }
                ].map((item, idx) => (
                  <Link 
                    key={idx}
                    to={item.href}
                    className="diag-panel h-[220px] block"
                  >
                    <img className="diag-img" src={item.img} alt={item.alt} />
                    <div className="diag-overlay" />
                    <div className="diag-title">
                      <h3 className="text-lg">{item.label}</h3>
                      <div className="diag-sub text-sm">Crafted in PLA+</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              Why Choose TheEnlightHub
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Where ancient spirituality meets timeless craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-gold transition-divine">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center text-foreground">Precision</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Every detail is crafted with meticulous attention, ensuring unmatched quality and authenticity.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-gold transition-divine">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center text-foreground">Quality</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                We use only the finest materials with divine finishes that last for generations.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-gold transition-divine">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-center text-foreground">Customization</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Need something unique? We offer personalized designs tailored to your spiritual preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              Ready to Bring Divinity Home?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience the perfect blend of tradition and artistry. Each creation is a testament to divine craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="font-semibold text-lg px-8 shadow-gold transition-divine">
                  Browse Collection
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 transition-divine border-2">
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
