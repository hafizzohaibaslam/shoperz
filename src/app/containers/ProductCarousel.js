"use client";
import React from "react";
import { H3, HomeProduct } from "../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ProductCarousel = ({ productImages }) => {
  const sliderRef = useRef(null);

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const CustomPrevArrow = props => (
    <button
      className="custom-arrows prev-arrow"
      onClick={props.onClick}
      style={{ display: "none" }}
    />
  );

  const CustomNextArrow = props => (
    <button
      className="custom-arrows next-arrow"
      onClick={props.onClick}
      style={{ display: "none" }}
    />
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full py-2 relative">
        <button
          className="h-full px-4 absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={previousSlide}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            width={16}
            className="text-black h-auto"
          />
        </button>
        <button
          onClick={nextSlide}
          className="h-full px-4 absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <FontAwesomeIcon
            icon={faChevronRight}
            width={16}
            className="text-black h-auto"
          />
        </button>
        <div className="px-8 sm:px-2">
          <Slider {...sliderSettings} ref={sliderRef}>
            {productImages?.map((image, index) => (
              <div key={index} className="w-full">
                <Image
                  src={image}
                  alt="carousel"
                  className="h-20 max-w-[80px] mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
