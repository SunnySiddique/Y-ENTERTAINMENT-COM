import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { collectionWeekData } from "../../data/data";
import SectionHeader from "./SectionHeader";

const WeekCollectionSection = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <section className="mb-12">
        <SectionHeader
          title={" Top collections"}
          title2="this week"
          onScrollLeft={() => swiperRef.current?.slidePrev()}
          onScrollRight={() => swiperRef.current?.slideNext()}
        />

        <Swiper
          spaceBetween={30}
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {collectionWeekData.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  className="flex items-center gap-4 p-4 min-w-[300px] snap-start bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, rotateY: -90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={`Collection ${item.name}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h3 className="font-semibold">
                        Collection {item.floorName}
                      </h3>
                      <span className="text-black font-bold">
                        Floor: 💎 {item.diamondPrice}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-emerald-500 flex flex-col items-center">
                        {item.diamondPercent} %
                        <span className="text-cyan-400">
                          💎 {item.diamondPercentPrice}
                        </span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default WeekCollectionSection;
