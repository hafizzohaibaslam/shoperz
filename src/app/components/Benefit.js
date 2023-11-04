import Image from "next/image";
import React from "react";

const Benefit = ({
  icon,
  heading,
  description,
  isAfter = true,
  afterStyles = "",
}) => {
  return (
    <div
      className={`relative flex items-center justify-center gap-3 p-2 xs:gap-5 ${
        isAfter &&
        "after:h-full after:w-0.5 after:bg-Grey-100 after:absolute after:right-0 xs:after:hidden"
      } ${afterStyles}`}>
      <div>
        <Image src={icon} alt="benefit icon" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="font-bold">{heading}</span>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
};

export default Benefit;
