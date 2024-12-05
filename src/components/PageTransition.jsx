import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, rotateX: 90, scale: 0.9 },
  animate: { opacity: 1, rotateX: 0, scale: 1 },
  exit: { opacity: 0, rotateX: -90, scale: 0.9 },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
