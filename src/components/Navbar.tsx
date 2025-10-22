import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-foreground transition-smooth group-hover:text-primary group-hover:glow-burgundy" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
            <span className="text-2xl font-bold font-serif text-foreground">
              <span>Enlight</span> <span>Idols</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-smooth hover:text-primary relative group ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-burgundy transform origin-left transition-smooth ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <ThemeToggle />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-burgundy hover:shadow-wine transition-smooth">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-smooth hover:text-primary px-4 py-2 rounded-lg ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 flex items-center justify-between">
                <ThemeToggle />
                <Button className="flex-1 ml-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-burgundy">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
