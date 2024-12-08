import { motion } from "framer-motion";
import EarthCanvas from "../../canvas/EarthCanvas";
import StarsCanvas from "../../canvas/StartCanvas";

const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

const AnimatedEarth = () => {
  return (
    <>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <StarsCanvas />
        <EarthCanvas />
      </motion.div>
    </>
  );
};

export default AnimatedEarth;
