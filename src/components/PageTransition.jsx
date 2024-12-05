import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    y: "-100%", // Start from the bottom

    height: "100%",
  },
  animate: {
    y: "0%", // Move to the top (visible state)
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"], // Move out of the screen towards the top
    height: ["0%", "100%"],
  },
};

const PageTransition = () => {
  return (
    <>
      <motion.div
        className="fixed top-full right-0 h-screen w-screen z-30 bg-[#952C2C]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-full right-0 h-screen w-screen z-20 bg-[#e15858]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-full right-0 h-screen w-screen z-10 bg-[#b96c6c]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default PageTransition;
