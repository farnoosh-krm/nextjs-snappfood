import React from "react";
import Image from "next/image";
import shopPic from "../public/images/shop.png";
import { BsShop } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="flex flex-wrap w-full max-w-7xl p-8 my-10 text-gray-700">
      <div className="flex justify-between items-center w-full ">
        <div className="w-full md:w-1/2">
          <p className="text-3xl font-bold my-7">{"صاحب کسب و کار هستید؟"}</p>
          <p className="text-xl my-7">
            {
              "با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید."
            }
          </p>
          <div>
            <button className="flex gap-5 px-4 py-2 bg-pink-600 text-white font-bold text-lg rounded-lg">
              <BsShop size={"1.5em"} />
              {"ثبت نام فروشندگان"}
            </button>
          </div>
        </div>
        <div className="hidden md:w-1/2 md:flex justify-end">
          <Image src={shopPic} alt="shop pic" width={350} height={350} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
