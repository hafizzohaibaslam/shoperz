import React from "react";
import { FooterH4, FooterLink } from "../components";

const FooterLinksSection = ({className, links, heading }) => {
  return (
    <>
      <div className={className}>
        <FooterH4 text={heading} />
        <ul className="pl-0 pt-6 flex flex-col gap-y-4">
          {links.map(({ text, href }, index) => (
            <li key={index}>
              <FooterLink text={text} href={href}/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinksSection;
