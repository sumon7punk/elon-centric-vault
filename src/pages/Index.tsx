import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { QuickFacts } from "@/components/QuickFacts";
import { BiographySection } from "@/components/BiographySection";
import { CareerSection } from "@/components/CareerSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { MediaSection } from "@/components/MediaSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEOHead />
      <Navigation />
      <main>
        <HeroSection />
        <QuickFacts />
        <BiographySection />
        <CareerSection />
        <AchievementsSection />
        <TimelineSection />
        <MediaSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
