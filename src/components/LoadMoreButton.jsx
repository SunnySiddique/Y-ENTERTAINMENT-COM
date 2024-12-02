import { motion } from "framer-motion";

const Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};
const LoadMoreButton = ({ title, center = "center" }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={Variants}
      viewport={{ once: false, amount: 0.5 }}
      className="flex justify-center mb-16"
      style={{ justifyContent: center }}
    >
      <button className="px-6 py-2 border border-[#00BCD4] text-[#00BCD4] rounded-lg hover:bg-[#00BCD4] hover:text-white transition-colors">
        {title}
      </button>
    </motion.div>
  );
};

export default LoadMoreButton;
