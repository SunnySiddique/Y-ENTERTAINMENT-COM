import HeroSection from "../../components/home/HeroSection";
import CTASection from "./CTASection";
import HomeAbout from "./HomeAbout";
import HomeFeaturesSection from "./HomeFeaturesSection";
import ServicesSection from "./ServicesSection";

export default function HomePage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <HomeFeaturesSection />

        {/* About Section */}
        <HomeAbout />

        {/* Services Section */}
        <ServicesSection />

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
