import { DATABASE } from "@/src/data/data";
import React from "react";
import Image from "next/image";
import { convertToPersian } from "@/src/utils/convertToPersian";

const Menu = ({ restaurantId }: { restaurantId: number }) => {
  const foods = DATABASE.foods.filter((food) => food.id !== +restaurantId);
  return (
    <div className="flex flex-wrap w-full md:w-2/4">
      <div
        className="w-full rounded-t-xl py-4 bg-white border-gray-300 border-b-0 text-sm text-center "
        style={{ borderWidth: "0.5px" }}
      >
        {"غذاها"}
      </div>

      {foods.map((food) => (
        <div
          className="flex flex-wrap w-full  md:w-1/2 bg-white p-4 border-gray-300"
          style={{ borderWidth: "0.5px" }}
          key={food.id}
        >
          {/* //////// */}
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-center ml-2">
              <div className="font-bold">{food.name}</div>
              <div className="text-sm mt-2 text-[#474747]">{food.desc}</div>
            </div>

            <div>
              <div className="w-28 h-28 rounded-xl">
                <Image
                  src={food.image}
                  alt={food.name}
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "100%" }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full mt-4 justify-between items-center">
            <p className="text-sm text-[#474747]">{`${convertToPersian(
              food.price
            )} تومان`}</p>

            <div className="px-8 py-2 bg-white text-pink-500 hover:text-white hover:bg-pink-500 rounded-xl cursor-pointer shadow-xl border-2 border-gray-100 ">
              {"افزودن"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
