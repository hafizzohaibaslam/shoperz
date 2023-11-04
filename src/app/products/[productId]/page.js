"use client";
import {
  ProductBasicData,
  ProductDescription,
  ProductMain,
  ProductYouMayLike,
} from "@/app/containers";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathName = usePathname();

  return (
    <>
      <ProductMain />
      <ProductBasicData />
      <ProductDescription />
      <ProductYouMayLike />
    </>
  );
};

export default Page;
