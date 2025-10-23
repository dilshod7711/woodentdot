import React from "react";
import { brandItem } from "../../api/api";
import brandColliction from "../../assets/img/brandColliction.svg";

const Brand = () => {
  return (
    <section className="container mt-[100px]">
      <div className="grid grid-cols-4 place-items-center">
        {brandItem.map((item) => (
          <div
            className="flex flex-col items-center justify-center hover:bg-gray-200 p-4 rounded-lg transition duration-300 ease-in-out"
            key={item.id}
          >
            <img src={item.img} alt="" />
            <h1 className="text-[24px] text-[#000000] font-Cardo">
              {item.title}
            </h1>
            <p className="text-[#000000] text-[15px] font-Cardo max-w-[283px] text-center">
              {item.description}
            </p>
            <button
              className="text-[15px] text-[#000000] font-Cardo mt-[28px] border-b border-black cursor-pointer
            "
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[#454545] font-Cardo mt-[100px] text-center">
        Those who are talking about us...
      </p>
      <div className="mt-[50px]">
        <img src={brandColliction} alt="" />
      </div>
    </section>
  );
};

export default Brand;
