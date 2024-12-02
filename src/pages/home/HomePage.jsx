import CategorySection from "../../components/home/CategorySection";
import CompanySection from "../../components/home/CompanySection";
import DropGallerySection from "../../components/home/DropGallerySection";
import GetStartedSection from "../../components/home/GetStartedSection";
import HeroSection from "../../components/home/HeroSection";
import TrendingArtSection from "../../components/home/TrendingArtSection";
import WeekCollectionSection from "../../components/home/WeekCollectionSection";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto overflow-hidden p-6">
      <div>
        <HeroSection />

        <div className="mt-10">
          <DropGallerySection />
        </div>

        <div className="mt-20">
          <WeekCollectionSection />
        </div>

        <div className="mt-20">
          <TrendingArtSection />
        </div>

        <div className="mt-20">
          <GetStartedSection />
        </div>

        <div className="mt-20">
          <CompanySection />
        </div>

        <div className="mt-20">
          <CategorySection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
