import React from "react";

const Select = ({ defaultValue }) => {
  return (
    <>
      <select
        defaultValue={defaultValue}
        id="countries"
        className="py-1 px-5 border border-Grey-100 text-Grey-700 rounded-full bg-white">
        <option value={defaultValue}>{defaultValue}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );
};

export default Select;
