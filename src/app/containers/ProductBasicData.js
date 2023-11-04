import React from "react";
import { ProductH3 } from "../components";

const basicData = [
  { label: "State of goods", value: "New" },
  { label: "Invoice", value: "With VAT invoice" },
  { label: "Manufacturer", value: "Cooler Master" },
  { label: "Manufacturer code", value: "E873208R" },
  { label: "Model", value: "R873-2" },
];

const ProductBasicData = () => {
  return (
    <>
      <section className="my-12 px-4 sm:hidden">
        <div className="max-w-8xl mx-auto">
          <div className="w-2/3 border border-Grey-100 p-6 rounded-md lg:w-full">
            <ProductH3 text={"Basic Data"} />
            <table className="w-full mt-4 mb-6">
              <tbody>
                {basicData.map(({ label, value }, index) => (
                  <tr
                    key={index}
                    className={`text-lg text-Grey-700 ${
                      index % 2 === 0 ? "bg-Grey-600 bg-opacity-10" : "bg-white"
                    }`}>
                    <td className="w-1/3 pl-4 py-2 md:w-1/2">{label}</td>
                    <td className="w-2/3 pr-4 py-2 md:w-1/2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a href="#" className="text-Primary-600 underline">
              View All Parameters
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductBasicData;
