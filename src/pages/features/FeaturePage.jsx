import FeatureItems from "../../components/features/FeatureItems";
import RecommendedFeatures from "../../components/features/RecommendedFeatures";

const Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const FeaturesPage = () => {
  return (
    <div>
      <FeatureItems />

      <div className="">
        <RecommendedFeatures />
      </div>
    </div>
  );
};

export default FeaturesPage;
