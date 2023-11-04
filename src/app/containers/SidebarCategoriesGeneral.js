"use client";
import React, { useRef, useState } from "react";
import { SidebarCategoryItem } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SidebarCategoriesGeneral = ({ title, data }) => {
  const [isListExpanded, setIsListExpanded] = useState(false);

  const toggleListHandler = () => {
    setIsListExpanded(prevState => !prevState);
  };

  return (
    <div className="w-full flex flex-col items-start gap-y-2 p-4 border border-Grey-100 rounded-md">
      <h4 className="text-base font-medium text-Grey-900">{title}</h4>
      <ul className={`flex flex-col gap-y-2 p-0 m-0`}>
        <div className="space-y-2">
          {data.slice(0, 3).map((dataItem, index) => (
            <li key={index} className="flex items-center gap-x-2 text-sm">
              <SidebarCategoryItem data={dataItem} />
            </li>
          ))}
        </div>
        <div
          className={`grid transition-all duration-300 ${
            isListExpanded ? "grid-rows-[1fr] mb-2" : "grid-rows-[0fr]"
          }`}>
          <div className="overflow-hidden space-y-2">
            {data.slice(3).map((dataItem, index) => (
              <li key={index} className="flex items-center gap-x-2 text-sm">
                <SidebarCategoryItem data={dataItem} />
              </li>
            ))}
          </div>
        </div>
      </ul>
      <button
        onClick={toggleListHandler}
        className="text-Grey-700 flex flex-row items-center gap-x-1 text-sm">
        {isListExpanded ? "Show less" : "Show more"}
        <FontAwesomeIcon
          icon={faChevronDown}
          size="xs"
          width={12}
          className={`transition-all duration-300 ${
            isListExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

export default SidebarCategoriesGeneral;
