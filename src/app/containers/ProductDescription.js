import React from "react";
import { ProductH3, ProductH4 } from "../components";
import tempImage from "@/app/assets/item1.png";
import additionalAppsImg from "@/app/assets/additionalApps.jpg";
import windows10Img from "@/app/assets/windows10.jpg";
import Image from "next/image";

const descriptionItems = [
  "Processor: INTEL CORE I7-4790 / 4.0 GHz TURBO! / 8 LOGIC CORES",
  "Motherboard: MSI B85M-G43",
  "Graphics card: INTEL HD GRAPHICS 4600 / Suitable performance for games like Minecraft, CS: Global Offensive, League Of Legends, Dota 2, etc.",
  "RAM memory: 32GB DDR3!",
  "Hard drives: SSD 1TB / SATA III",
  "Power supply: FORTRON FSP GROUP 350W (THE COMPETITION USES WEAKER 300W POWER SUPPLIES)",
  "Operating system: FULL VERSION WINDOWS 10 PRO pl",
  "Internet connection: LAN / Wi-Fi",
  "Sensational cover with glass side and RGB backlight - up to 20 backlight modes.",
  "Comes free with a huge and durable Medion Erazer mouse pad and keyboard!",
  "Processor better than the competition: i7-4790!",
];
const additionalApps = [
  "Total 360 Antivirus",
  "Acrobat Reader DC",
  "WinRAR",
  "Office package Open Office",
  "Google Chrome",
  "VLC Media Player",
];
const ProductDescription = () => {
  return (
    <>
      <section className="my-12 px-4">
        <div className="max-w-8xl mx-auto ">
          <div className="w-2/3 border border-Grey-100 space-y-12 p-6 rounded-md lg:w-full">
            <ProductH3 text={"Description"} />
            <div className="grid grid-cols-2 items-center md:grid-cols-1">
              <div>
                <ProductH4 text={"Key properties:"} />
                <ul className="list-disc text-Grey-900 ml-6 mt-2">
                  {descriptionItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Image src={tempImage} alt="product image" />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center md:grid-cols-1">
              <div className="md:hidden">
                <Image src={tempImage} alt="product image" />
              </div>
              <div className="space-y-4">
                <div>
                  <ProductH4 text={"Expand your options and achieve more"} />
                  <p className="text-Grey-700 mt-2">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </p>
                </div>
                <div>
                  <ProductH4 text={"Lorem Ipsum"} />
                  <p className="text-Grey-700 mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi magni animi itaque deleniti ratione et numquam
                    dolores, dolor dicta voluptatem sint tempora aliquid quod
                    assumenda rem porro facere suscipit. Laborum cupiditate
                    dicta a aut. Accusantium molestias expedita numquam maxime
                    dicta.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ProductH4
                text={
                  "The device is fully prepared and configured. In addition, applications such as:"
                }
              />
              <ul className="list-disc text-Grey-900 ml-6 mt-2">
                {additionalApps.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="flex items-center justify-center my-8">
                <Image src={additionalAppsImg} alt="additional apps" />
              </div>
            </div>
            <div>
              <ProductH4
                text={
                  "The computer has a full legal version of the WINDOWS operating system without a time limit"
                }
              />
              <p className="text-Grey-700 mt-2 mb-8">
                The operating system including drivers is installed and
                configured. All ready for work and fun. After connecting and
                starting the computer, it will display the Windows desktop.
              </p>
              <ProductH4
                text={
                  "The WINDOWS license key is listed on the warranty card along with information about the installed software."
                }
              />
              <div className="flex items-center justify-center my-8">
                <Image src={windows10Img} alt="windows 10" />
              </div>
            </div>
            <div>
              <ProductH4 text={"Safe transportation"} />
              <p className="text-Grey-700 mt-2 mb-8">
                After thorough testing, the computers are packed in strong,
                original product cartons. They are secured inside by strong
                polystyrene profiles. This ensures that the computer reaches you
                without problems and unpleasant surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDescription;
