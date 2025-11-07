import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
              About TheEnlightHub
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where ancient spirituality meets timeless craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-gradient-gold mb-6 text-center">
              Who We Are
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At TheEnlightHub, art meets innovation. We blend timeless craftsmanship with modern design to create meaningful pieces that inspire. From divine idols that honor tradition to contemporary collectibles that celebrate imagination, every creation reflects our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Make */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-gradient-gold mb-6 text-center">
              What We Make
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                From divine idols and anime figures to accessories and personalized creations — every piece is carefully designed, crafted, and finished. Whether you seek a traditional sculpture for your sacred space, a collectible figure for your display, or a unique gift that tells a personal story, we bring your vision to life with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Materials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-gradient-gold mb-6 text-center">
              Our Materials
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                We use high-quality PLA+ — lightweight, durable, and environmentally friendly. Unlike traditional materials, PLA+ offers a smooth texture and exceptional detail retention, allowing us to capture intricate designs with precision. It's a sustainable choice that doesn't compromise on quality, ensuring your creations are both beautiful and responsible.
              </p>
              <p className="text-center italic mt-8 text-xl text-foreground">
                Every piece tells a story — of imagination, precision, and mindful design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-gold transition-divine">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4 text-gradient-gold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To bring divine artistry into every home through devotion, precision, and authenticity, making sacred art accessible to all who seek spiritual connection.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-gold transition-divine">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4 text-gradient-gold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted source for divine creations, honoring the rich traditions of sacred art across cultures while setting new standards in quality and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
