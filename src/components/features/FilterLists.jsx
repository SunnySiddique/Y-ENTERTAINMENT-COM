import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { filtersData } from "../../data/data";

const FilterLists = () => {
  const [showMore, setShowMore] = useState({
    category: false,
    language: false,
  });
  return (
    <div className=" w-64 space-y-6 hidden md:block">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Filter</h2>
        <span className="text-sm text-gray-500">6 results</span>
      </div>

      {/* Categories */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Category</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="space-y-2">
          {/* Category Checkbox */}
          {filtersData.category
            .slice(0, showMore.category ? undefined : 5)
            .map((item) => (
              <label
                className="flex items-center gap-2 cursor-pointer"
                key={item.id}
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded text-[#00BCD4] focus:ring-[#00BCD4]  cursor-pointer"
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}

          {!showMore.category && (
            <button
              onClick={() =>
                setShowMore((prev) => ({ ...prev, category: true }))
              }
              className="text-sm text-[#00BCD4]"
            >
              Show more
            </button>
          )}
        </div>
      </div>

      {/* Pricing */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Pricing</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="space-y-2">
          {filtersData.pricing.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-2  cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-[#00BCD4] focus:ring-[#00BCD4]  cursor-pointer"
              />
              <span className="text-sm">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Type */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Type</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="space-y-2">
          {filtersData.type.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-2  cursor-pointer"
            >
              <input
                type="checkbox"
                checked={item.checked}
                className="w-4 h-4 rounded border-gray-300 text-[#00BCD4] focus:ring-[#00BCD4]  cursor-pointer"
              />
              <span className="text-sm">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Language */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Language</h3>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="space-y-2">
          {filtersData.language
            .slice(0, showMore.language ? undefined : 3)
            .map((item) => (
              <label
                key={item.id}
                className="flex items-center gap-2  cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  className="w-4 h-4 rounded border-gray-300 text-[#00BCD4] focus:ring-[#00BCD4]  cursor-pointer"
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          {!showMore.language && (
            <button
              onClick={() =>
                setShowMore((prev) => ({ ...prev, language: true }))
              }
              className="text-sm text-[#00BCD4]"
            >
              Show more
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg">
          Clear all
        </button>
        <button className="flex-1 px-4 py-2 text-sm bg-[#00BCD4] text-white rounded-lg">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterLists;
