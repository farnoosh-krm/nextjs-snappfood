"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DATABASE } from "@/src/data/data";
import RestaurantCard from "./RestaurantCard";
import SwiperNextButton from "./SwiperNextButton";

/**
 * A slider component for showcasing restaurants. It renders a Swiper component
 * with a custom next button and a set of RestaurantCard components for each
 * restaurant in the DATABASE.restaurants array.
 *
 * @returns {JSX.Element} The slider component.
 */

const Slider = () => {
  return (
    <div className="w-full max-w-7xl flex flex-wrap mt-16  py-6 px-3">
      <div className="flex w-full font-bold">{"تازه‌ها در اسنپ‌فود"}</div>
      <div className="flex flex-wrap p-4 w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
        >
          <SwiperNextButton />
          {DATABASE.restaurants.map((restaurant) => (
            <SwiperSlide key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
