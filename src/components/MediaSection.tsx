import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, FileText } from "lucide-react";
import teslaEventImage from "@/assets/elon-tesla-event-2024.jpg";
import spacexStarshipImage from "@/assets/elon-spacex-starship.jpg";
import timeMagazineImage from "@/assets/elon-time-magazine.jpg";
import whiteHouseImage from "@/assets/elon-white-house.jpg";

export const MediaSection = () => {
  const photoGallery = [
    {
      title: "Elon Musk at Tesla Event 2024",
      description: "Latest Tesla presentation and product launch",
      alt: "Elon Musk presenting at Tesla event 2024",
      source: "Getty Images",
      image: teslaEventImage
    },
    {
      title: "SpaceX Starship Development",
      description: "Overseeing Starship rocket development in Texas",
      alt: "Elon Musk with Starship rocket prototype at SpaceX facility",
      source: "SpaceX Official",
      image: spacexStarshipImage
    },
    {
      title: "Time Magazine Person of the Year",
      description: "Featured on Time Magazine cover as Person of the Year 2021",
      alt: "Elon Musk Time Magazine Person of the Year cover photo",
      source: "Time Magazine",
      image: timeMagazineImage
    },
    {
      title: "White House Visit 2025",
      description: "Meeting with government officials at the White House",
      alt: "Elon Musk at White House meeting 2025",
      source: "Reuters",
      image: whiteHouseImage
    }
  ];

  const videos = [
    {
      title: "Joe Rogan Podcast #2281 (Latest 2025)",
      description: "Latest 3-hour conversation about DOGE, AI, and future technology",
      platform: "YouTube",
      duration: "3 hours",
      url: "https://www.youtube.com/watch?v=sSOxPJD-VNo"
    },
    {
      title: "Joe Rogan Experience #2223",
      description: "Previous appearance discussing Tesla, SpaceX, and innovation",
      platform: "YouTube", 
      duration: "2.5 hours",
      url: "https://www.youtube.com/watch?v=7qZl_5xHoBw"
    },
    {
      title: "TED Talk: Future We're Building",
      description: "Vision for sustainable transport and space exploration",
      platform: "TED",
      duration: "15 minutes",
      url: "https://www.ted.com/talks/elon_musk_the_future_we_re_building_and_boring"
    },
    {
      title: "Tesla AI Day Presentation",
      description: "Demonstrating Tesla's artificial intelligence progress",
      platform: "Tesla",
      duration: "45 minutes",
      url: "https://www.youtube.com/watch?v=j0z4FweCy4M"
    }
  ];

  const pressLinks = [
    {
      title: "Elon Musk $170 Billion Richer Since Endorsing Trump",
      publication: "Forbes",
      date: "June 2025",
      type: "Business Analysis",
      url: "https://www.forbes.com.au/news/billionaires/elon-musk-is-170-billion-richer-since-endorsing-trump/"
    },
    {
      title: "TIME Cover: Musk Behind the Resolute Desk",
      publication: "CNN",
      date: "February 2025", 
      type: "Political Coverage",
      url: "https://www.cnn.com/2025/02/07/politics/video/the-lead-elon-musk-time-magazine-cover-president-trump-jake-tapper"
    },
    {
      title: "Musk Spent $290 Million on 2024 Election",
      publication: "CNN",
      date: "February 2025",
      type: "Political News",
      url: "https://www.cnn.com/2025/02/01/politics/elon-musk-2024-election-spending-millions"
    },
    {
      title: "Bitcoin 'Going to Take Over' - Musk Prediction",
      publication: "Forbes Australia",
      date: "Recent",
      type: "Cryptocurrency",
      url: "https://www.forbes.com.au/news/billionaires/bitcoin-going-to-take-over-elon-musk-backs-shock-40-trillion-u-s-dollar-collapse-warning-amid-price-boom/"
    },
    {
      title: "Musk Says He'll Spend 'A Lot Less' on Politics",
      publication: "CNN",
      date: "May 2025",
      type: "Political Statement", 
      url: "https://www.cnn.com/2025/05/20/business/elon-musk-politics-spending"
    },
    {
      title: "Elon Musk: Tesla, SpaceX Biography",
      publication: "Forbes",
      date: "Ongoing",
      type: "Biography",
      url: "https://www.forbes.com/profile/elon-musk/"
    }
  ];

  const quotes = [
    {
      quote: "When something is important enough, you do it even if the odds are not in your favor.",
      context: "On pursuing difficult goals"
    },
    {
      quote: "I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
      context: "On continuous improvement"
    },
    {
      quote: "The first step is to establish that something is possible; then probability will occur.",
      context: "On innovation and breakthrough thinking"
    },
    {
      quote: "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.",
      context: "On optimism and future outlook"
    }
  ];

  return (
    <section id="media" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Media & Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Photos, videos, interviews, and press coverage documenting Elon Musk's journey
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Photo Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoGallery.map((photo, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{photo.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{photo.description}</p>
                  <p className="text-xs text-muted-foreground">Source: {photo.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Videos & Interviews */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Videos & Interviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Play className="h-5 w-5 text-primary" />
                      {video.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">{video.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{video.platform}</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        Watch <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Press Coverage */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Press Coverage & News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressLinks.map((article, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <FileText className="h-5 w-5 text-primary" />
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{article.publication}</span>
                    <span className="text-muted-foreground">{article.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.type}</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Famous Quotes */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Famous Quotes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotes.map((quote, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <blockquote className="text-lg font-medium mb-4 italic">
                    "{quote.quote}"
                  </blockquote>
                  <div className="text-sm text-muted-foreground">
                    <strong>Context:</strong> {quote.context}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Official Links */}
        <div className="mt-20">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Official Links & Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-16" asChild>
                  <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                    <span className="font-semibold">X (Twitter)</span>
                    <span className="text-xs">@elonmusk</span>
                  </a>
                </Button>
                <Button variant="outline" className="h-16" asChild>
                  <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                    <span className="font-semibold">Tesla</span>
                    <span className="text-xs">Official Website</span>
                  </a>
                </Button>
                <Button variant="outline" className="h-16" asChild>
                  <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                    <span className="font-semibold">SpaceX</span>
                    <span className="text-xs">Official Website</span>
                  </a>
                </Button>
                <Button variant="outline" className="h-16" asChild>
                  <a href="https://neuralink.com" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                    <span className="font-semibold">Neuralink</span>
                    <span className="text-xs">Official Website</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};