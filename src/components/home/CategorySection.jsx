import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { useRef } from "react";
import { EffectCoverflow } from "swiper/modules";
import SectionHeader from "./SectionHeader";

const categories = [
  {
    title: "Music",
    images: [
      {
        url: "/aboutImage.jpg",
        name: "Music Image 1",
      },
      {
        url: "/featureImage1.jpg",
        name: "Music Image 2",
      },
      {
        url: "pexels.jpg",
        name: "Music Image 3",
      },
    ],
  },
  {
    title: "Photography",
    images: [
      { url: "/pexels.jpg", name: "Photography Image 1" },
      {
        url: "singleImage.jpg",
        name: "Photography Image 2",
      },
      {
        url: "pexels.jpg",
        name: "Photography Image 3",
      },
    ],
  },
  {
    title: "Art",
    images: [
      {
        url: "pexels.jpg",
        name: "Art Image 1",
      },
      {
        url: "pexels.jpg",
        name: "Art Image 2",
      },
      {
        url: "pexels.jpg",
        name: "Art Image 3",
      },
    ],
  },
  {
    title: "Team member",
    images: [
      {
        url: "pexels.jpg",
        name: "Art Image 1",
      },
      {
        url: "pexels.jpg",
        name: "Art Image 2",
      },
      {
        url: "pexels.jpg",
        name: "Art Image 3",
      },
    ],
  },
];

const CategorySection = () => {
  const swiperRef = useRef(null);
  return (
    <div className="px-4 py-8">
      <SectionHeader
        onScrollLeft={() => swiperRef.current?.slidePrev()}
        onScrollRight={() => swiperRef.current?.slideNext()}
        title={"Browse by"}
        title2="Categories"
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {/* 1st Card */}
        <SwiperSlide>
          <div className="bg-purple-500 p-4 rounded-lg h-full w-full flex justify-center items-center">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className="nestedSwiper"
            >
              {categories[0]?.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="rounded-[5px] w-full h-[200px] object-cover"
                    src={image.url}
                    alt={image.name}
                    title={image.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h2 className="text-2xl font-bold text-center mt-2 ">
            {categories[0].title}
          </h2>
        </SwiperSlide>

        {/* 2nd Card */}
        <SwiperSlide>
          <div className="bg-cyan-500 p-6 rounded-lg h-full w-full flex justify-center items-center">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className="nestedSwiper"
            >
              {categories[1]?.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="rounded-[5px] w-full h-[200px] object-cover"
                    src={image.url}
                    alt={image.name}
                    title={image.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {categories[1]?.title && (
            <h2 className="text-2xl font-bold text-center mt-2">
              {categories[1].title}
            </h2>
          )}
        </SwiperSlide>

        {/* 3rd Card */}
        <SwiperSlide>
          <div className="bg-green-500 p-6 rounded-lg h-full w-full flex justify-center items-center">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className="nestedSwiper"
            >
              {categories[2]?.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="rounded-[5px] w-full h-[200px] object-cover"
                    src={image.url}
                    alt={image.name}
                    title={image.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {categories[2]?.title && (
            <h2 className="text-2xl font-bold text-center mt-2">
              {categories[2].title}
            </h2>
          )}
        </SwiperSlide>
        {/* 4th Card */}
        <SwiperSlide>
          <div className="bg-orange-500 p-6 rounded-lg h-full w-full flex justify-center items-center">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className="nestedSwiper"
            >
              {categories[3]?.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="rounded-[5px]"
                    src={image.url}
                    alt={image.name}
                    title={image.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {categories[2]?.title && (
            <h2 className="text-2xl font-bold text-center mt-2">
              {categories[3].title}
            </h2>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default CategorySection;
