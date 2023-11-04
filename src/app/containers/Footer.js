import React from "react";
import shoperzLogo from "../assets/shoperz.svg";
import Image from "next/image";
import { FooterH4, FooterSocialLink, FooterSpan } from "../components";
import FooterLinksSection from "./FooterLinksSection";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import visaIcon from "../assets/footerCompaniesIcons/visa.svg";
import mastercardIcon from "../assets/footerCompaniesIcons/mastercard.svg";
import paypalIcon from "../assets/footerCompaniesIcons/paypal.svg";
import skrillIcon from "../assets/footerCompaniesIcons/skrill.svg";

const Footer = () => {
  const footerAboutInfo = [
    {
      h4: "Headquarters",
      span: "Presei Square No45, Bucharest - 0994550",
    },
    {
      h4: "Email",
      span: "contact@shoperz.com",
    },
    {
      h4: "Telephone",
      span: "(+40) 987 123 654",
    },
  ];
  const footerComputers = [
    { text: "iMac", href: "#" },
    { text: "MacBooks", href: "#" },
    { text: "Windows Laptops", href: "#" },
    { text: "Gaming Computers", href: "#" },
    { text: "Accessories", href: "#" },
    { text: "Gadgets", href: "#" },
  ];
  const footerUsefulLinks = [
    { text: "About", href: "#" },
    { text: "Contact", href: "#" },
    { text: "Wishlist", href: "#" },
    { text: "FAQ", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Terms & Conditions", href: "#" },
    { text: "Cookie Policy", href: "#" },
  ];
  const footerCustomerService = [
    { text: "My Account", href: "#" },
    { text: "My Cart", href: "#" },
    { text: "Track Order", href: "#" },
    { text: "Returns & Exchanges", href: "#" },
    { text: "Payment Methods", href: "#" },
    { text: "Support", href: "#" },
  ];
  const footerSocialLinks = [
    { icon: faFacebookF, href: "#" },
    { icon: faInstagram, href: "#" },
    { icon: faLinkedinIn, href: "#" },
    { icon: faTwitter, href: "#" },
    { icon: faYoutube, href: "#" },
  ];
  const footerCompanies = [visaIcon, mastercardIcon, paypalIcon, skrillIcon];

  return (
    <>
      <footer className="pt-16 pb-10">
        <div className="px-4">
          <div className="max-w-8xl mx-auto grid grid-cols-5 gap-x-6 gap-y-16 lg:grid-cols-3 sm:grid-cols-2">
            <div className="col-span-2 flex flex-col gap-y-5 lg:col-span-3 sm:col-span-2">
              <Image src={shoperzLogo} alt="Shoperz logo" />
              {footerAboutInfo.map(({ h4, span }, index) => (
                <div key={index}>
                  <FooterH4 text={h4} />
                  <FooterSpan text={span} />
                </div>
              ))}
            </div>
            <FooterLinksSection
              heading={"Computers"}
              links={footerComputers}
              className={""}
            />
            <FooterLinksSection
              heading={"Useful Links"}
              links={footerUsefulLinks}
            />
            <FooterLinksSection
              heading={"Customer Service"}
              links={footerCustomerService}
            />
          </div>
        </div>
        <hr className="text-Grey-600 my-4 md:mx-4" />
        <div className="px-4 flex items-center justify-between gap-x-4 md:flex-col-reverse">
          <span className="text-Grey-600 text-sm">
            &copy; <b>Shoperz</b> 2023 - All Rights Reserved
          </span>
          <hr className="hidden md:block text-Grey-600 w-full my-4" />
          <ul className="flex gap-x-5 items-center m-0">
            {footerSocialLinks.map(({ icon, href }, index) => (
              <li className="w-5 h-5" key={index}>
                <FooterSocialLink icon={icon} href={href} />
              </li>
            ))}
          </ul>
          <hr className="hidden md:block text-Grey-600 w-full my-4" />
          <ul className="flex m-0">
            {footerCompanies.map((company, index) => (
              <li key={index}>
                <Image src={company} alt="company icon" />
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
