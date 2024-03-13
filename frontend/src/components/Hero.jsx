import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/Hero.css";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-content-one container mx-auto px-44">
            <h2 className="text-[120px] text-white font-semibold">
              Together
              <span className="text-[40px] text-white leading-3">
                We can make life better
              </span>
            </h2>
            <p className="text-base font-medium text-white mt-14">
              Love, care and help make a difference in this world.
              <span>
                Even a small contribution becomes a part of a huge change .
              </span>
            </p>
            <button
              type="submit"
              className="bg-[#D43C18] text-white font-medium text-[15px] mt-8 py-2.5 px-6 rounded-3xl hover:bg-white hover:text-[#d43c18] transition-all"
            >
              Donate Now!
            </button>
          </div>
          <img src="/image/bg-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-content-two container mx-auto px-44 text-center">
            <h2 className="text-[110px] text-[#4d7cad] font-semibold">
              Adoption
              <span className="text-[42px] text-[#3d3d3d] font-semibold leading-3">
                Give a child hope
              </span>
            </h2>
            <p className="text-base font-medium text-[#959595] mt-14">
              Adoption program is meant to bring happiness to all
              <span>
                families. Having a child is a blessing. have parents is a need
              </span>
            </p>
            <button
              type="submit"
              className="bg-[#D43C18] text-white font-medium text-[15px] mt-8 py-2.5 px-6 rounded-3xl hover:bg-white hover:text-[#d43c18] transition-all"
            >
              Donate Now!
            </button>
          </div>
          <img src="/image/bg-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-content-three container mx-auto px-44 text-center">
            <h2 className="text-[130px] text-[#d43c18] font-semibold">
              Family
              <span className="text-[30px] text-[#3d3d3d] font-semibold leading-3">
                This is where happiness is born
              </span>
            </h2>
            <p className="text-base font-medium text-[#959595] mt-14">
              When building a healthy community families are higly important.
              <span>Happy society starts with a happy family.</span>
            </p>
            <button
              type="submit"
              className="bg-[#D43C18] text-white font-medium text-[15px] mt-8 py-2.5 px-6 rounded-3xl hover:bg-white hover:text-[#d43c18] transition-all"
            >
              Donate Now!
            </button>
          </div>
          <img src="/image/bg-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-content-four container mx-auto px-44 text-center">
            <h2 className="text-[100px] text-[#1093c8] font-semibold">
              Sweet Home
              <span className="text-[40px] text-[#3d3d3d] font-semibold leading-3">
                Is a place everybody needs
              </span>
            </h2>
            <p className="text-base font-medium text-[#959595] mt-14">
              Adoption program is meant to bring happiness to all
              <span>
                families. Having a child is a blessing. have parents is a need
              </span>
            </p>
            <button
              type="submit"
              className="bg-[#D43C18] text-white font-medium text-[15px] mt-8 py-2.5 px-6 rounded-3xl hover:bg-white hover:text-[#d43c18] transition-all"
            >
              Donate Now!
            </button>
          </div>
          <img src="/image/bg-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
