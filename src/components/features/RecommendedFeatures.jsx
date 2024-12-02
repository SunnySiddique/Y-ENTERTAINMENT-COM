import { Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const recommendedItem = [
  {
    id: 1,
    title: "Fuel Your Passion for Rock Music",
    image: "/aboutImage.jpg",
    price: 100,
    date: "Tuesday, August 18 | 06:00 PM",
    location: "New York, NY",
    discount: "20% OFF",
  },
  {
    id: 2,
    title: "Musical Fusion Festival",
    image: "/aboutImage.jpg",
    price: 90,
    date: "Monday, June 06 | 06:00 PM",
    location: "New York, NY",
    discount: "20% OFF",
  },
  {
    id: 3,
    title: "Summer Beats Fest",
    image: "/aboutImage.jpg",
    price: 85,
    date: "Saturday, July 09 | 07:00 PM",
    location: "Chicago, IL",
    discount: "15% OFF",
  },
  {
    id: 4,
    title: "Classical Symphony Night",
    image: "/aboutImage.jpg",
    price: 120,
    date: "Sunday, September 11 | 08:00 PM",
    location: "Los Angeles, CA",
    discount: "30% OFF",
  },
];

const RecommendedFeatures = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperEvents = () => {
    const swiperInstance = swiperRef.current?.swiper;
    setIsBeginning(swiperInstance?.isBeginning);
    setIsEnd(swiperInstance?.isEnd);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          <span className="text-cyan-500">Recommended</span> for you
        </h2>
        <button className="text-cyan-500 hover:text-cyan-600 text-sm font-medium">
          View more
        </button>
      </div>

      <div className="relative">
        <Swiper
          spaceBetween={30}
          onSlideChange={handleSwiperEvents}
          onReachEnd={() => setIsEnd(true)}
          onReachBeginning={() => setIsBeginning(true)}
          onTouchStart={handleSwiperEvents}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
          }}
          ref={swiperRef}
        >
          {recommendedItem.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="min-w-[calc(50%-12px)] bg-white  overflow-hidden shadow-lg">
                <div
                  className="relative h-[200px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                  <div className="absolute top-0 right-0  bg-opacity-90 px-2 py-1  text-xs font-semibold text-white bg-purple-600 rounded-bl-xl">
                    {event.discount}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">From</span>
                      <span className="ml-1 text-lg font-semibold">
                        ${event.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {!isBeginning && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 z-50 hover:bg-[#eee] duration-300 transition"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {!isEnd && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 z-50 hover:bg-[#eee] duration-300 transition"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default RecommendedFeatures;
