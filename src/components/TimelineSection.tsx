import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "1971",
      date: "June 28",
      title: "Birth",
      description: "Born in Pretoria, South Africa",
      category: "Personal",
      significance: "Beginning of a revolutionary life"
    },
    {
      year: "1983",
      date: "Age 12",
      title: "First Computer Program",
      description: "Created and sold video game 'Blastar' for $500",
      category: "Technology",
      significance: "First entrepreneurial success"
    },
    {
      year: "1988",
      date: "Age 17",
      title: "Moved to Canada",
      description: "Obtained Canadian citizenship through mother",
      category: "Personal",
      significance: "Escape from South African apartheid"
    },
    {
      year: "1995",
      date: "Age 24",
      title: "Founded Zip2",
      description: "Co-founded web software company with brother Kimbal",
      category: "Business",
      significance: "First major business venture"
    },
    {
      year: "1999",
      date: "February",
      title: "Zip2 Sale",
      description: "Sold to Compaq for $307 million",
      category: "Business",
      significance: "First major financial success"
    },
    {
      year: "1999",
      date: "March",
      title: "Founded X.com",
      description: "Online financial services company",
      category: "Business",
      significance: "Pioneered online payments"
    },
    {
      year: "2000",
      date: "March",
      title: "X.com Merger",
      description: "Merged with Confinity to become PayPal",
      category: "Business",
      significance: "Created payment revolution"
    },
    {
      year: "2002",
      date: "October",
      title: "PayPal Sale",
      description: "eBay acquired PayPal for $1.5 billion",
      category: "Business",
      significance: "Gained resources for future ventures"
    },
    {
      year: "2002",
      date: "May",
      title: "Founded SpaceX",
      description: "Space Exploration Technologies Corp.",
      category: "Space",
      significance: "Beginning of private space industry"
    },
    {
      year: "2004",
      date: "February",
      title: "Joined Tesla",
      description: "Led Series A funding round, became chairman",
      category: "Automotive",
      significance: "Electric vehicle revolution begins"
    },
    {
      year: "2006",
      date: "August",
      title: "SpaceX First Launch",
      description: "Falcon 1 first attempt (failed)",
      category: "Space",
      significance: "Learning from early failures"
    },
    {
      year: "2008",
      date: "September",
      title: "Falcon 1 Success",
      description: "First privately-funded liquid rocket to reach orbit",
      category: "Space",
      significance: "Proved private space capability"
    },
    {
      year: "2008",
      date: "October",
      title: "Tesla CEO",
      description: "Became CEO and product architect",
      category: "Automotive",
      significance: "Leadership during financial crisis"
    },
    {
      year: "2010",
      date: "June",
      title: "Tesla IPO",
      description: "Tesla went public on NASDAQ",
      category: "Business",
      significance: "First car company IPO since Ford in 1956"
    },
    {
      year: "2012",
      date: "May",
      title: "Dragon Docks with ISS",
      description: "First commercial spacecraft to dock with ISS",
      category: "Space",
      significance: "Commercial space transportation proven"
    },
    {
      year: "2015",
      date: "December",
      title: "Falcon 9 Landing",
      description: "First successful rocket landing and recovery",
      category: "Space",
      significance: "Reusable rocket technology proven"
    },
    {
      year: "2016",
      date: "July",
      title: "Founded Neuralink",
      description: "Brain-computer interface company",
      category: "Technology",
      significance: "Advancing human-AI symbiosis"
    },
    {
      year: "2016",
      date: "December",
      title: "The Boring Company",
      description: "Tunnel construction company founded",
      category: "Transportation",
      significance: "Solving urban transportation"
    },
    {
      year: "2018",
      date: "February",
      title: "Falcon Heavy Success",
      description: "Most powerful operational rocket launched",
      category: "Space",
      significance: "Heavy payload capacity achieved"
    },
    {
      year: "2020",
      date: "May",
      title: "Crew Dragon Demo-2",
      description: "First crewed SpaceX mission to ISS",
      category: "Space",
      significance: "Return of US human spaceflight"
    },
    {
      year: "2021",
      date: "January",
      title: "World's Richest Person",
      description: "Net worth surpassed $200 billion",
      category: "Business",
      significance: "Unprecedented wealth accumulation"
    },
    {
      year: "2021",
      date: "December",
      title: "Time Person of the Year",
      description: "Recognized for transforming multiple industries",
      category: "Recognition",
      significance: "Global influence acknowledged"
    },
    {
      year: "2022",
      date: "October",
      title: "Acquired Twitter",
      description: "Purchased for $44 billion, renamed to X",
      category: "Business",
      significance: "Free speech platform transformation"
    },
    {
      year: "2023",
      date: "May",
      title: "Neuralink Human Trial",
      description: "FDA approval for human brain implant trials",
      category: "Technology",
      significance: "Medical breakthrough potential"
    },
    {
      year: "2024",
      date: "Present",
      title: "Ongoing Innovations",
      description: "Starship development, FSD advancement, AI progress",
      category: "Innovation",
      significance: "Continued technological advancement"
    }
  ];

  const categoryColors = {
    Personal: "bg-blue-500",
    Technology: "bg-purple-500",
    Business: "bg-green-500",
    Space: "bg-red-500",
    Automotive: "bg-orange-500",
    Transportation: "bg-yellow-500",
    Recognition: "bg-pink-500",
    Innovation: "bg-indigo-500"
  };

  return (
    <section id="timeline" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Interactive Timeline</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chronological journey through life and career milestones
          </p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categoryColors).map(([category, color]) => (
            <Badge key={category} variant="outline" className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${color}`}></div>
              {category}
            </Badge>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary"></div>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Mobile/Tablet Layout */}
                <div className="md:hidden flex items-start space-x-4 w-full">
                  <div className="flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full ${categoryColors[event.category]} border-4 border-background relative z-10`}></div>
                  </div>
                  <Card className="flex-1 shadow-card hover:shadow-elegant transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{event.year}</Badge>
                        <Badge variant="secondary">{event.category}</Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                      <p className="text-sm mb-2">{event.description}</p>
                      <p className="text-xs text-muted-foreground italic">{event.significance}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:flex items-center w-full ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className="w-5/12">
                    {index % 2 === 0 && (
                      <Card className="shadow-card hover:shadow-elegant transition-smooth">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline">{event.year}</Badge>
                            <Badge variant="secondary">{event.category}</Badge>
                          </div>
                          <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{event.date}</p>
                          <p className="text-sm mb-3">{event.description}</p>
                          <p className="text-xs text-muted-foreground italic">{event.significance}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="w-2/12 flex justify-center">
                    <div className={`w-6 h-6 rounded-full ${categoryColors[event.category]} border-4 border-background relative z-10`}></div>
                  </div>

                  <div className="w-5/12">
                    {index % 2 === 1 && (
                      <Card className="shadow-card hover:shadow-elegant transition-smooth">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline">{event.year}</Badge>
                            <Badge variant="secondary">{event.category}</Badge>
                          </div>
                          <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{event.date}</p>
                          <p className="text-sm mb-3">{event.description}</p>
                          <p className="text-xs text-muted-foreground italic">{event.significance}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Statistics */}
        <div className="mt-20">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Timeline Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">53</div>
                  <div className="text-sm text-muted-foreground">Years of Life</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">29</div>
                  <div className="text-sm text-muted-foreground">Years in Business</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Companies Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Major Milestones</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};