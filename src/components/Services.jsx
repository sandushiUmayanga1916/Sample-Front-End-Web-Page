/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Web from "./../assets/website-content 1.png";
import Seo from "./../assets/seo-tag 1.png";
import Vec from "./../assets/immersive 1.png";
import mobile from "./../assets/coding (1) 1.png";

const Services = () => {
  return (
    <div className="selection-container py-10 flex flex-wrap justify-center gap-5">
      {/* First card */}
      <div className="card flex flex-col lg:flex-row gap-5 items-center">
        <img src={Web} className="bg-[#EFEAFF] p-6 rounded-3xl" />
        <div>
          <h1 className="text-xl font-medium text-black">Web Application</h1>
          <p className="text-[#969696] font-normal text-sm">
            Lorem Ipsum is simply
          </p>
        </div>
      </div>

      {/* Second card */}
      <div className="card flex flex-col lg:flex-row gap-5 items-center">
        <img src={Seo} className="bg-[#ECFFDA] p-7 rounded-3xl" />
        <div>
          <h1 className="text-xl font-medium text-black ">SEO</h1>
          <p className="text-[#969696] font-normal text-sm">
            Lorem Ipsum is simply
          </p>
        </div>
      </div>

      {/* Third card */}
      <div className="card flex flex-col lg:flex-row gap-5 items-center">
        <img src={Vec} className="bg-[#DAE6FF] p-6 rounded-3xl" />
        <div>
          <h1 className="text-xl font-medium text-black">AR/VR Solutions</h1>
          <p className="text-[#969696] font-normal text-sm">
            Lorem Ipsum is simply
          </p>
        </div>
      </div>

      {/* Fourth card */}
      <div className="card flex flex-col lg:flex-row gap-5 items-center">
        <img src={mobile} className="bg-[#FFE5DA] p-6 rounded-3xl" />
        <div>
          <h1 className="text-xl font-medium text-black">
            Mobile Applications
          </h1>
          <p className="text-[#969696] font-normal text-sm">
            Lorem Ipsum is simply
          </p>
        </div>
      </div>
      <hr className="w-full border-t-2 border-gray-200 my-10" />
      <h1 className="mt-24 text-[#252525] font-semibold text-4xl">
        Lorem Ipsum is simply dummy text of the printing.{" "}
      </h1>
      <p className=" font-normal text-lg text-[#868686]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>

      <p className=" font-normal text-lg text-[#868686]">
        Lorem Ipsum has been the industry's
      </p>
    </div>
  );
};

export default Services;
