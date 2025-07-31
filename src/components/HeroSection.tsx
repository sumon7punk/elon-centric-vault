import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink } from "lucide-react";
import heroImage from "@/assets/elon-musk-hero.jpg";

export const HeroSection = () => {
  const scrollToQuickFacts = () => {
    const element = document.getElementById("quick-facts");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Elon Musk</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-gray-300">
                Entrepreneur, Visionary, Innovator
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-2xl">
              CEO of Tesla & SpaceX • Revolutionizing transportation, space exploration, 
              and the future of technology. Discover the life and achievements of the world's 
              most influential entrepreneur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToQuickFacts}
                className="transform hover:scale-105"
              >
                Explore Biography
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                asChild
              >
                <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
                  Follow on X
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">$200B+</div>
                <div className="text-sm text-gray-300">Net Worth</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">52</div>
                <div className="text-sm text-gray-300">Years Old</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-gray-300">Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">150M+</div>
                <div className="text-sm text-gray-300">X Followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};