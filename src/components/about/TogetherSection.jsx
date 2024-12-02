import { motion } from "framer-motion";
import aboutImage from "/aboutImage.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const TogetherSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-4 mb-20">
      <motion.div
        className="rounded-lg overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Content */}
          <motion.div
            className="bg-teal-900 p-8 md:p-12 flex flex-col justify-center"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              Let's work together!
            </motion.h2>
            <motion.p
              className="text-white/80 mb-8 max-w-md"
              variants={itemVariants}
            >
              Do consectetur proident proident id eiusmod deserunt consequat
              pariatur ad ex velit do Lorem reprehenderit.
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-white text-teal-900 px-6 py-2 rounded-md font-medium hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="relative h-64 md:h-auto"
            variants={imageVariants}
          >
            <img
              src={aboutImage}
              alt="Team collaborating together"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TogetherSection;
