import React from "react";
import FSC from "../../assets/img/FSC.svg";
import pilot from "../../assets/img/pilot.svg";
import footerBrand from "../../assets/img/footerB.svg";
const Footer = () => {
  return (
    <footer className="bg-[#E9E9E9] py-[50px] mt-[100px]">
      <div className="container ">
        <div className="flex justify-between ">
          <div className="flex justify-between gap-[150px] ">
            <div className="flex flex-col gap-[30px] ">
              <div>
                <h1 className="text-[#000000] text-[21px] font-Cardo ">
                  About
                </h1>
              </div>
              <div className="flex flex-col gap-[10px]">
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  About Us
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Design
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Sustainability
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  We plant trees
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Our Story
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Awards
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] ">
              <div>
                <h1 className="text-[#000000] text-[21px] font-Cardo ">Help</h1>
              </div>
              <div className="flex flex-col gap-[10px]">
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  About Us
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Design
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Sustainability
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  We plant trees
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Our Story
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Awards
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] ">
              <div>
                <h1 className="text-[#000000] text-[21px] font-Cardo ">More</h1>
              </div>
              <div className="flex flex-col gap-[10px]">
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  About Us
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Design
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Sustainability
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  We plant trees
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Our Story
                </a>
                <a className="text-[15px] text-[#000000] font-Cardo " href="">
                  Awards
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p>Don’t miss any news and exclusive offers!</p>
            <input
              className=" border-[1px] border-gray-300 p-[8px]"
              type="text"
              placeholder="Newsletter Subscription"
            />
            <img src={FSC} alt="" />
            <img src={pilot} alt="" />
          </div>
        </div>
        <div className="flex justify-between mt-[50px] ">
          <p className="text-[12px] text-[#000000] font-Cardo">
            p © Copyright – WOODENDOT 2021
          </p>
          <img src={footerBrand} alt="" />
          <p className="text-[12px] text-[#000000] font-Cardo">
            Terms & Conditions|Privacy Policy & Cookies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
