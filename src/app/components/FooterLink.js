import React from "react";

const FooterSpan = ({ text, href = "#" }) => {
  return (
    <>
      <a
        href={href}
        className="block w-full text-Grey-700 text-sm no-underline hover:underline">
        {text}
      </a>
    </>
  );
};

export default FooterSpan;
