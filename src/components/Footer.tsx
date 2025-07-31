import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ExternalLink } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "Biography", href: "#biography" },
    { name: "Career", href: "#career" },
    { name: "Achievements", href: "#achievements" },
    { name: "Timeline", href: "#timeline" },
    { name: "Media", href: "#media" },
    { name: "FAQ", href: "#faq" }
  ];

  const officialLinks = [
    { name: "Tesla", url: "https://www.tesla.com" },
    { name: "SpaceX", url: "https://www.spacex.com" },
    { name: "Neuralink", url: "https://neuralink.com" },
    { name: "The Boring Company", url: "https://www.boringcompany.com" }
  ];

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EM</span>
              </div>
              <span className="font-bold text-xl">Elon Musk</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive biography and achievements of the world's most influential entrepreneur, 
              visionary, and innovator. Discover the journey from PayPal to Mars.
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 mx-1" />
              <span>for inspiration</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleSmoothScroll(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Links */}
          <div>
            <h3 className="font-semibold mb-4">Official Links</h3>
            <ul className="space-y-2">
              {officialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Elon Musk Biography Portal. Educational resource about public figure.
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
                Follow on X
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://en.wikipedia.org/wiki/Elon_Musk" target="_blank" rel="noopener noreferrer">
                Wikipedia
              </a>
            </Button>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            This is an educational biography website about public figure Elon Musk. 
            Information compiled from public sources including official websites, interviews, 
            news articles, and verified public records. Not affiliated with Elon Musk or his companies.
          </p>
        </div>
      </div>
    </footer>
  );
};