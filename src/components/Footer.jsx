import React from "react";
import facebook from "./../assets/facebook.png";
import insta from "./../assets/instagram.png";
import twitter from "./../assets/twitter.png";
import linkedin from "./../assets/linkedin.png";

const Footer = () => {
  return (
    <div>
        <footer className="footer p-10  text-base-content">
      <aside>
        <div className="flex flex-row items-center cursor-pointer gap-2">
          <h1 className="text-[29px] text-0-primaryColor font-bold">Logo</h1>
        </div>
        <p className=" my-8 text-base font-normal text-[#515151]">
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry.{" "}
        </p>
        <a href="" className="text-lg font-normal text-[#515151]">
          @Lorem
        </a>
      </aside>
      <nav>
        <h6 className=" text-lg font-medium text-black">About us</h6>
        <a className="link link-hover font-normal text-base text-[#515151]">
          Lorem
        </a>
        <a className="link link-hover font-normal text-base text-[#515151]">
          Portfolio
        </a>
        <a className="link link-hover font-normal text-base text-[#515151]">
          Careers
        </a>
        <a className="link link-hover font-normal text-base text-[#515151]">
          Contact us
        </a>
      </nav>
      <nav>
        <h6 className="text-lg font-medium text-black">Contact us</h6>
        <a className="link link-hover font-normal text-base text-[#515151]">
          Lorem Ipsum is simply dummy text <br /> of the printing and
          typesetting <br /> industry.{" "}
        </a>
        <a className="link link-hover font-normal text-base mt-4 text-[#515151]">
          +908 89097 890
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 md:mt-28">
          <img src={facebook} alt="" className="p-5 shadow-xl rounded-full" />
          <img src={insta} alt="" className="p-5 shadow-xl rounded-full" />
          <img src={twitter} alt="" className="p-5 shadow-xl rounded-full" />
          <img src={linkedin} alt="" className="p-5 shadow-xl rounded-full" />
        </div>
      </nav>
      
    </footer>
    <hr className="w-full border-t-2 border-gray-200 my-8" />
    <p className="text-[#515151] text-center mb-8 text-[13px] font-normal">
    Copyright ® 2024 Lorem All rights Reserved
  </p>
    </div>
  );
};

export default Footer;
