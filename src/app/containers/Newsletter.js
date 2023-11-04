"use client";
import React from "react";
import newsletterIcon from "../assets/newsletter.svg";
import Image from "next/image";

const Newsletter = () => {
  return (
    <>
      <section className="my-6 px-4">
        <div className="max-w-8xl mx-auto px-14 py-4 bg-gray-900 flex items-center justify-between gap-4 lg:flex-col lg:px-20 sm:px-10">
          <p className="text-white m-0 text-lg w-3/5 lg:w-full lg:text-center">
            <b>Subscribe to Our Newsletter</b> - get a{" "}
            <b className="underline">$20 Coupon</b> for your first order!
          </p>
          <div className="flex items-stretch justify-center w-2/5 rounded-lg overflow-hidden lg:w-full">
            <input
              type="email"
              className="w-full px-3 py-2.5 text-sm bg-[#3F414B] text-white placeholder:text-white"
              placeholder="Enter your email address"
            />
            <button className="bg-Primary-600 px-3 py-1">
              <Image src={newsletterIcon} alt="newsletter icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
