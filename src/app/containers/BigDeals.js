"use client";
import React, { useEffect } from "react";
import HomeCarousel from "./HomeCarousel";
import item1Img from "../assets/item1.png";
import item2Img from "../assets/item2.png";
import item3Img from "../assets/item3.png";
import item4Img from "../assets/item4.png";
import item5Img from "../assets/item5.png";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/slices/bigDealsSlice";

const BigDeals = () => {
  const bigDeals = [
    {
      companyName: "Lenovo",
      productName: "Laptop Gaming computer Personal computer AMD FX",
      image: item1Img,
      price: 1200,
      discountPrice: 1000,
    },
    {
      companyName: "Apple",
      productName:
        "dialog box displaying on MacBook Pro, MacBook Pro Macintosh MacBook",
      image: item2Img,
      price: 60,
      discountPrice: 40,
    },
    {
      companyName: "Sony",
      productName: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
      image: item3Img,
      price: 1200,
      discountPrice: 900,
    },
    {
      companyName: "Sony",
      productName: "Headphones, Noise cancelling, Bluetooth 5.0",
      image: item4Img,
      price: 920,
      discountPrice: 780,
    },
    {
      companyName: "HP",
      productName: 'Hp elietebook  2021, 14" Waterproof, 8GB, 12000mAh battery',
      image: item5Img,
      price: 1100,
      discountPrice: 850,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(bigDeals));
  }, []);

  const bigDealsFromStore = useSelector(state => {
    return state?.bigDeals.data;
  });

  return (
    <>
      <HomeCarousel products={bigDealsFromStore} h3="Big Deals" />
    </>
  );
};

export default BigDeals;
