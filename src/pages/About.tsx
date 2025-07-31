import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, Heart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <SEOHead 
        title="About - Elon Musk Biography Portal"
        description="Learn about our mission to provide comprehensive, accurate, and inspiring information about Elon Musk's life, career, and achievements."
        breadcrumbs={[
          { name: "Home", url: "https://elon-musk-biography.lovable.app" },
          { name: "About", url: "https://elon-musk-biography.lovable.app/about" }
        ]}
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Header */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About This Portal</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              A comprehensive educational resource dedicated to documenting the life, 
              achievements, and impact of Elon Musk
            </p>
          </div>
        </section>

        {/* Mission & Purpose */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To provide the most comprehensive, accurate, and inspiring documentation 
                  of Elon Musk's extraordinary journey from a curious child in South Africa 
                  to becoming one of the world's most influential entrepreneurs.
                </p>
                <p className="text-muted-foreground">
                  We believe that understanding the stories of remarkable individuals like 
                  Elon Musk can inspire future generations to think bigger, work harder, 
                  and pursue ambitious goals that benefit humanity.
                </p>
              </div>
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">3000+</div>
                      <div className="text-sm text-muted-foreground">Words of Content</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">25+</div>
                      <div className="text-sm text-muted-foreground">Timeline Events</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Sources Cited</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">6</div>
                      <div className="text-sm text-muted-foreground">Companies Covered</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What We Cover */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="shadow-card text-center">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Biography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive coverage of early life, education, and personal journey
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Career</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Detailed timeline of business ventures and professional achievements
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Analysis of influence on technology, space exploration, and society
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Legacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Future implications and ongoing contributions to humanity
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Content Standards */}
            <Card className="shadow-card mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Our Content Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Accuracy & Verification</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• All information sourced from verified public records</li>
                      <li>• Cross-referenced with multiple reliable sources</li>
                      <li>• Regular updates to reflect latest developments</li>
                      <li>• Clear citations and references provided</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Educational Value</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Objective, fact-based presentation</li>
                      <li>• Balanced coverage of achievements and challenges</li>
                      <li>• Educational insights and analysis</li>
                      <li>• Inspiring content for future entrepreneurs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sources & References */}
            <Card className="shadow-card mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Sources & References</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our content is compiled from authoritative sources including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    <li>• Official company websites (Tesla, SpaceX, etc.)</li>
                    <li>• Verified interviews and speeches</li>
                    <li>• SEC filings and business documents</li>
                    <li>• Reputable news organizations</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• Academic publications and research</li>
                    <li>• Biography books by respected authors</li>
                    <li>• Government and space agency records</li>
                    <li>• Verified social media posts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Important Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This website is an independent educational resource about the public figure Elon Musk. 
                  It is not affiliated with, endorsed by, or sponsored by Elon Musk or any of his companies. 
                  All information is compiled from publicly available sources and is presented for 
                  educational and informational purposes only. We strive for accuracy but recommend 
                  verifying important information through official sources.
                </p>
              </CardContent>
            </Card>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Button variant="default" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Biography
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;