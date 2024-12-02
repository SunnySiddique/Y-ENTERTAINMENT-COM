"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import React, { useState } from "react";

const categories = [
  { id: "general", name: "General", active: true },
  { id: "companies", name: "Companies", active: false },
  { id: "members", name: "Members", active: false },
  { id: "society", name: "Society", active: false },
];

const faqs = [
  {
    question: "Excepteur esse sit sit eiusmod cillum nostr ?",
    answer:
      "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
  },
  {
    question: "Est ad incididunt sint magna incididunt?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Proident irure officia anim ?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Id anim nisi ut magna ut ?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center py-16 px-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-black mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Frequently asked questions
        </motion.h1>
        <motion.div
          className="max-w-xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 h-12 rounded-lg border-0 shadow-sm focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent outline-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto ">
        <motion.div
          className="bg-white rounded-lg p-8 grid md:grid-cols-[240px,1fr] gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* Sidebar */}
          <div className="space-y-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#00BCD4] text-white hover:bg-[#00BCD4]/90"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* FAQ List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
              >
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full py-4 text-left text-gray-800 hover:text-[#00BCD4] transition-colors"
                >
                  <span>{faq.question}</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileInView={{
                      rotate: activeAccordion === index ? 180 : 0,
                    }}
                    viewport={{ once: false }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      duration: 0.4,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      className="pb-4 text-gray-600"
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{ opacity: 1, maxHeight: 200 }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{
                        opacity: { duration: 0.3 },
                        maxHeight: { duration: 0.5, ease: "easeInOut" },
                      }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
