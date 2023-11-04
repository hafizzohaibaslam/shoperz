"use client";
import Image from "next/image";
import React from "react";
import heroImage from "../assets/item1.png";
import heroBg1 from "../assets/hero_bg1.png";
import heroBg2 from "../assets/hero_bg2.png";
import { Inter } from "next/font/google";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  return (
    <div className={"max-w-8xl mx-auto relative"}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        swipeable={false}>
        <div
          className={`${inter.className} relative h-full flex items-center bg-heroBg md:flex-col`}>
          <div className="w-1/2 h-full absolute -top-1/2 -translate-y-1/2 right-1/2 translate-x-full z-0 xl:-top-1/4 md:-top-20 md:w-2/3 sm:-translate-y-0">
            <Image src={heroBg1} alt="hero background" className="w-full" />
          </div>
          <div className="w-1/4 absolute bottom-0 translate-y-1/2 right-1/2 translate-x-full z-0 md:w-1/2">
            <Image src={heroBg2} alt="hero background" className="w-full" />
          </div>
          <div className="z-10 flex flex-col gap-8 items-start justify-center py-28 pl-16 w-1/2 xl:w-2/3 lg:w-1/2 md:p-10 md:w-full md:items-center">
            <h2 className="text-center text-white opacity-80 text-3xl lg:text-2xl">
              Best Deal Online on Computers
            </h2>
            <h1 className="text-start text-white text-6xl font-bold lg:text-4xl md:text-center">
              Save Big with Exclusive Deals!
            </h1>
            <h3 className="text-center text-2xl font-bold px-1 py-0.5 text-[#0F121E] bg-[#E4B200] mt-4 lg:text-xl">
              UP to 40% OFF
            </h3>
          </div>
          <div className="z-10 flex items-center justify-center w-1/2 h-full pr-40 p-4 xl:p-0 xl:w-1z-10 /3 lg:w-1/2 lg:pr-20 md:px-8 md:w-1/2 sm:w-2/3 xs:w-full">
            <Image src={heroImage} alt="carousel Image" priority={true} />
          </div>
        </div>
        <div
          className={`${inter.className} relative h-full flex items-center bg-heroBg md:flex-col`}>
          <div className="w-1/2 h-full absolute -top-1/2 -translate-y-1/2 right-1/2 translate-x-full z-0 xl:-top-1/4 md:-top-20 md:w-2/3 sm:-translate-y-0">
            <Image src={heroBg1} alt="hero background" className="w-full" />
          </div>
          <div className="w-1/4 absolute bottom-0 translate-y-1/2 right-1/2 translate-x-full z-0 md:w-1/2">
            <Image src={heroBg2} alt="hero background" className="w-full" />
          </div>
          <div className="z-10 flex flex-col gap-8 items-start justify-center py-28 pl-16 w-1/2 xl:w-2/3 lg:w-1/2 md:p-10 md:w-full md:items-center">
            <h2 className="text-center text-white opacity-80 text-3xl lg:text-2xl">
              Best Deal Online on Computers
            </h2>
            <h1 className="text-start text-white text-6xl font-bold lg:text-4xl md:text-center">
              Save Big with Exclusive Deals!
            </h1>
            <h3 className="text-center text-2xl font-bold px-1 py-0.5 text-[#0F121E] bg-[#E4B200] mt-4 lg:text-xl">
              UP to 40% OFF
            </h3>
          </div>
          <div className="z-10 flex items-center justify-center w-1/2 h-full pr-40 p-4 xl:p-0 xl:w-1z-10 /3 lg:w-1/2 lg:pr-20 md:px-8 md:w-1/2 sm:w-2/3 xs:w-full">
            <Image src={heroImage} alt="carousel Image" priority={true} />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
