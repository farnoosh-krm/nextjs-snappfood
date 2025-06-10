import { convertToPersian } from "@/src/utils/convertToPersian";
import React from "react";
import Image from "next/image";
import bazar from "../public/images/bazar.png";
import iapp from "../public/images/iapps.png";
import sibapp from "../public/images/sibapp.png";
import myket from "../public/images/myket.png";
import mockup from "../public/images/mockup.png";
import DownloadAppButton from "./DownloadAppButton";

const DownloadApp = () => {
  return (
    <div className="flex flex-wrap w-full max-w-7xl pt-[150px] my-6 text-gray-700 ">
      <div className="flex justify-between  w-full relative bg-[#f0efe7] md:rounded-br-[7.5rem]">
        <div className="w-full md:w-2/3 px-2 py-4 md:px-28 md:py-8">
          <div className="text-3xl font-bold my-10">{"اپلیکیشن اسنپ‌فود"}</div>
          <div className="pl-20 leading-9 text-gray-500 text-justify">
            {
              "با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید."
            }
          </div>
          <div className="text-sm font-bold mt-10">
            {"برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید"}
          </div>
          <div className="relative bg-white p-4 rounded-lg flex items-center w-[320px] text-sm my-4">
            <input
              className="focus:outline-none "
              type="text"
              placeholder={`********${convertToPersian(9)}`}
            />
            <button className="absolute left-2 bg-[#ff00a6] rounded-lg px-4 py-[6px] text-white">
              {"دریافت لینک"}
            </button>
          </div>

          <div className=" w-full py-12 flex flex-wrap gap-6">
            <DownloadAppButton
              src={myket}
              alt={"myket"}
              href={
                "https://myket.ir/app/com.zoodfood.android/?referrer=appmetrica_tracking_id%3D820652809379719105%26ym_tracking_id%3D8716395061581553845"
              }
            />
            <DownloadAppButton
              src={bazar}
              alt={"bazar"}
              href={"https://cafebazaar.ir/app/com.zoodfood.android"}
            />
            <DownloadAppButton
              src={sibapp}
              alt={"sibapp"}
              href={"https://sibapp.com/applications/zoodfood-1"}
            />
            <DownloadAppButton
              src={iapp}
              alt={"iapp"}
              href={"https://app.iapps.ir/i/312476215"}
            />
          </div>
        </div>

        <div className="absolute -top-1/3 left-10">
          <Image src={mockup} alt="mockup" width={450} height={450} />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
