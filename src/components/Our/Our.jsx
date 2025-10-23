import React from "react";
import { ourItems } from "../../api/api";
const Our = () => {
  return (
    <section className="container mt-[100px]">
      <div className="flex flex-col gap-[10px] items-center justify-center">
        <h1 className="text-[30px] text-[#3A3A3A] font-Cardo">
          Our pieces inside your home
        </h1>
        <p className="text-[#000000] text-[18px] font-Cardo">
          Get inspired by our products in real-life. Tag us and be featured!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {ourItems.map((item) => (
          <div key={item.id} className="relative ">
            <img src={item.img} alt={item.title} className="" />
            <div className="absolute top-[30px] left-[240px] bg-opacity-80 px-2 py-1 rounded flex items-center gap-1">
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-4 h-4"
              />
              <p className="text-xs sm:text-sm font-Cardo">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[20px] mt-[150px] items-center justify-center">
        <p className="text-[20px] font-Cardo max-w-[1090px] text-[#020202] text-center">
          "The team from Woodendot has displayed utmost professionalism from
          order to deliver and customer support. We placed an order to the UK
          and would definitely recommend friends to order from Woodendot!"
        </p>
        <p className="text-[15px] font-Cardo  text-[#000000] text-center">
          R. Aoun, United Kingdom
        </p>
      </div>
    </section>
  );
};

export default Our;
