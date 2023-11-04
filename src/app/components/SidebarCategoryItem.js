import React from "react";

const SidebarCategoryItem = ({ data }) => {
  return (
    <>
      <input type="checkbox" id={data.idHtmlFor} className="w-4 h-4" />
      <label htmlFor={data.idHtmlFor}>{data.label}</label>
      <span className="text-Grey-400">({data.itemsCount})</span>
    </>
  );
};

export default SidebarCategoryItem;
