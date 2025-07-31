import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Database, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - Elon Musk Biography Portal"
        description="Learn about our privacy practices and how we handle your data on our Elon Musk biography portal."
        breadcrumbs={[
          { name: "Home", url: "https://elon-musk-biography.lovable.app" },
          { name: "Privacy Policy", url: "https://elon-musk-biography.lovable.app/privacy" }
        ]}
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Header */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm opacity-75 mt-4">Last updated: January 2024</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Privacy First</h3>
                  <p className="text-xs text-muted-foreground mt-2">We minimize data collection</p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Transparency</h3>
                  <p className="text-xs text-muted-foreground mt-2">Clear about what we collect</p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Secure</h3>
                  <p className="text-xs text-muted-foreground mt-2">Your data is protected</p>
                </CardContent>
              </Card>
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">No Selling</h3>
                  <p className="text-xs text-muted-foreground mt-2">We never sell your data</p>
                </CardContent>
              </Card>
            </div>

            {/* Information We Collect */}
            <Card className="shadow-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Information You Provide</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Contact form submissions (name, email, message)</li>
                    <li>• Feedback and suggestions you send us</li>
                    <li>• Any other information you voluntarily provide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Information Automatically Collected</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Basic usage analytics (page views, time spent)</li>
                    <li>• Device information (browser type, operating system)</li>
                    <li>• IP address and general location (country/city level)</li>
                    <li>• Referrer information (how you found our site)</li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> We do not collect sensitive personal information, financial data, 
                    or track you across other websites. Our data collection is minimal and focused on 
                    improving user experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="shadow-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Primary Uses</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Respond to your inquiries and messages</li>
                      <li>• Improve our website content and user experience</li>
                      <li>• Understand how visitors use our site</li>
                      <li>• Ensure security and prevent abuse</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">We Will Never</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sell your personal information</li>
                      <li>• Share your data with third parties for marketing</li>
                      <li>• Send unsolicited promotional emails</li>
                      <li>• Use your data for purposes not stated here</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Storage and Security */}
            <Card className="shadow-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Data Storage and Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">How We Protect Your Data</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• HTTPS encryption for all data transmission</li>
                    <li>• Secure hosting with reputable providers</li>
                    <li>• Regular security updates and monitoring</li>
                    <li>• Limited access to personal data on a need-to-know basis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Retention</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Contact form data: Kept for up to 2 years unless deletion requested</li>
                    <li>• Analytics data: Anonymized and kept for website improvement purposes</li>
                    <li>• You can request deletion of your data at any time</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card className="shadow-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    We may use privacy-focused analytics tools to understand how visitors use our site. 
                    These tools collect anonymous, aggregated data that cannot identify individual users.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">External Links</h3>
                  <p className="text-sm text-muted-foreground">
                    Our website contains links to external sites (like official company websites, news articles, etc.). 
                    We are not responsible for the privacy practices of these external sites.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="shadow-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">You Have the Right To</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Access the personal data we have about you</li>
                      <li>• Request correction of inaccurate data</li>
                      <li>• Request deletion of your personal data</li>
                      <li>• Opt out of any communications</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">How to Exercise Your Rights</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Contact us using the form on our Contact page</li>
                      <li>• Email us at privacy@elonmuskbio.com</li>
                      <li>• We will respond within 30 days</li>
                      <li>• No fees for reasonable requests</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="shadow-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our website is designed for general audiences and does not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected personal 
                  information from a child under 13, we will delete such information promptly.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Privacy Policy */}
            <Card className="shadow-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We may update this privacy policy from time to time to reflect changes in our practices 
                  or applicable laws. When we make significant changes, we will:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                  <li>• Update the "Last updated" date at the top of this policy</li>
                  <li>• Notify users of significant changes via the website</li>
                  <li>• Provide clear information about what has changed</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-card mb-8 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us About Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Email:</strong> privacy@elonmuskbio.com<br />
                    <strong>Subject:</strong> Privacy Policy Question<br />
                    <strong>Response Time:</strong> Within 30 days
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Back to Home */}
            <div className="text-center">
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

export default Privacy;