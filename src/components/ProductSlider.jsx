import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/effect-cards";
import { images, thumbnails } from "../data/images";

function ProductSlider({ setLightBox }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnail = (i) => {
    if (swiper) {
      swiper.slideTo(i);
      setActiveIndex(i);
    }
  };

  return (
    <section className="relative h-[300px] md:flex md:flex-col md:flex-1 md:min-w-0 md:min-h-[400px] lg:min-h-[495px]">
      <Swiper
        modules={[EffectFlip, EffectCards]}
        effect="flip"
        speed={500}
        breakpoints={{ 768: { effect: "cards", speed: 300 } }}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full md:cursor-pointer"
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <img
              src={img}
              onClick={() => {
                if (window.matchMedia("(min-width: 768px)").matches)
                  setLightBox(true);
              }}
              alt="product"
              className="size-full object-cover md:rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiper.slideNext()}
        disabled={activeIndex === images.length - 1}
        className="bg-white absolute rounded-full top-1/2 right-4 -translate-y-1/2 size-9 flex items-center justify-center cursor-pointer z-10 disabled:opacity-80 disabled:cursor-not-allowed md:hidden"
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => swiper.slidePrev()}
        disabled={activeIndex === 0}
        className="bg-white absolute rounded-full top-1/2 left-4 -translate-y-1/2 size-9 flex items-center justify-center cursor-pointer z-10 disabled:opacity-80 disabled:cursor-not-allowed md:hidden"
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div className="hidden md:flex md:justify-between md:mt-5">
        {thumbnails.map((thumbnail, i) => (
          <div
            key={thumbnail}
            onClick={() => handleThumbnail(i)}
            className={`rounded-xl size-18 lg:size-20 cursor-pointer border-3 ${
              activeIndex === i ? "border-orange" : "border-transparent"
            }`}
          >
            <img
              src={thumbnail}
              alt="product-thumbnail"
              className={`rounded-lg hover:opacity-50 transition duration-300 ${
                activeIndex === i && "opacity-30"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSlider;
