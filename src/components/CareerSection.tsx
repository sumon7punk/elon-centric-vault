import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Rocket, Car, Brain, Globe, Zap } from "lucide-react";

export const CareerSection = () => {
  const companies = [
    {
      name: "Zip2",
      period: "1995-1999",
      role: "Co-founder",
      icon: <Globe className="h-8 w-8" />,
      description: "Web software company providing business directories and maps for newspapers.",
      achievements: [
        "First company co-founded with brother Kimbal",
        "Sold to Compaq for $307 million in 1999",
        "Musk received $22 million from the sale"
      ],
      status: "Sold"
    },
    {
      name: "X.com / PayPal",
      period: "1999-2002",
      role: "Co-founder, CEO",
      icon: <Building2 className="h-8 w-8" />,
      description: "Online financial services and payments company.",
      achievements: [
        "Founded X.com with $12 million from Zip2 sale",
        "Merged with Confinity to become PayPal",
        "Largest shareholder when sold to eBay for $1.5 billion"
      ],
      status: "Sold"
    },
    {
      name: "SpaceX",
      period: "2002-Present",
      role: "Founder, CEO, CTO",
      icon: <Rocket className="h-8 w-8" />,
      description: "Space exploration and satellite internet company.",
      achievements: [
        "First private company to send astronauts to ISS",
        "Reusable rocket technology pioneer",
        "Mars colonization mission planning",
        "Starlink satellite internet constellation"
      ],
      status: "Active"
    },
    {
      name: "Tesla",
      period: "2004-Present",
      role: "CEO, Product Architect",
      icon: <Car className="h-8 w-8" />,
      description: "Electric vehicle and clean energy company.",
      achievements: [
        "Revolutionized electric vehicle industry",
        "Most valuable automaker by market cap",
        "Supercharger network expansion",
        "Full self-driving technology development"
      ],
      status: "Active"
    },
    {
      name: "Neuralink",
      period: "2016-Present",
      role: "Co-founder",
      icon: <Brain className="h-8 w-8" />,
      description: "Neurotechnology company developing brain-computer interfaces.",
      achievements: [
        "Successful animal trials",
        "Human clinical trials approved",
        "Revolutionary brain implant technology",
        "Potential treatment for neurological conditions"
      ],
      status: "Active"
    },
    {
      name: "The Boring Company",
      period: "2016-Present",
      role: "Founder",
      icon: <Zap className="h-8 w-8" />,
      description: "Tunnel construction and infrastructure company.",
      achievements: [
        "Las Vegas Convention Center Loop",
        "Hyperloop concept development",
        "Urban transportation solutions",
        "Reduced tunneling costs"
      ],
      status: "Active"
    }
  ];

  const careerMilestones = [
    {
      year: "1995",
      title: "Entrepreneurial Beginning",
      description: "Left Stanford PhD program after 2 days to start Zip2"
    },
    {
      year: "1999",
      title: "First Major Success",
      description: "Sold Zip2 to Compaq for $307 million"
    },
    {
      year: "2002",
      title: "Space Dream Begins",
      description: "Founded SpaceX with vision of Mars colonization"
    },
    {
      year: "2008",
      title: "Tesla Breakthrough",
      description: "Became CEO during financial crisis, saved company"
    },
    {
      year: "2012",
      title: "Space Achievement",
      description: "SpaceX Dragon became first commercial spacecraft to dock with ISS"
    },
    {
      year: "2020",
      title: "Historic Mission",
      description: "SpaceX Crew Dragon successfully transported NASA astronauts"
    },
    {
      year: "2021",
      title: "Richest Person",
      description: "Became world's richest person with $200+ billion net worth"
    }
  ];

  return (
    <section id="career" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Career Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startup founder to space pioneer - the evolution of a visionary entrepreneur
          </p>
        </div>

        {/* Career Milestones Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Key Career Milestones</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>
            <div className="space-y-12">
              {careerMilestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="shadow-card hover:shadow-elegant transition-smooth">
                      <CardContent className="p-6">
                        <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                        <h4 className="font-semibold mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Companies & Ventures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-primary">{company.icon}</div>
                    <Badge variant={company.status === "Active" ? "default" : "secondary"}>
                      {company.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{company.period} • {company.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{company.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                    <ul className="text-xs space-y-1">
                      {company.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Current Status (2024)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Active Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$200B+</div>
                <div className="text-sm text-muted-foreground">Net Worth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150M+</div>
                <div className="text-sm text-muted-foreground">Social Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">29</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-center">
                <strong>Today:</strong> Continues to lead multiple groundbreaking companies while pushing 
                the boundaries of space exploration, sustainable transportation, artificial intelligence, 
                and neural technology. Actively working towards making life multiplanetary and 
                accelerating the world's transition to sustainable energy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};