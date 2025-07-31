import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Who is Elon Musk?",
      answer: "Elon Musk is a South African-born American entrepreneur and business magnate, best known as the CEO of Tesla Inc. and SpaceX. He's also involved with Neuralink, The Boring Company, and formerly Twitter (now X). He's recognized as one of the most influential people in technology and business."
    },
    {
      question: "How old is Elon Musk?",
      answer: "Elon Musk was born on June 28, 1971, making him 52 years old as of 2024. He was born in Pretoria, South Africa."
    },
    {
      question: "What is Elon Musk famous for?",
      answer: "Elon Musk is famous for revolutionizing multiple industries: electric vehicles with Tesla, space exploration through SpaceX, online payments with PayPal, and advancing technologies like brain-computer interfaces through Neuralink. He's known for his ambitious goals like making life multiplanetary and accelerating sustainable transportation."
    },
    {
      question: "What is Elon Musk's net worth?",
      answer: "As of 2024, Elon Musk's net worth fluctuates between $200-250 billion, making him one of the world's richest individuals. His wealth primarily comes from his stakes in Tesla and SpaceX."
    },
    {
      question: "What companies has Elon Musk founded?",
      answer: "Elon Musk has co-founded or founded several companies: Zip2 (1995), X.com/PayPal (1999), SpaceX (2002), Tesla (joined 2004, became CEO 2008), Neuralink (2016), and The Boring Company (2016). He also acquired Twitter in 2022, rebranding it to X."
    },
    {
      question: "How did Elon Musk become rich?",
      answer: "Musk's wealth journey began with Zip2's sale to Compaq for $307 million in 1999, then PayPal's sale to eBay for $1.5 billion in 2002. His major wealth came from Tesla's stock appreciation and SpaceX's valuation growth, making him the world's richest person by 2021."
    },
    {
      question: "What is SpaceX and what has it achieved?",
      answer: "SpaceX is Musk's space exploration company founded in 2002. Major achievements include: first private company to send astronauts to the ISS, successful rocket landing and reuse, launching the Starlink satellite constellation, and developing the most powerful operational rocket (Falcon Heavy)."
    },
    {
      question: "What makes Tesla special under Elon Musk's leadership?",
      answer: "Under Musk's leadership, Tesla became the world's most valuable automaker, revolutionized electric vehicle adoption, built the largest supercharger network, achieved highest safety ratings, and advanced autonomous driving technology. Tesla proved electric vehicles could be desirable and profitable."
    },
    {
      question: "What is Neuralink and why is it important?",
      answer: "Neuralink is Musk's brain-computer interface company founded in 2016. It develops implantable chips that could help treat neurological conditions and eventually enable direct communication between humans and computers. The company received FDA approval for human trials in 2023."
    },
    {
      question: "Where did Elon Musk go to school?",
      answer: "Musk attended University of Pennsylvania, where he earned bachelor's degrees in Economics (Wharton School) and Physics. He briefly attended Stanford University for a PhD in Energy Physics but left after two days to start his first company, Zip2."
    },
    {
      question: "What are Elon Musk's goals for the future?",
      answer: "Musk's primary goals include making life multiplanetary through Mars colonization, accelerating the world's transition to sustainable energy, advancing artificial intelligence safely, and enhancing human capabilities through brain-computer interfaces. He aims to ensure humanity's long-term survival."
    },
    {
      question: "How many followers does Elon Musk have on social media?",
      answer: "Elon Musk has over 150 million followers on X (formerly Twitter), making him one of the most followed individuals on the platform. He's known for his direct communication style and frequent posts about his companies and views."
    },
    {
      question: "What is The Boring Company?",
      answer: "The Boring Company is Musk's tunnel construction company founded in 2016. It aims to solve urban traffic congestion by building underground transportation tunnels. The company has completed projects like the Las Vegas Convention Center Loop."
    },
    {
      question: "Has Elon Musk written any books?",
      answer: "Elon Musk hasn't written any books himself, but several biographies have been written about him, including 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future' by Ashlee Vance and 'Elon Musk' by Walter Isaacson."
    },
    {
      question: "What awards has Elon Musk received?",
      answer: "Musk has received numerous awards including Time Person of the Year (2021), Royal Aeronautical Society Gold Medal, Axel Springer Award, and multiple recognitions from Fortune, Time 100, and other prestigious organizations for his contributions to technology and business."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Common questions about Elon Musk with direct, comprehensive answers
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Everything You Want to Know</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Quick Answer Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Quick Facts</h3>
              <p className="text-sm text-muted-foreground">
                52 years old • South African-American • 6 companies • $200B+ net worth
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Best Known For</h3>
              <p className="text-sm text-muted-foreground">
                Tesla CEO • SpaceX Founder • Mars Mission • Electric Vehicles
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card text-center">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Current Focus</h3>
              <p className="text-sm text-muted-foreground">
                Mars Colonization • AI Safety • Sustainable Energy • Neural Interfaces
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};