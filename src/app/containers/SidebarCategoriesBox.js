"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SidebarCategoriesBox = ({ data }) => {
  const [isListExpanded, setIsListExpanded] = useState(false);
  const toggleListHandler = () => {
    setIsListExpanded(prevState => !prevState);
  };

  const [checkedItem, setCheckedItem] = useState("categoryAll");
  const checkedItemHandler = e => {
    setCheckedItem(e.target.id);
  };

  return (
    <>
      <div className="w-full flex flex-col items-start gap-y-2 p-4 bg-Grey-100 rounded-md">
        <h4 className="text-base font-medium text-Grey-900">Categories</h4>
        <ul className={`flex flex-col gap-y-2 p-0 m-0 relative`}>
          <button
            onClick={toggleListHandler}
            className="absolute right-0 top-0">
            <FontAwesomeIcon
              icon={faChevronDown}
              width={16}
              className={`transition-all duration-300 text-Grey-900 ${
                isListExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div className="space-y-2">
            {data.slice(0, 1).map((dataItem, index) => (
              <li key={index} className="flex items-center gap-x-2 text-sm">
                <input
                  type="radio"
                  className="hidden"
                  name="categoryRadio"
                  id={dataItem.idHtmlFor}
                  checked={checkedItem === dataItem.idHtmlFor}
                  onChange={checkedItemHandler}
                />
                <label
                  htmlFor={dataItem.idHtmlFor}
                  className={`cursor-pointer ${
                    checkedItem === dataItem.idHtmlFor
                      ? "text-Grey-900 font-medium"
                      : "text-Grey-700"
                  }`}>
                  {dataItem.label}
                </label>
                <span className="text-Grey-600">({dataItem.itemsCount})</span>
              </li>
            ))}
          </div>
          <div
            className={`grid transition-all duration-300 ${
              isListExpanded ? "grid-rows-[1fr] mb-2" : "grid-rows-[0fr]"
            }`}>
            <div className="overflow-hidden space-y-2">
              {data.slice(1).map((dataItem, index) => (
                <li key={index} className="flex items-center gap-x-2 text-sm">
                  <input
                    type="radio"
                    className="hidden"
                    name="categoryRadio"
                    id={dataItem.idHtmlFor}
                    checked={checkedItem === dataItem.idHtmlFor}
                    onChange={checkedItemHandler}
                  />
                  <label
                    htmlFor={dataItem.idHtmlFor}
                    className={`cursor-pointer ${
                      checkedItem === dataItem.idHtmlFor
                        ? "text-Grey-900 font-medium"
                        : "text-Grey-700"
                    }`}>
                    {dataItem.label}
                  </label>
                  <span className="text-Grey-600">({dataItem.itemsCount})</span>
                </li>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default SidebarCategoriesBox;
