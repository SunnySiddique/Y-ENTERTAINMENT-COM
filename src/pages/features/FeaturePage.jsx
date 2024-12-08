import FeatureItems from "../../components/features/FeatureItems";
import RecommendedFeatures from "../../components/features/RecommendedFeatures";

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
