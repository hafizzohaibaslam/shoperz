import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ColorSelectRadio = ({
  idHtmlFor,
  color,
  selectedColor,
  setSelectedColor,
}) => {
  let bgColor = "";
  if (color === "black") {
    bgColor = "bg-black";
  } else if (color === "white") {
    bgColor = "bg-white";
  } else if (color === "blue") {
    bgColor = "bg-Primary-700";
  }
  return (
    <>
      <div>
        <input
          type="radio"
          name="colorSelectRadio"
          id={idHtmlFor}
          className={`hidden`}
          checked={selectedColor === idHtmlFor}
          onChange={() => setSelectedColor(idHtmlFor)}
        />
        <label
          htmlFor={idHtmlFor}
          className={`${bgColor} flex items-center justify-center rounded-md border-2 border-Grey-100 w-8 h-8`}>
          {selectedColor === idHtmlFor && (
            <FontAwesomeIcon
              icon={faCheck}
              width={14}
              className={`${
                color === "white" ? "text-black" : "text-white h-auto"
              }`}
            />
          )}
        </label>
      </div>
    </>
  );
};

export default ColorSelectRadio;
