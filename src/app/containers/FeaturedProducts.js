"use client";
import React, { useEffect } from "react";
import HomeCarousel from "./HomeCarousel";
import item1Img from "../assets/item1.png";
import item2Img from "../assets/item2.png";
import item3Img from "../assets/item3.png";
import item4Img from "../assets/item4.png";
import item5Img from "../assets/item5.png";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/slices/featuredProductsSlice";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      companyName: "Lenovo",
      productName: "Laptop Gaming computer Personal computer AMD FX",
      image: item1Img,
      price: 1200,
    },
    {
      companyName: "Apple",
      productName:
        "dialog box displaying on MacBook Pro, MacBook Pro Macintosh MacBook",
      image: item2Img,
      price: 60,
    },
    {
      companyName: "Sony",
      productName: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
      image: item3Img,
      price: 1200,
    },
    {
      companyName: "Sony",
      productName: "Headphones, Noise cancelling, Bluetooth 5.0",
      image: item4Img,
      price: 920,
    },
    {
      companyName: "HP",
      productName: 'Hp elietebook  2021, 14" Waterproof, 8GB, 12000mAh battery',
      image: item5Img,
      price: 1100,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(featuredProducts));
  }, []);

  const featuredProductsFromStore = useSelector(state => {
    return state?.featuredProducts.data;
  });

  return (
    <>
      <HomeCarousel
        products={featuredProductsFromStore}
        h3="Featured Products"
      />
    </>
  );
};

export default FeaturedProducts;
