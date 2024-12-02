import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { dropsGalleryData } from "../../data/data";
import SectionHeader from "./SectionHeader";

const DropGallerySection = () => {
  const swiperRef = useRef(null);

  return (
    <div>
      <section className="mb-12">
        <SectionHeader
          title="Drops"
          onScrollLeft={() => swiperRef.current?.slidePrev()}
          onScrollRight={() => swiperRef.current?.slideNext()}
        />
        <div className="relative">
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
              {dropsGalleryData.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, rotateY: -90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={item.image}
                        alt={`Artwork by ${item.title}`}
                        className="object-cover w-full h-auto"
                      />
                      <div className="absolute right-0 left-0 bottom-0 w-full h-[18%] bg-gradient-to-t from-black/80 via-black/8 to-transparent z-10">
                        <div className="flex justify-between items-center w-full px-4 py-2 absolute bottom-4">
                          <div className="text-sm text-white font-bold flex items-center justify-center gap-1">
                            <span>{item.title}</span>
                            <span className="text-cyan-400 flex items-center mt-1">
                              <BadgeCheck size={18} />
                            </span>
                          </div>
                          <p className="text-sm text-white font-bold">
                            {item.number}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default DropGallerySection;
