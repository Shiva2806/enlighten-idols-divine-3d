import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { useAuth } from "@/store/authContext";

const Footer = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logoMark} alt="TheEnlightHub" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold font-serif text-gradient-gold">
                TheEnlightHub
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bringing divinity to life with handcrafted divine creations. Each piece is a masterwork of devotion and artistry.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-muted-foreground hover:text-gold transition-divine text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground">+91 7780391225</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <a href="mailto:info@theenlighthub.com" className="text-muted-foreground hover:text-gold transition-divine">
                  info@theenlighthub.com
                </a>
              </li>
            </ul>
          </div>

          {!isAuthenticated && (
            <div>
              <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">Account</h3>
              <Link to="/login" className="text-muted-foreground hover:text-gold hover:underline underline-offset-4 transition-divine text-sm">
                Login / Signup
              </Link>
            </div>
          )}
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TheEnlightHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
