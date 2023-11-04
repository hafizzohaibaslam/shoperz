import Image from "next/image";
import React from "react";
import cartIcon from "../assets/cart.svg";
import heartIcon from "../assets/productsIcons/heart.svg";
import Link from "next/link";

const ProductGridView = ({ productName, image, price, productId }) => {
  const formatPrice = price => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <>
      <div className="flex flex-col gap-y-4 border border-Grey-100 rounded-md p-3">
        <Link
          href={`/products/${productId}`}
          className="text-Primary-600 font-medium no-underline text-sm hover:underline">
          {productName}
        </Link>
        <div className="h-full flex items-center justify-center">
          <Image
            src={image}
            alt={productName}
            className="h-full w-auto mx-auto"
            height={300}
          />
        </div>
        <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-y-2">
          <span className="text-Grey-900 text-lg font-bold">
            ${formatPrice(price)}
          </span>
          <div className="flex items-center gap-x-2 sm:flex-row-reverse sm:w-full">
            <button className="bg-Grey-100 rounded-full p-2">
              <Image
                priority
                src={heartIcon}
                alt="heart icon"
                className="w-5 h-5 xs:w-3 xs:h-3"
              />
            </button>
            <button className="flex bg-Primary-600 rounded-full p-2 whitespace-nowrap sm:flex-1 sm:justify-center sm:items-center sm:gap-x-2 xs:gap-x-1">
              <Image
                priority
                src={cartIcon}
                alt="Cart icon"
                className="w-5 h-5 xs:w-3 xs:h-3"
              />
              <span className="hidden text-sm xs:text-xs text-white sm:inline">
                Add to cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGridView;
