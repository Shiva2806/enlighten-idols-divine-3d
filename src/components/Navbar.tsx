import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useCart } from "@/store/cart";
import { useAuth } from "@/store/authContext";
import { openWhatsAppGeneral } from "@/lib/whatsapp";
import logoMark from "@/assets/logo-mark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

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
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logoMark} 
              alt="TheEnlightHub" 
              className="w-10 h-10 object-contain transition-divine group-hover:scale-110"
              style={{ filter: 'drop-shadow(0 0 4px rgba(231, 200, 120, 0.4))' }}
            />
            <span className="text-2xl font-bold font-serif text-foreground">
              TheEnlightHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-divine hover:text-gold relative group ${
                  isActive(link.path) ? "text-gold" : "text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gold transform origin-left transition-divine ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <ThemeToggle />
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
                {totalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems()}
                  </span>
                )}
              </Button>
            </Link>
            {isAuthenticated ? (
              <>
                <Button 
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate("/profile")}
                  title={user?.name}
                >
                  <User className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost"
                  size="icon"
                  onClick={logout}
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="outline" className="font-semibold">
                  Login/Signup
                </Button>
              </Link>
            )}
            <Button 
              onClick={openWhatsAppGeneral}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-gold transition-divine"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
                {totalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems()}
                  </span>
                )}
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-gold transition-divine"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
              <div className="px-4 space-y-3">
                <div className="flex items-center justify-between">
                  <ThemeToggle />
                  {isAuthenticated ? (
                    <div className="flex gap-2">
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigate("/profile");
                          setIsOpen(false);
                        }}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                      <Button 
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm">
                        Login/Signup
                      </Button>
                    </Link>
                  )}
                </div>
                <Button 
                  onClick={openWhatsAppGeneral}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-gold"
                >
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
