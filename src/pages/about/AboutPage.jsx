import AboutPeopleSection from "../../components/about/AboutPeopleSection";
import AboutSection from "../../components/about/AboutSection";
import AboutTeam from "../../components/about/AboutTeam";
import CompanyHistorySection from "../../components/about/CompanyHistorySection";
import CompanyOverviewSection from "../../components/about/CompanyOverviewSection";
import TogetherSection from "../../components/about/TogetherSection";
import ValuesSection from "../../components/about/ValuesSection";
import VisionAndMissionSection from "../../components/about/VisionAndMissionSection";

const AboutPage = () => {
  return (
    <div>
      {/* About Section */}
      <AboutSection />

      {/* Vision and Mission Section */}
      <VisionAndMissionSection />

      {/* Company Overview Section */}
      <CompanyOverviewSection />

      {/* Company History Section */}
      <CompanyHistorySection />

      {/* Values Section */}
      <ValuesSection />

      {/* About Team Section */}
      <AboutPeopleSection />

      {/* About Team Section */}
      <AboutTeam />

      {/* Together Section */}
      <TogetherSection />
    </div>
  );
};

export default AboutPage;
