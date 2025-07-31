import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, FileText, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEOHead 
        title="Contact - Elon Musk Biography Portal"
        description="Get in touch with us for questions, suggestions, or collaboration opportunities regarding our Elon Musk biography portal."
        breadcrumbs={[
          { name: "Home", url: "https://elon-musk-biography.lovable.app" },
          { name: "Contact", url: "https://elon-musk-biography.lovable.app/contact" }
        ]}
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Header */}
        <section className="py-20 hero-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Have questions, suggestions, or want to contribute to our Elon Musk biography portal? 
              We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have corrections, additional information, or just want to share 
                  your thoughts about our content, we welcome your input.
                </p>

                <div className="space-y-6">
                  <Card className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Mail className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">Email Us</h3>
                          <p className="text-sm text-muted-foreground">info@elonmuskbio.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <MessageSquare className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">General Inquiries</h3>
                          <p className="text-sm text-muted-foreground">Questions about content</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">Content Corrections</h3>
                          <p className="text-sm text-muted-foreground">Help us improve accuracy</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Official Resources */}
                <Card className="shadow-card mt-8">
                  <CardHeader>
                    <CardTitle>Looking for Official Information?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      For official communications, visit these verified sources:
                    </p>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
                        Elon Musk on X <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer">
                        Tesla Official <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer">
                        SpaceX Official <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us your thoughts, suggestions, or questions..."
                          className="min-h-32"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* FAQs */}
                <Card className="shadow-card mt-8">
                  <CardHeader>
                    <CardTitle>Frequently Asked</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Can you add information about [specific topic]?</h3>
                      <p className="text-sm text-muted-foreground">
                        We're always looking to improve our content. Send us reliable sources 
                        and we'll consider adding the information.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">I found an error in your content.</h3>
                      <p className="text-sm text-muted-foreground">
                        Please let us know! We strive for accuracy and appreciate corrections 
                        with proper sources.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Are you affiliated with Elon Musk?</h3>
                      <p className="text-sm text-muted-foreground">
                        No, this is an independent educational website about the public figure Elon Musk.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

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

export default Contact;