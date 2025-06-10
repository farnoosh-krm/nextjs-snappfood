"use client";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex absolute w-full justify-between top-1/2  transform -translate-y-1/2  z-10">
      <button
        onClick={() => swiper.slidePrev()}
        aria-label="اسلاید قبلی"
        className="rounded-full w-12 h-12 bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center"
      >
        <IoIosArrowForward size={"1.5em"} color="#ff00a6" />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        aria-label="اسلاید بعدی"
        className="rounded-full w-12 h-12 bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center"
      >
        <IoIosArrowBack size={"1.5em"} color="#ff00a6" />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
