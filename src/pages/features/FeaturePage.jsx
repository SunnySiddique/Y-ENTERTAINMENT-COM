import { motion } from "framer-motion";
import FeatureItems from "../../components/features/FeatureItems";
import FeatureSearchBar from "../../components/features/FeatureSearchBar";
import FilterDrawerLists from "../../components/features/FilterDrawerLists";
import FilterLists from "../../components/features/FilterLists";
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
    <div className="max-w-7xl mx-auto p-6">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={Variants}
        viewport={{ once: false, amount: 0.5 }}
        className="text-4xl font-bold text-center mb-8 uppercase"
      >
        Search Event
      </motion.h1>

      {/* Filters Drawer (Mobile view only) */}
      <FilterDrawerLists />

      {/* Search Bar */}
      <FeatureSearchBar />

      <div className="flex gap-8">
        {/* Filters */}

        <FilterLists />

        {/* Feature items */}
        <FeatureItems />
      </div>

      <div className="">
        <RecommendedFeatures />
      </div>
    </div>
  );
};

export default FeaturesPage;
