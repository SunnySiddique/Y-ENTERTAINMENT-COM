import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "/images/aboutImage.jpg";
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={aboutImage}
          alt="Hero background"
          className="object-cover w-full h-full"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-primary-foreground"
        >
          Innovate. Transform. Succeed.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-primary-muted-foreground"
        >
          We help businesses thrive in the digital age with cutting-edge
          solutions and expert strategies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground py-2 px-6 sm:py-3 sm:px-8 rounded-full font-semibold text-sm sm:text-lg transition duration-300 inline-flex items-center hover:bg-primary/80 hover:text-white"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
