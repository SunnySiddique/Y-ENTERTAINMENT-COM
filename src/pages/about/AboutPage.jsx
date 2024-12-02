import AboutSection from "../../components/about/AboutSection";
import AboutTeam from "../../components/about/AboutTeam";
import TogetherSection from "../../components/about/TogetherSection";

const AboutPage = () => {
  return (
    <div className="py-10 md:py-10">
      <AboutSection />
      <AboutTeam />
      <TogetherSection />
    </div>
  );
};

export default AboutPage;
