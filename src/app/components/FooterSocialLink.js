import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterSocialLink = ({ icon, href = "#" }) => {
  return (
    <>
      <a href={href} className="text-Grey-600 h-full w-auto">
        <FontAwesomeIcon icon={icon} className="h-full w-auto" />
      </a>
    </>
  );
};

export default FooterSocialLink;
