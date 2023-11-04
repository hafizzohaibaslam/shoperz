import Image from "next/image";
import React from "react";
import cartIcon from "../assets/cart.svg";

const HomeProduct = ({
  companyName,
  productName,
  image,
  price,
  discountPrice = null,
}) => {
  const formatPrice = price => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <>
      <div className="grid grid-rows-6 border border-Grey-100 rounded-md p-3 mx-2 h-96">
        <div className="row-span-2">
          <p className="text-Grey-700 text-xs">{companyName}</p>
          <a href="#" className="text-Primary-700 no-underline">
            {productName}
          </a>
        </div>
        <div className="row-span-3">
          <Image
            src={image}
            alt={productName}
            className="h-full w-auto mx-auto"
          />
        </div>
        <div className="flex items-center justify-between">
          {discountPrice ? (
            <div className="flex flex-col items-start">
              <span className="text-Danger-600 text-lg font-bold">
                ${formatPrice(discountPrice)}
              </span>
              <span className="text-Grey-900 text-xs line-through">
                ${formatPrice(price)}
              </span>
            </div>
          ) : (
            <span className="text-Grey-900 text-lg font-bold">
              ${formatPrice(price)}
            </span>
          )}
          <button className="bg-Grey-200 rounded-full p-2">
            <Image
              priority
              src={cartIcon}
              alt="Cart icon"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
