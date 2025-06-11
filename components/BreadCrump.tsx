import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const BreadCrump = ({ title }: { title: string }) => {
  return (
    <div className="flex w-full items-center my-5">
      <p className="text-sm text-gray-500">{"اسنپ فود"}</p>
      <IoIosArrowBack className="text-sm ml-2 text-gray-500"></IoIosArrowBack>
      <p className="text-sm text-gray-800">{title}</p>
    </div>
  );
};

export default BreadCrump;
