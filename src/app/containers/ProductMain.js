"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ColorSelectRadio } from "../components";
import ProductCarousel from "./ProductCarousel";
import tempImage from "@/app/assets/item1.png";
import starYellowIcon from "@/app/assets/productIcons/starYellow.svg";
import starGrayIcon from "@/app/assets/productIcons/starGray.svg";
import chatIcon from "@/app/assets/productIcons/chat.svg";
import cartIcon from "@/app/assets/cart.svg";
import minusIcon from "@/app/assets/productIcons/minus.svg";
import plusIcon from "@/app/assets/productIcons/plus.svg";
import shareIcon from "@/app/assets/productIcons/share.svg";
import heartIcon from "@/app/assets/productsIcons/heart.svg";
import benefitIcon1 from "@/app/assets/benefitsIcons/icon1.png";
import benefitIcon3 from "@/app/assets/benefitsIcons/icon3.png";

const colors = ["black", "white", "blue"];

const ProductMain = () => {
  const [selectedColor, setSelectedColor] = useState(
    `productColor-${colors[0]}`,
  );

  const [productsCount, setProductsCount] = useState(1);

  const productsCountHandler = val => {
    if (productsCount === 1 && val === -1) return;
    setProductsCount(prevState => prevState + val);
  };

  return (
    <>
      <main className="my-12 px-4">
        <div className="max-w-8xl flex gap-x-6 mx-auto lg:flex-col lg:gap-y-8">
          <div className="flex gap-x-6 w-2/3 lg:w-full md:flex-col md:gap-y-8">
            <div className="w-1/2 md:w-full">
              <div>
                <Image src={tempImage} alt="Item temp" />
              </div>
              <ProductCarousel
                productImages={[
                  tempImage,
                  tempImage,
                  tempImage,
                  tempImage,
                  tempImage,
                  tempImage,
                  tempImage,
                  tempImage,
                ]}
              />
            </div>
            <div className="w-1/2 md:w-full">
              <h1 className="text-2xl text-Primary-700 font-medium">
                Laptop Gaming computer Personal computer Intel cooler
              </h1>
              <div className="flex gap-x-2 mt-4">
                <div className="flex gap-x-1">
                  {Array.from(Array(5).keys()).map(index => (
                    <Image
                      key={index}
                      src={starYellowIcon}
                      className="h-4 w-auto"
                      alt="Star icon"
                    />
                  ))}
                </div>
                <div className="flex gap-x-1">
                  <span>4.8</span>
                  <span className="text-Grey-700">(200)</span>
                </div>
              </div>
              <ul className="list-disc text-sm text-Grey-700 space-y-2 ml-6 mt-2">
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </li>
              </ul>
              <div className="mt-4">
                <span className="text-Grey-700">SKU: </span>
                <span className="font-medium">123213213</span>
              </div>
              <div className="mt-4">
                <span className="text-Grey-700">Brand: </span>
                <span className="font-medium">Brand12321</span>
              </div>
              <div className="mt-4 space-y-4">
                <span className="font-medium">Color</span>
                <div className="flex gap-x-2.5">
                  {colors.map((color, index) => (
                    <ColorSelectRadio
                      key={index}
                      selectedColor={selectedColor}
                      setSelectedColor={setSelectedColor}
                      idHtmlFor={`productColor-${color}`}
                      color={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 border border-Grey-100 p-4 rounded-md lg:w-full">
            <div className="flex items-center justify-between py-4">
              <div className="flex gap-x-2">
                <div className="flex gap-x-1">
                  {Array.from(Array(4).keys()).map(index => (
                    <Image
                      key={index}
                      src={starYellowIcon}
                      className="h-4 w-auto"
                      alt="Star icon"
                    />
                  ))}
                  <Image
                    src={starGrayIcon}
                    className="h-4 w-auto"
                    alt="Star icon"
                  />
                </div>
                <div className="flex gap-x-1">
                  <span>4.1</span>
                  <span className="text-Grey-700">(100)</span>
                </div>
              </div>
              <button className="flex gap-x-1 items-center text-Grey-700 whitespace-nowrap border border-Grey-700 rounded-full px-4 py-2 text-xs">
                <span>Start Chat</span>
                <Image
                  src={chatIcon}
                  className="w-auto h-auto"
                  alt="Chat icon"
                />
              </button>
            </div>
            <hr />
            <div className="text-sm space-y-6 py-4">
              <div className="flex items-center justify-between">
                <span className="text-Grey-700">Delivery:</span>
                <span className="text-green-600 bg-green-100 px-2 rounded-full">
                  Free
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-Grey-700">Stock:</span>
                <span className="text-red-600 bg-red-100 px-2 rounded-full">
                  26
                </span>
              </div>
            </div>
            <hr />
            <div className="my-8 space-y-8">
              <h3 className="text-3xl font-medium">$1200.00</h3>
              <div className="border w-fit border-Grey-100 flex items-center gap-x-2 rounded-full">
                <button
                  className="px-4 py-2 rounded-full hover:bg-Grey-200"
                  onClick={() => productsCountHandler(-1)}>
                  <Image
                    width={16}
                    src={minusIcon}
                    className="h-auto"
                    alt="minus icon"
                  />
                </button>
                <span className="text-lg px-10   text-Grey-900">
                  {productsCount}
                </span>
                <button
                  className="px-4 py-2 rounded-full hover:bg-Grey-200"
                  onClick={() => productsCountHandler(1)}>
                  <Image
                    width={16}
                    src={plusIcon}
                    className="h-auto"
                    alt="minus icon"
                  />
                </button>
              </div>
            </div>
            <div>
              <button className="w-full text-sm whitespace-nowrap bg-Primary-600 py-4 rounded-full flex items-center justify-center gap-x-1 text-white">
                <span className="font-medium">Add to Cart </span>
                <Image
                  src={cartIcon}
                  className="w-auto h-auto"
                  alt="cart icon"
                />
              </button>
              <div className="flex gap-x-4 mt-4 text-sm">
                <button className="w-full whitespace-nowrap border border-Grey-700 py-4 rounded-full flex items-center justify-center gap-x-1 text-Grey-700">
                  <span className="font-medium">Add to Wishlist </span>
                  <Image
                    src={heartIcon}
                    className="h-auto"
                    alt="heart icon"
                    width={20}
                  />
                </button>
                <button className="w-full whitespace-nowrap border border-Grey-700 py-4 rounded-full flex items-center justify-center gap-x-2 text-Grey-700">
                  <span className="font-medium">Share </span>
                  <Image
                    src={shareIcon}
                    className="h-auto"
                    alt="share icon"
                    width={20}
                  />
                </button>
              </div>
              <div className="flex items-center mt-8 mb-4">
                <div
                  className={`w-full relative flex items-center justify-center gap-3 p-2 xs:gap-5`}>
                  <div>
                    <Image src={benefitIcon1} alt="benefit icon" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span className="font-bold">Guarantee</span>
                    <span className="text-sm">24 Months</span>
                  </div>
                </div>
                <div
                  className={`w-full relative flex items-center justify-center gap-3 p-2 xs:gap-5`}>
                  <div>
                    <Image src={benefitIcon3} alt="benefit icon" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span className="font-bold">Payments</span>
                    <span className="text-sm">Secured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductMain;
