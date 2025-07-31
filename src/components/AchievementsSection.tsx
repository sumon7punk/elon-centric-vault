import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, TrendingUp, Globe, Zap } from "lucide-react";

export const AchievementsSection = () => {
  const majorAwards = [
    {
      year: "2021",
      award: "Time Person of the Year",
      organization: "Time Magazine",
      reason: "For creating solutions to an existential crisis"
    },
    {
      year: "2021",
      award: "Axel Springer Award",
      organization: "Axel Springer SE",
      reason: "Outstanding personality who is particularly committed to innovation"
    },
    {
      year: "2019",
      award: "Starmus Festival Stephen Hawking Medal",
      organization: "Starmus Festival",
      reason: "For Science Communication"
    },
    {
      year: "2018",
      award: "Royal Aeronautical Society Gold Medal",
      organization: "Royal Aeronautical Society",
      reason: "Outstanding contribution to the aerospace industry"
    },
    {
      year: "2013",
      award: "Fortune Businessperson of the Year",
      organization: "Fortune Magazine",
      reason: "Revolutionary work in multiple industries"
    },
    {
      year: "2010",
      award: "Automotive Executive of the Year",
      organization: "Automotive News",
      reason: "Leadership in electric vehicle revolution"
    }
  ];

  const achievements = [
    {
      category: "Space Exploration",
      icon: <Globe className="h-6 w-6" />,
      items: [
        "First private company to send astronauts to International Space Station",
        "Successfully landed and reused rockets, revolutionizing space industry",
        "Deployed thousands of Starlink satellites for global internet coverage",
        "Developed most powerful operational rocket (Falcon Heavy)",
        "Plans for Mars colonization with Starship program"
      ]
    },
    {
      category: "Electric Vehicles",
      icon: <Zap className="h-6 w-6" />,
      items: [
        "Made Tesla the world's most valuable automaker",
        "Accelerated global transition to electric vehicles",
        "Built largest supercharger network worldwide",
        "Achieved highest safety ratings for Tesla vehicles",
        "Advanced autonomous driving technology"
      ]
    },
    {
      category: "Business & Innovation",
      icon: <TrendingUp className="h-6 w-6" />,
      items: [
        "Founded/co-founded 6 companies worth billions",
        "Became world's richest person (2021-present)",
        "PayPal sale enabled early online payments revolution",
        "Pioneered direct-to-consumer automotive sales model",
        "Advanced sustainable energy solutions"
      ]
    },
    {
      category: "Technology & AI",
      icon: <Star className="h-6 w-6" />,
      items: [
        "Developed brain-computer interface technology (Neuralink)",
        "Advanced neural network and AI research",
        "Created high-speed transportation concept (Hyperloop)",
        "Revolutionized tunnel boring technology",
        "Promoted open-source AI development"
      ]
    }
  ];

  const records = [
    {
      title: "Richest Person in History",
      value: "$340 Billion",
      description: "Peak net worth reached in 2021",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "Fastest Company to $1T",
      value: "Tesla",
      description: "Reached trillion-dollar valuation",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Most Followed CEO",
      value: "150M+",
      description: "Social media followers across platforms",
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "Reusable Rocket Pioneer",
      value: "100+",
      description: "Successful rocket landings and reuses",
      icon: <Trophy className="h-5 w-5" />
    }
  ];

  const rankings = [
    {
      list: "Forbes Real Time Billionaires",
      position: "#1-2",
      year: "2021-2024",
      note: "Fluctuates between #1 and #2 globally"
    },
    {
      list: "Time 100 Most Influential People",
      position: "Listed",
      year: "2010, 2013, 2018, 2021",
      note: "Multiple appearances"
    },
    {
      list: "Fortune World's Greatest Leaders",
      position: "Top 10",
      year: "2019",
      note: "Recognized for industry transformation"
    },
    {
      list: "Bloomberg Billionaires Index",
      position: "#1-2",
      year: "2021-2024",
      note: "Consistently among top 2"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Awards, honors, and groundbreaking accomplishments that changed industries
          </p>
        </div>

        {/* Major Awards */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Major Awards & Honors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorAwards.map((award, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{award.year}</Badge>
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{award.award}</CardTitle>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{award.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Notable Projects & Works */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Notable Achievements by Category</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="text-primary">{category.icon}</div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Records & Rankings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Records */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Records & Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {records.map((record, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                    <div className="text-primary">{record.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{record.title}</div>
                      <div className="text-primary font-bold">{record.value}</div>
                      <div className="text-xs text-muted-foreground">{record.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rankings */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Global Rankings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rankings.map((ranking, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{ranking.list}</h4>
                      <Badge variant="secondary">{ranking.position}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{ranking.year}</div>
                    <div className="text-xs text-muted-foreground">{ranking.note}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Achievement Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Major Awards</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Companies Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Industries Disrupted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Future Impact</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};