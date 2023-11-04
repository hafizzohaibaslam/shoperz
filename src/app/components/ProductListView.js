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
      <div className="flex gap-x-8 border border-Grey-100 rounded-md p-3 md:hidden">
        <div className="w-1/5 flex items-center justify-center xl:w-1/4">
          <Image src={image} alt={productName} className="w-full h-auto" />
        </div>
        <div className="w-4/5 flex flex-col gap-y-3 xl:w-3/4">
          <Link
            href={`/products/${productId}`}
            className="text-Primary-600 font-medium no-underline text-xl hover:underline">
            {productName}
          </Link>
          <p className="text-sm text-Grey-900">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <p className="text-Grey-900 text-2xl font-bold">
            ${formatPrice(price)}
          </p>
          <div className="flex items-center gap-x-4">
            <button className="flex items-center gap-x-2 bg-Primary-600 rounded-full py-3 px-8 whitespace-nowrap">
              <span className="text-sm text-white">Add to cart</span>
              <Image
                priority
                src={cartIcon}
                alt="Cart icon"
                className="w-5 h-5"
              />
            </button>
            <button className="flex items-center gap-x-2 bg-Primary-600 rounded-full py-3 px-8 border border-Grey-600 bg-white whitespace-nowrap">
              <span className="text-sm text-Grey-600">Add to favorites</span>
              <Image
                priority
                src={heartIcon}
                alt="heart icon"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGridView;
