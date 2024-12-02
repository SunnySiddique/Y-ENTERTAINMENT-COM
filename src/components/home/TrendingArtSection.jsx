import { trendingArtData } from "../../data/data";
import SectionHeader from "./SectionHeader";

import { motion } from "framer-motion";
import { BadgeCheck, Heart } from "lucide-react";
import React, { useRef } from "react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const TrendingArtSection = () => {
  const swiperRef = useRef(null);

  return (
    <div>
      <section className="mb-12">
        <SectionHeader
          title="Trending Art"
          onScrollLeft={() => swiperRef.current?.slidePrev()}
          onScrollRight={() => swiperRef.current?.slideNext()}
        />

        <div className="relative">
          <Swiper
            spaceBetween={100}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4, // Show 4 cards on large screens
                spaceBetween: 20,
              },
            }}
          >
            {trendingArtData.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  className="h-[325px] rounded-lg shadow-lg bg-white overflow-hidden"
                  initial={{ opacity: 0, rotateY: -90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  {/* Main Image */}
                  <img
                    src={item.image}
                    alt={`Artwork by ${item.title}`}
                    className="w-full h-[200px] sm:h-[250px] md:h-[200px] object-cover"
                  />

                  {/* Card Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* Profile Image */}
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={item.smImage}
                            alt={`Profile of ${item.smTitle}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900">
                            {item.title}
                          </span>
                          <div className="flex items-center">
                            <span className="font-semibold text-gray-900 text-sm">
                              {item.smTitle}
                            </span>
                            <span className="text-cyan-400 ml-1">
                              <BadgeCheck size={16} />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Heart Icon */}
                      <button
                        className="text-gray-400 hover:text-pink-500 transition-colors"
                        aria-label="Like"
                      >
                        <Heart size={24} />
                      </button>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                      {item.des}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default TrendingArtSection;
