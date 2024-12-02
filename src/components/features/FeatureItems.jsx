import { Calendar, Heart, MapPin } from "lucide-react";
import LoadMoreButton from "../LoadMoreButton";

const featureItems = [
  {
    id: 1,
    title: "Rock Revolt: Power and Passion Unite",
    image: "/featureImage1.jpg",
    date: "Saturday, February 20 | 08:00 PM",
    location: "New York, NY",
    price: 90,
    tag: "15% OFF",
  },
  {
    id: 2,
    title: "Rock Fest Extravaganza",
    image: "/featureImage2.jpg",
    date: "Friday, December 17 | 08:00 PM",
    location: "New York, NY",
    price: 80,
    tag: "New item",
  },
  {
    id: 3,
    title: "A Legendary Gathering of Rock Icons",
    image: "/featureImage1.jpg",
    date: "Tuesday, June 25 | 08:00 PM",
    location: "New York, NY",
    price: 0,
    tag: "New item",
  },
  {
    id: 4,
    title: "Classic Rock Hits",
    image: "/featureImage2.jpg",
    date: "Monday, June 05 | 08:00 PM",
    location: "New York, NY",
    price: 100,
    tag: "New item",
  },
];

const FeatureItems = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {featureItems.map((item) => (
        <div
          key={item.id}
          className="bg-white  overflow-hidden shadow-sm flex flex-col md:flex-row mb-10 relative"
        >
          {item.tag && (
            <span className="px-3 py-1 text-sm text-white bg-purple-500 absolute top-0 right-0 rounded-bl-2xl">
              {item.tag}
            </span>
          )}
          <div className="relative md:w-2/5">
            <div className="relative aspect-[4/3]">
              <img
                src={item.image}
                alt="Rock Revolt concert crowd"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Content Section */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[#00D1D1] font-semibold text-sm">
                  From${item.price}
                </span>
              </div>

              <h3 className="text-lg lg:text-lg font-bold text-gray-900 mb-1 ">
                {item.title}
              </h3>

              <div className="space-y-2">
                <div className="flex items-center text-[#00D1D1] ">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-[#00D1D1] font-semibold lg:text-lg text-sm">
                    {item.date}
                  </span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Button */}
      <LoadMoreButton center={"start"} title="View More" />
    </div>
  );
};

export default FeatureItems;
