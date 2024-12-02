import { MapPin, Search } from "lucide-react";

const FeatureSearchBar = () => {
  return (
    <>
      {/* Search Bar */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-16 md:block hidden">
        <div className="flex items-center bg-gray-50 rounded-lg overflow-hidden">
          <div className="flex-1 flex items-center px-4 py-3">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Rock"
              className="bg-transparent w-full outline-none text-gray-600 placeholder-gray-500"
            />
          </div>
          <div className="w-px h-6 bg-gray-300" />
          <div className="flex-2 flex items-center px-4 py-3">
            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="New York, NY"
              className="bg-transparent w-full outline-none text-gray-600 placeholder-gray-500"
            />
          </div>
          <button className="bg-[#00D1D1] hover:bg-[#00B8B8] text-white px-8 py-3 font-medium">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default FeatureSearchBar;
