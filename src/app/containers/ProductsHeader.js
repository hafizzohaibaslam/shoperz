import Image from "next/image";
import React from "react";
import gridIcon from "../assets/productsIcons/grid.svg";
import listIcon from "../assets/productsIcons/list.svg";
import { Select } from "../components";

const ProductsHeader = ({ productsView, toggleProductsView }) => {
  return (
    <>
      <div className="w-full border p-4 rounded-md border-Grey-100">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-Grey-900 font-medium xs:text-lg">
            Products List
          </h1>
          <p className="text-sm text-Grey-900">
            Showing <span className="font-medium">1-12</span> of{" "}
            <span className="font-medium">1090</span>
          </p>
        </div>
        <hr className="my-4 border-Grey-100 md:hidden" />
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center gap-x-3">
            <input
              className="hidden"
              type="radio"
              name="productsViewType"
              id="gridView"
              checked={productsView === "gridView"}
              onChange={toggleProductsView}
            />
            <label
              htmlFor="gridView"
              className={`cursor-pointer p-2 rounded-md hover:bg-Grey-100 ${
                productsView === "gridView" && "bg-Grey-100"
              }`}>
              <Image src={gridIcon} alt="grid icon" width={16} height={16} />
            </label>
            <input
              className="hidden"
              type="radio"
              name="productsViewType"
              id="listView"
              checked={productsView === "listView"}
              onChange={toggleProductsView}
            />
            <label
              htmlFor="listView"
              className={`cursor-pointer p-2 rounded-md hover:bg-Grey-100 ${
                productsView === "listView" && "bg-Grey-100"
              }`}>
              <Image src={listIcon} alt="list icon" width={16} height={16} />
            </label>
          </div>
          <div className="space-x-3">
            <Select defaultValue={"Default sorting"} />
            <Select defaultValue={"12 products/page"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsHeader;
