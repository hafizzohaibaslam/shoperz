import React from "react";
import {
  Benefits,
  BigDeals,
  FeaturedProducts,
  Hero,
  LandingSidebar,
} from "./containers";

const Page = () => {
  return (
    <>
      <LandingSidebar />
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <BigDeals />
    </>
  );
};

export default Page;
