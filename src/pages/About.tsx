import { Sparkles, Target, Eye, Hammer } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-divine text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary/30">
              <Sparkles className="w-4 h-4 text-secondary glow-gold" />
              <span className="text-sm font-medium text-secondary">Our Story</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-secondary glow-gold">Enlight Idols</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Where ancient tradition meets modern innovation to create divine masterpieces
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Who We <span className="text-gradient-gold">Are</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Enlight Idols was born from a profound reverence for divine craftsmanship and a passion for technological innovation. We are a team of artisans, engineers, and devotees who believe that spirituality deserves the highest quality of expression.
                </p>
                <p>
                  Our journey began with a simple question: How can we preserve the intricate beauty of traditional idol-making while embracing the precision of modern technology? The answer led us to master the art of 3D printing, transforming digital designs into tangible expressions of divinity.
                </p>
                <p>
                  Today, we're proud to serve thousands of devotees worldwide, bringing divine presence into homes, temples, and sacred spaces with our meticulously crafted idols.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl transform rotate-3" />
              <img
                src={workshopImage}
                alt="Our Workshop"
                className="relative rounded-2xl shadow-divine w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-divine transition-divine">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to premium divine idols by combining traditional craftsmanship with cutting-edge 3D technology, ensuring every devotee can bring home a masterpiece of divine artistry at an accessible price.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-divine transition-divine">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted source for divine 3D idols, setting new standards in quality, precision, and spiritual authenticity while honoring the rich traditions of sacred art across cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Craft */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Hammer className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">
                Our <span className="text-gradient-gold">Craft</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                The journey from digital design to divine masterpiece
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-2">Digital Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our skilled artisans create highly detailed 3D models, capturing every nuance of traditional iconography with precision software. Each curve, ornament, and sacred symbol is meticulously rendered.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-2">Precision 3D Printing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Using state-of-the-art 3D printers and premium PLA materials, we bring the digital design to life. Our technology allows for microscopic detail that would be impossible with traditional methods.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-2">Divine Finishing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Each idol undergoes careful post-processing, including smoothing, priming, and the application of our signature golden metallic finish. The final coating is applied with divine attention to detail.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Before shipping, every idol passes through rigorous quality checks. We ensure that each piece meets our exacting standards for detail, finish, and spiritual authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
