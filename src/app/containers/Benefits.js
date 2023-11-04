import React from "react";
import { Benefit, H3 } from "../components";
import icon1 from "../assets/benefitsIcons/icon1.png";
import icon2 from "../assets/benefitsIcons/icon2.png";
import icon3 from "../assets/benefitsIcons/icon3.png";
import icon4 from "../assets/benefitsIcons/icon4.png";
import icon5 from "../assets/benefitsIcons/icon5.png";

const Benefits = () => {
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-8xl mx-auto space-y-9">
          <H3 text={"Benefits"} />
          <div className="grid grid-cols-5 border-2 border-Grey-100 py-8 rounded-md lg:grid-cols-3 lg:gap-y-12 sm:grid-cols-2 xs:grid-cols-1">
            <Benefit
              icon={icon1}
              heading={"Guarantee"}
              description={"24 Months"}
            />
            <Benefit
              icon={icon2}
              heading={"Rate Paying"}
              description={"4 - 12 Months"}
              afterStyles="sm:after:hidden"
            />
            <Benefit
              icon={icon3}
              heading={"Payments"}
              description={"Secured"}
              afterStyles="lg:after:hidden sm:after:block"
            />
            <Benefit
              icon={icon4}
              heading={"Free Delivery"}
              description={"from $100"}
              afterStyles="sm:after:hidden"
            />
            <Benefit
              icon={icon5}
              heading={"Brands"}
              description={"Top Brands"}
              isAfter={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
