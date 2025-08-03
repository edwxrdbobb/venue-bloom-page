import Header from "@/components/landing/Header";
import HeroSlider from "@/components/landing/HeroSlider";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import MobileExperienceSection from "@/components/landing/MobileExperienceSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen dark">
      <Header />
      <HeroSlider />
      <FeaturesSection />
      <StatsSection />
      <MobileExperienceSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
