import { motion } from "framer-motion";
import React from "react";

const companyData = [
  {
    id: 1,
    image: "/pexels.jpg",
    companyName: "Company 1",
  },
  {
    id: 2,
    image: "/pexels.jpg",
    companyName: "Company 2",
  },
  {
    id: 3,
    image: "/pexels.jpg",
    companyName: "Company 3",
  },
  {
    id: 4,
    image: "/pexels.jpg",
    companyName: "Company 4",
  },
  {
    id: 5,
    image: "/pexels.jpg",
    companyName: "Company 5",
  },
];

const CompanySection = () => {
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
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-2xl font-bold mb-8 uppercase"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Partners
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {companyData.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex gap-2 items-center grayscale hover:grayscale-0 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={item.image}
                  alt={`Partner ${index + 1}`}
                  className="w-10 h-10 rounded-md object-cover"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {item.companyName}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompanySection;
