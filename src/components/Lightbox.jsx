import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import { images, thumbnails } from "../data/images";

function Lightbox({ lightBox, setLightBox }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnail = (i) => {
    if (swiper) {
      swiper.slideTo(i);
      setActiveIndex(i);
    }
  };
  return (
    <section
      data-testid="lightbox"
      className={`md:flex flex-col items-center justify-center fixed w-full h-screen inset-0 bg-black-lightbox z-60 transition-all duration-300 ${
        lightBox ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div>
        <svg
          data-testid="close"
          onClick={() => setLightBox(false)}
          className="ml-auto mb-4 text-[#69707D] hover:text-orange cursor-pointer transition duration-300"
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <div className="relative">
          <Swiper
            modules={[EffectCube]}
            effect="cube"
            speed={400}
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-[390px] h-[400px]"
          >
            {images.map((img) => (
              <SwiperSlide
                key={img}
                className={`${lightBox ? "visible" : "invisible!"}`}
              >
                <img
                  src={img}
                  alt="product"
                  className="size-full object-cover md:rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiper.slideNext()}
            disabled={activeIndex === images.length - 1}
            className="bg-white absolute rounded-full top-1/2 right-0 -translate-y-1/2 translate-x-1/2 size-11 flex items-center justify-center z-10 cursor-pointer disabled:brightness-80 disabled:cursor-not-allowed"
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
            className="bg-white absolute rounded-full top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 size-11 flex items-center justify-center z-10 cursor-pointer disabled:brightness-80 disabled:cursor-not-allowed"
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between mt-5">
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
                className={`rounded-lg hover:brightness-70 transition duration-300 ${
                  activeIndex === i && "brightness-50"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lightbox;
