import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const SectionHeader = ({ title, onScrollLeft, onScrollRight, title2 = "" }) => {
  return (
    <motion.div
      className="flex items-center justify-between mb-6"
      whileInView={{ opacity: 1, rotateY: 0 }}
      initial={{ opacity: 0, rotateY: -90 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <h2 className="text-2xl font-bold uppercase">
        {title} <span className="text-cyan-400">{title2}</span>
      </h2>
      <div className="flex gap-2">
        <button
          className="p-2 border rounded-md hover:bg-gray-100"
          onClick={onScrollLeft}
        >
          <ChevronLeft />
        </button>
        <button
          className="p-2 border rounded-md hover:bg-gray-100"
          onClick={onScrollRight}
        >
          <ChevronRight />
        </button>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
