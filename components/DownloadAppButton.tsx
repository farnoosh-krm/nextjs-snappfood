import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DownloadAppButtonProps } from "@/constant/type";

const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({
  src,
  alt,
  href,
}) => {
  return (
    <Link href={href ?? "#"} target="_blank" className="w-32 h-9 rounded-md">
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        style={{ width: "100%", height: "100%" }}
        className="rounded-md"
      />
    </Link>
  );
};

export default DownloadAppButton;
