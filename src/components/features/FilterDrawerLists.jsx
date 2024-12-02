import {
  ChevronDown,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useState } from "react";
import { filtersData } from "../../data/data";

const FilterDrawerLists = () => {
  const [showMore, setShowMore] = useState({
    category: false,
    language: false,
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* Button */}
      <div className="md:hidden flex justify-between items-center">
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="text-[#00BCD4] hover:bg-[#fff7f7] bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>

        <p className="text-[#00BCD4] hover:bg-[#fff7f7] bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center gap-2">
          Event
        </p>
      </div>
      {drawerOpen && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
        ></div>
      )}
      <div
        className={`md:hidden fixed top-0 left-0 w-64 bg-white shadow-lg h-full transform z-50 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Filter</h2>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-black hover:bg-[#eee] rounded-lg transition duration-300 p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}

          <div className="flex flex-col mt-2 gap-6 overflow-auto h-[550px]">
            <div className="flex flex-col items-center justify-center gap-4 mt-10 mb-6 relative">
              <div className="relative">
                <Search className="absolute top-[8px] left-[5px] h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Rock"
                  className="w-full px-7 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#00BCD4] focus:border-[#00BCD4]  outline-none"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute top-[8px] left-[5px] h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="New york, NY"
                  className="w-full px-7 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#00BCD4] focus:border-[#00BCD4]  outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="button"
                className="w-full bg-[#00D1D1] hover:bg-[#00B8B8] text-white py-2 px-4 rounded-md  focus:ring-2 focus:ring-offset-2 focus:ring-[#00BCD4]"
              >
                Submit
              </button>
            </div>
            {/* Categories */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Category</h3>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="space-y-2">
                {filtersData.category
                  .slice(0, showMore.category ? undefined : 5)
                  .map((item) => (
                    <label key={item.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#00BCD4] focus:ring-[#00BCD4]"
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
                  <label key={item.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#00BCD4] focus:ring-[#00BCD4]"
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
                  <label key={item.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      className="w-4 h-4 rounded border-gray-300 text-[#00BCD4] focus:ring-[#00BCD4]"
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
                    <label key={item.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        className="w-4 h-4 rounded border-gray-300 text-[#00BCD4] focus:ring-[#00BCD4]"
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
          </div>

          <div className="flex gap-4 mt-12">
            <button className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg">
              Clear all
            </button>
            <button className="flex-1 px-4 py-2 text-sm bg-[#00BCD4] text-white rounded-lg">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterDrawerLists;
