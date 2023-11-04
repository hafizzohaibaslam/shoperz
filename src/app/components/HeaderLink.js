import Image from "next/image";
import React from "react";

const HeaderLink = ({ href = "#", text, icon = null }) => {
  return (
    <>
      <a href={href} className="flex items-center justify-center no-underline gap-x-1">
        {icon && <Image src={icon} alt="header icon" />}
        <span className="text-Grey-600 text-xs">{text}</span>
      </a>
    </>
  );
};

export default HeaderLink;
