import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PaginationRadio, PaginationRadioPlaceholder } from "../components";

const ProductsPagination = ({
  productsCount,
  selectedPage,
  setSelectedPage,
}) => {
  const noOfPages = productsCount / 5;
  const nextPageArrowHandler = () => {
    if (selectedPage < noOfPages) {
      setSelectedPage(prevState => ++prevState);
    }
  };
  const prevPageArrowHandler = () => {
    if (selectedPage > 1) {
      setSelectedPage(prevState => --prevState);
    }
  };

  return (
    <>
      <div className="w-full border p-4 rounded-md flex items-center justify-between border-Grey-100 md:hidden">
        <p className="text-sm text-Grey-900">
          Showing <span className="font-medium">1-12</span> of{" "}
          <span className="font-medium">1090</span>
        </p>
        <div className="flex items-center gap-x-4">
          <button onClick={prevPageArrowHandler} className="text-Grey-700">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {Array.from({ length: noOfPages }).map((_, index) => (
            <PaginationRadio
              key={index}
              idHtmlFor={index + 1}
              number={index + 1}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
          <button onClick={nextPageArrowHandler} className="text-Grey-700">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsPagination;
