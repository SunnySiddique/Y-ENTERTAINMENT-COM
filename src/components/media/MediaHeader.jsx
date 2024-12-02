import { motion } from "framer-motion";
import {
  ChevronDown,
  Grid,
  LayoutGrid,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";

const Variants = {
  hidden: { opacity: 0, y: -30 },
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

const MediaHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [activeButton, setActiveButton] = useState("grid");

  const handleSortChange = (value) => {
    setSelectedSort(value);
    setIsOpen(false);
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={Variants}
      viewport={{ once: false, amount: 0.5 }}
      className="max-w-7xl mx-auto px-4"
    >
      <div className="flex items-center gap-4">
        {/* Filter Button */}
        <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm">Filter</span>
        </button>
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search collections"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent"
          />
        </div>
        {/* Sort Dropdown */}
        <div className="relative">
          {/* Button that toggles the dropdown */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <span>Sort by:</span>
            <span className="font-medium">{selectedSort}</span>{" "}
            {/* Display selected value */}
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>

          {/* Dropdown Options */}
          {isOpen && (
            <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md z-10">
              <ul className="space-y-2 p-2">
                <li
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg"
                  onClick={() => handleSortChange("Newest")}
                >
                  Newest
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg"
                  onClick={() => handleSortChange("Oldest")}
                >
                  Oldest
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-lg"
                  onClick={() => handleSortChange("More")}
                >
                  More
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* View Toggle Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setActiveButton("grid")} // Set 'grid' as active when clicked
            className={`p-2 text-gray-600 ${
              activeButton === "grid"
                ? "bg-[#00BCD4] text-white"
                : "hover:bg-[#00ACC1] text-gray-600"
            } rounded-lg`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveButton("layout")} // Set 'layout' as active when clicked
            className={`p-2 text-gray-600 ${
              activeButton === "layout"
                ? "bg-[#00BCD4] text-white"
                : "hover:bg-gray-100 "
            } rounded-lg`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MediaHeader;
