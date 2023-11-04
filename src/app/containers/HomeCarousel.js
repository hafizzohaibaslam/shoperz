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

const Carousel = ({ products, h3 }) => {
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
    slidesToShow: 4, // Set this to the number of products you want to show in a row
    slidesToScroll: 1, // Set this to 1 to scroll one product at a time

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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-8 px-8">
        <div className="max-w-8xl mx-auto space-y-9">
          <div className="flex justify-between">
            <H3 text={h3} />
            <div className="flex items-center gap-x-8">
              <button onClick={previousSlide}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="xl"
                  className="text-Grey-700"
                />
              </button>
              <button onClick={nextSlide}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="xl"
                  className="text-Grey-700"
                />
              </button>
            </div>
          </div>
          <div>
            <Slider {...sliderSettings} ref={sliderRef}>
              {products?.map(
                (
                  { companyName, productName, image, price, discountPrice },
                  index,
                ) => (
                  <HomeProduct
                    key={index}
                    companyName={companyName}
                    productName={productName}
                    image={image}
                    price={price}
                    discountPrice={discountPrice}
                  />
                ),
              )}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
