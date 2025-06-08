import React from "react";
import Image from "next/image";
import logo from "../assets/images/images-home/logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex bg-white p-4 w-full fixed z-50 shadow-md">
      <div className="flex flex-row justify-between items-center w-full">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo pic" width={68} height={34} />
          </Link>
        </div>
        <Link href={"/orders"}>
          <div className="flex items-center">
            <MdOutlineShoppingBag className="text-xl" />
            <p className="text-sm">{"سفارشات"}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
