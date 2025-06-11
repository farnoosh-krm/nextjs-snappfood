import { DATABASE } from "@/src/data/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Categories = () => {
  return (
    <div className="w-full max-w-7xl flex flex-wrap mt-16 bg-[#fcfaf7] py-6 px-3">
      <div className="w-full font-bold">{"دسته‌بندی‌ها"}</div>
      <div className="flex flex-wrap w-full py-4">
        {DATABASE.cats.map((cat) => (
          <div
            key={cat.id}
            className="flex  w-1/2 md:w-1/6 justify-center p-2 "
          >
            <Link href={`/categories/${cat.id}`}>
              <div
                className="border-4 relative border-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-[1.0]
"
              >
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                  }}
                />

                <div className="group flex items-center absolute bottom-0 -right-1 px-3 py-1 text-sm bg-white rounded-tl-xl box-border rounded-br-xl gap-1">
                  {cat.title}
                  <MdOutlineArrowBackIosNew
                    style={{ color: "#ff00a6" }}
                    className="transform transition-transform duration-200 ease-in-out group-hover:-translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
