"use client";
import React, { useEffect, useState } from "react";
import businessBagIcon from "../assets/headerIcons/businessBag.svg";
import currencyIcon from "../assets/headerIcons/currency.svg";
import helpIcon from "../assets/headerIcons/help.svg";
import loginIcon from "../assets/headerIcons/login.svg";
import ticketIcon from "../assets/headerIcons/ticket.svg";
import userIcon from "../assets/headerIcons/user.svg";
import shoperzLogo from "../assets/shoperz.svg";
import { HeaderButton, HeaderLink } from "../components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import cartIcon from "../assets/cart.svg";
import barsIcon from "../assets/headerIcons/bars.svg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/slices/isSidebarExpandedSlice";
import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header className="my-4">
        <div className="max-w-8xl mx-auto px-4 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-12">
              <HeaderLink href={"#"} text={"Contact Us"} icon={userIcon} />
              <HeaderLink href={"#"} text={"Help Center"} icon={helpIcon} />
              <HeaderLink
                href={"#"}
                text={"Business Conditions"}
                icon={businessBagIcon}
              />
              <HeaderLink
                href={"#"}
                text={"Terms of Personal Data Protection"}
              />
            </div>
            <div className="flex gap-x-12">
              <HeaderButton text={"Currency"} icon={currencyIcon} />
              <HeaderLink href="#" text={"Sell on Shoperz"} icon={ticketIcon} />
              <HeaderButton text={"Login"} icon={loginIcon} />
            </div>
          </div>
        </div>
        <hr className="my-4 lg:hidden" />
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:px-6 lg:mb-8 lg:gap-x-8">
          <button id="sidebarToggleButton">
            <Image
              src={barsIcon}
              alt="Bars icon"
              className="min-w-[1.75rem]"
              onClick={() => dispatch(toggleSidebar())}
            />
          </button>
          <a href="/">
            <Image
              src={shoperzLogo}
              alt="Shoperz logo"
              className="min-w-[5rem] w-28 max-w-[8rem]"
            />
          </a>
          <div className="flex items-stretch lg:col-span-3">
            <button className="bg-Primary-600 rounded-l-lg pl-2 pr-3 py-1 relative">
              <Image src={cartIcon} alt="Cart icon" className="min-w-[1rem]" />
              <span className="absolute top-0.5 right-0.5 text-Primary-600 bg-white text-xxs font-medium w-3 h-3 rounded-full">
                1
              </span>
            </button>
            <div className="bg-zinc-100 rounded-r-lg flex justify-center items-center text-Grey-700 p-2 font-bold text-sm">
              <span>$799.00</span>
            </div>
          </div>
        </div>
        <div className="max-w-8xl mx-auto flex items-center gap-x-8 px-4 justify-between">
          <Link href="/" className="mr-10 lg:hidden">
            <Image src={shoperzLogo} alt="Shoperz logo" />
          </Link>
          <button className="flex gap-x-2 items-center lg:hidden">
            <span className="whitespace-nowrap">Select Categories</span>
            <FontAwesomeIcon icon={faCaretDown} width={12} />
          </button>
          <div className="flex items-center justify-center bg-zinc-100 w-full rounded-lg px-3 gap-x-3">
            <input
              type="email"
              className="w-full py-2.5 bg-transparent text-sm"
              placeholder="What are you looking for?"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} width={24} />
          </div>
          <button className="lg:hidden">
            <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-Grey-700" />
          </button>
          <div className="flex items-stretch lg:hidden">
            <button className="bg-Primary-600 rounded-l-lg px-3 py-2 relative">
              <Image
                src={cartIcon}
                alt="Cart icon"
                className="min-w-[1rem] h-4"
              />
              <span className="absolute top-1 right-1 text-Primary-600 bg-white text-xxs font-medium w-3 h-3 rounded-full">
                1
              </span>
            </button>
            <div className="bg-zinc-100 rounded-r-lg flex justify-center items-center text-Grey-700 p-2 font-bold">
              <span>$799.00</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
