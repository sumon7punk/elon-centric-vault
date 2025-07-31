import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building, DollarSign, Users, Award } from "lucide-react";

export const QuickFacts = () => {
  const facts = [
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Full Name",
      value: "Elon Reeve Musk"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Date of Birth",
      value: "June 28, 1971"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Age",
      value: "52 years old"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Nationality",
      value: "American, Canadian, South African"
    },
    {
      icon: <Building className="h-5 w-5" />,
      label: "Profession",
      value: "Entrepreneur, Engineer, Inventor"
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      label: "Net Worth",
      value: "$200+ Billion (2024)"
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Active Years",
      value: "1995 - Present"
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: "Known For",
      value: "Tesla, SpaceX, PayPal, Neuralink"
    }
  ];

  const socialLinks = [
    { platform: "X (Twitter)", url: "https://twitter.com/elonmusk", username: "@elonmusk" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/elon-musk", username: "Elon Musk" },
    { platform: "Instagram", url: "https://www.instagram.com/elonmusk", username: "@elonmusk" }
  ];

  return (
    <section id="quick-facts" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quick Facts & Snapshot</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential information about Elon Musk at a glance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <Card className="lg:col-span-2 shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl">Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facts.map((fact, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                    <div className="text-primary mt-1">{fact.icon}</div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">{fact.label}</div>
                      <div className="font-semibold">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl">Social Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth"
                >
                  <div className="font-semibold">{link.platform}</div>
                  <div className="text-sm text-muted-foreground">{link.username}</div>
                  <div className="text-xs text-primary">Follow →</div>
                </a>
              ))}
              
              {/* One-line Summary */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2">Summary</h3>
                <p className="text-sm">
                  South African-born entrepreneur who revolutionized electric vehicles with Tesla, 
                  advanced space exploration through SpaceX, and continues to push the boundaries 
                  of technology and innovation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};