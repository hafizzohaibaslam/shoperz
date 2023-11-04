"use client";
import React from "react";
import shoperzLogo from "../assets/shoperz.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import SidebarCategoriesGeneral from "./SidebarCategoriesGeneral";
import SidebarCategoriesBox from "./SidebarCategoriesBox";

const Sidebar = ({
  toggleSidebar = null,
  isSidebarExpanded = null,
  type = "landingSidebar",
}) => {
  const categories = [
    {
      idHtmlFor: "categoryAll",
      label: "All",
      itemsCount: 1929,
    },
    {
      idHtmlFor: "categoryMac",
      label: "iMac & MacBook",
      itemsCount: 81,
    },
    {
      idHtmlFor: "categoryGamingComputers",
      label: "Gaming Computers",
      itemsCount: 1126,
    },
    {
      idHtmlFor: "categoryLenovo&PCs",
      label: "Lenovo & PCs",
      itemsCount: 148,
    },
    {
      idHtmlFor: "categoryGadgets",
      label: "Gadgets",
      itemsCount: 510,
    },
  ];
  const brands = [
    {
      idHtmlFor: "appleCheckbox",
      label: "Apple",
      itemsCount: 32,
    },
    {
      idHtmlFor: "hpCheckbox",
      label: "HP",
      itemsCount: 64,
    },
    {
      idHtmlFor: "dellCheckbox",
      label: "Dell",
      itemsCount: 21,
    },
    {
      idHtmlFor: "lenovoCheckbox",
      label: "Lenovo",
      itemsCount: 21,
    },
    {
      idHtmlFor: "sonyCheckbox",
      label: "Sony",
      itemsCount: 13,
    },
    {
      idHtmlFor: "toshibaCheckbox",
      label: "Toshiba",
      itemsCount: 37,
    },
  ];
  const priceRanges = [
    {
      idHtmlFor: "priceRange1",
      label: "<50",
      itemsCount: 32,
    },
    {
      idHtmlFor: "priceRange2",
      label: "100-200",
      itemsCount: 53,
    },
    {
      idHtmlFor: "priceRange3",
      label: "200-300",
      itemsCount: 85,
    },
    {
      idHtmlFor: "priceRange4",
      label: "300-400",
      itemsCount: 58,
    },
    {
      idHtmlFor: "priceRange5",
      label: ">500",
      itemsCount: 68,
    },
  ];

  let typeStyles = "";
  if (type === "landingSidebar") {
    typeStyles = `hidden lg:flex`;
  } else if (type === "productsSidebar") {
    typeStyles = `flex static min-w-[17rem] w-[20%] `;
  }

  return (
    <>
      {isSidebarExpanded && (
        <div
          onClick={toggleSidebar}
          className={`hidden lg:block fixed top-0 right-0 left-0 bottom-0 bg-black z-40 opacity-40`}></div>
      )}
      <aside
        className={`bg-white flex-col items-center gap-y-5 lg:h-screen lg:fixed lg:top-0 lg:bottom-0 lg:min-w-[20rem] lg:transition-all lg:duration-300 lg:px-8 lg:pt-12 lg:pb-20 lg:rounded-tr-4xl lg:overflow-y-auto lg:z-50 ${
          isSidebarExpanded ? "lg:left-0" : "lg:-left-full"
        } ${typeStyles}`}>
        <button
          className="absolute hidden top-7 right-7 lg:block"
          onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faX} className="min-w-[1.25rem] h-auto" />
        </button>
        <a href="/" className="hidden lg:block">
          <Image
            src={shoperzLogo}
            alt="Shoperz logo"
            className="min-w-[7rem] w-32 max-w-[8rem]"
          />
        </a>
        <hr className="hidden border-Grey-400 w-full h-1 mt-4 mb-0 lg:block" />
        <SidebarCategoriesBox data={categories} />
        <SidebarCategoriesGeneral title={"Brands"} data={brands} />
        <SidebarCategoriesGeneral title={"Price"} data={priceRanges} />
      </aside>
    </>
  );
};

export default Sidebar;
