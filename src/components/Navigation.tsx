import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import elonHeroImage from "@/assets/elon-musk-hero.jpg";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Biography", href: "/", section: "biography" },
    { name: "Career", href: "/", section: "career" },
    { name: "Achievements", href: "/", section: "achievements" },
    { name: "Timeline", href: "/", section: "timeline" },
    { name: "Media", href: "/", section: "media" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (section: string) => {
    if (location.pathname === "/" && section !== "about" && section !== "contact") {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img src={elonHeroImage} alt="Elon Musk" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl">Elon Musk</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.section || item.name.toLowerCase())}
                className={cn(
                  "text-foreground hover:text-primary transition-smooth font-medium",
                  location.pathname === item.href && "text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.section || item.name.toLowerCase())}
                  className={cn(
                    "block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth",
                    location.pathname === item.href && "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};