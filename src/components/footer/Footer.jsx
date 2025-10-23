import React from "react";
import FSC from "../../assets/img/FSC.svg";
import pilot from "../../assets/img/pilot.svg";
const Footer = () => {
  return (
    <footer className="bg-[#E9E9E9] py-[50px] mt-[100px]">
      <div className="container ">
        <div className="flex ">
          <div className="flex justify-between ">
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
          </div>
          <div>
            <p>Don’t miss any news and exclusive offers!</p>
            <input type="text" placeholder="Newsletter Subscription" />
            <img src={FSC} alt="" />
            <img src={pilot} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
