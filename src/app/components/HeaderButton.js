import Image from "next/image";
import React from "react";

const HeaderButton = ({ text, icon = null }) => {
  return (
    <>
      <button className="flex items-center justify-center gap-x-1">
        {icon && <Image src={icon} alt="header icon" />}
        <span className="text-Grey-600 text-xs">{text}</span>
      </button>
    </>
  );
};

export default HeaderButton;
