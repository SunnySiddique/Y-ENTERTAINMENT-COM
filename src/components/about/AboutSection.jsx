"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-12"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-4 uppercase"
        >
          About us
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-500 max-w-2xl mx-auto"
        >
          Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est
          esse duis occaecat reprehenderit pariatur.
        </motion.p>
      </motion.div>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="rounded-lg overflow-hidden max-w-2xl mx-auto"
      >
        <img
          src="/aboutImage.jpg"
          alt="Team collaborating around a laptop"
          className="w-full h-auto object-cover rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
