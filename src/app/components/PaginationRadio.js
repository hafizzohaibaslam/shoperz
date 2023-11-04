import React from "react";

const PaginationRadio = ({
  idHtmlFor,
  number,
  selectedPage,
  setSelectedPage,
  disabled,
}) => {
  return (
    <>
      <div>
        <input
          type="radio"
          name="paginationRadio"
          id={idHtmlFor}
          checked={selectedPage === number}
          onChange={() => setSelectedPage(number)}
          className="hidden"
          disabled={disabled}
        />
        <label
          htmlFor={idHtmlFor}
          className={`flex items-center justify-center cursor-pointer rounded-full w-8 h-8 ${
            selectedPage === number
              ? "text-white bg-Primary-600"
              : "bg-Grey-100"
          }`}>
          <span>{number}</span>
        </label>
      </div>
    </>
  );
};

export default PaginationRadio;
