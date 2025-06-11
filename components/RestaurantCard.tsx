import { restaurantType } from "@/constant/type";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { convertToPersian } from "@/src/utils/convertToPersian";
import Link from "next/link";

const RestaurantCard = ({ restaurant }: { restaurant: restaurantType }) => {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <div className="flex flex-wrap w-full shadow-md hover:shadow-xl rounded-xl overflow-hidden border-2 border-gray-200">
        {/* <div className="flex flex-wrap w-full shadow-md hover:shadow-xl "> */}
        <div className="relative w-full h-36 rounded-t-xl ">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px 8px 0 0",
            }}
          />

          <div className="absolute top-8 bg-white rounded-tl-xl rounded-bl-xl px-4 py-2 text-lime-600">
            {restaurant.pay}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full -mt-8 z-40">
          <div className="  h-16 w-16 border-4 rounded-xl border-gray-300 mt-">
            <Image
              src={restaurant.logo}
              alt={restaurant.name}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          </div>

          <div className="text-lg font-bold mt-4">{restaurant.name}</div>

          <div className="flex justify-center items-center text-sm my-2">
            <FaStar style={{ color: "yellow", marginLeft: "2px" }} />

            {`${convertToPersian(restaurant.star)} (${convertToPersian(
              restaurant.rate
            )}) `}
          </div>

          <div className="flex justify-center items-center text-xs gap-2 my-2">
            <Image
              src={restaurant.delivery.icon}
              alt="delivery icon"
              width={16}
              height={16}
            />
            {`${restaurant.delivery.type} `}
            {`${convertToPersian(restaurant.delivery.price)}`}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
