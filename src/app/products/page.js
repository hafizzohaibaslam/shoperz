"use client";
import React, { useEffect, useState } from "react";
import {
  ProductsHeader,
  ProductsContainer,
  ProductsSidebar,
  ProductsPagination,
} from "../containers";
import item1Img from "../assets/item1.png";
import item2Img from "../assets/item2.png";
import item3Img from "../assets/item3.png";
import item4Img from "../assets/item4.png";
import item5Img from "../assets/item5.png";

const products = [
  {
    companyName: "Lenovo",
    productName: "Laptop Gaming computer Personal computer AMD FX",
    image: item1Img,
    price: 1200,
    productId: "001",
  },
  {
    companyName: "Apple",
    productName:
      "dialog box displaying on MacBook Pro, MacBook Pro Macintosh MacBook",
    image: item2Img,
    price: 60,
    productId: "002",
  },
  {
    companyName: "Sony",
    productName: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
    image: item3Img,
    price: 1200,
    productId: "003",
  },
  {
    companyName: "Sony",
    productName: "Headphones, Noise cancelling, Bluetooth 5.0",
    image: item4Img,
    price: 920,
    productId: "004",
  },
  {
    companyName: "HP",
    productName: 'Hp elietebook  2021, 14" Waterproof, 8GB, 12000mAh battery',
    image: item5Img,
    price: 1100,
    productId: "005",
  },
  {
    companyName: "Lenovo",
    productName: "Laptop Gaming computer Personal computer AMD FX",
    image: item1Img,
    price: 1200,
    productId: "001",
  },
  {
    companyName: "Apple",
    productName:
      "dialog box displaying on MacBook Pro, MacBook Pro Macintosh MacBook",
    image: item2Img,
    price: 60,
    productId: "002",
  },
  {
    companyName: "Sony",
    productName: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
    image: item3Img,
    price: 1200,
    productId: "003",
  },
  {
    companyName: "Sony",
    productName: "Headphones, Noise cancelling, Bluetooth 5.0",
    image: item4Img,
    price: 920,
    productId: "004",
  },
  {
    companyName: "HP",
    productName: 'Hp elietebook  2021, 14" Waterproof, 8GB, 12000mAh battery',
    image: item5Img,
    price: 1100,
    productId: "005",
  },
  {
    companyName: "Lenovo",
    productName: "Laptop Gaming computer Personal computer AMD FX",
    image: item1Img,
    price: 1200,
    productId: "001",
  },
  {
    companyName: "Apple",
    productName:
      "dialog box displaying on MacBook Pro, MacBook Pro Macintosh MacBook",
    image: item2Img,
    price: 60,
    productId: "002",
  },
  {
    companyName: "Sony",
    productName: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
    image: item3Img,
    price: 1200,
    productId: "003",
  },
  {
    companyName: "Sony",
    productName: "Headphones, Noise cancelling, Bluetooth 5.0",
    image: item4Img,
    price: 920,
    productId: "004",
  },
  {
    companyName: "HP",
    productName: 'Hp elietebook  2021, 14" Waterproof, 8GB, 12000mAh battery',
    image: item5Img,
    price: 1100,
    productId: "005",
  },
  {
    companyName: "Lenovo",
    productName: "Laptop Gaming computer Personal computer AMD FX",
    image: item1Img,
    price: 1200,
    productId: "001",
  },
  {
    companyName: "Apple",
    productName:
      "dialog box displaying on MacBook Pro, MacBook Pro Macintosh MacBook",
    image: item2Img,
    price: 60,
    productId: "002",
  },
  {
    companyName: "Sony",
    productName: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
    image: item3Img,
    price: 1200,
    productId: "003",
  },
  {
    companyName: "Sony",
    productName: "Headphones, Noise cancelling, Bluetooth 5.0",
    image: item4Img,
    price: 920,
    productId: "004",
  },
  {
    companyName: "HP",
    productName: 'Hp elietebook  2021, 14" Waterproof, 8GB, 12000mAh battery',
    image: item5Img,
    price: 1100,
    productId: "005",
  },
];

const Page = () => {
  const [productsView, setProductsView] = useState("gridView");
  const toggleProductsView = e => {
    setProductsView(e.target.id);
  };

  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <>
      <section className="max-w-8xl mx-auto px-4 flex gap-x-5">
        <ProductsSidebar />
        <div className="w-full">
          <ProductsHeader
            productsView={productsView}
            toggleProductsView={toggleProductsView}
          />
          <ProductsContainer productsView={productsView} products={products} />
          <ProductsPagination
            productsCount={products.length}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
