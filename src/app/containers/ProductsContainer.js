import React from "react";
import { ProductGridView, ProductListView } from "../components";

const ProductsContainer = ({ productsView, products }) => {
  return (
    <>
      {productsView === "gridView" ? (
        <div className="grid grid-cols-4 gap-5 py-5 xl:grid-cols-3 md:grid-cols-2 md:text-xs sm:gap-x-3">
          {products.map(({ productName, image, price, productId }, index) => (
            <ProductGridView
              key={index}
              productName={productName}
              image={image}
              price={price}
              productId={productId}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-5 py-5">
          {products.map(({ productName, image, price, productId }, index) => (
            <ProductListView
              key={index}
              productName={productName}
              image={image}
              price={price}
              productId={productId}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
