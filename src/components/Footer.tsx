import { Link } from "react-router-dom";
import { Sparkles, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <Sparkles className="w-8 h-8 text-secondary glow-gold" />
              <span className="text-2xl font-bold font-serif">
                Enlight <span className="text-secondary">Idols</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Bringing divinity to life with precision-crafted 3D idols. Each piece is a masterwork of divine artistry and modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-secondary transition-divine text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 1234567890</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">info@enlightidols.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">123 Divine Street, Sacred City, IN 400001</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-secondary">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-divine hover:glow-gold"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-secondary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-divine hover:glow-gold"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-secondary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-divine hover:glow-gold"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-secondary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Enlight Idols. All rights reserved. Crafted with divine precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
