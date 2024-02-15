import React from "react";
import homeImg from "./../assets/Bill Sitting using laptop 1.png";
import vase from "./../assets/Succlent angle 1.png";
import Brike from "./../assets/Cuboid 1.png";
import Vec1 from "./../assets/Vector 1.png";
import Vec2 from "./../assets/Vector 2.png";

const Home = () => {
  return (
    <div className=" selection-container bg-[#1090CB1A]">
      <div className="py-24 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        {/* text */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className=" md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-black">
            Experienced{" "}
            <span className=" text-0-primaryColor">mobile and web</span>{" "}
            applications and website builders measuring.
          </h2>
          <p className=" text-base font-normal text-[#5C5C5C] text-secondaryColor">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.{" "}
          </p>
          <div className="flex">
            <button className="bg-0-primaryColor text-white px-8 py-3 rounded-md mr-4">
              Contact us
            </button>
            <button className=" bg-white text-0-primaryColor border-0-primaryColor border px-8 py-3 rounded-md">
              View more
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="relative">
          <img src={homeImg} alt="img" />

          <div className=" absolute  top-[150px] right-0">
            <img src={Brike} alt="" />
          </div>

          <div className=" absolute  top-[250px] right-[350px]  ">
            <img src={vase} alt="" />
          </div>
        </div>

        <div className=" absolute  top-[300px] right-0 hidden lg:block">
          <img src={Vec1} alt="" />
        </div>
        <div className=" absolute top-[500px]  left-0 hidden lg:block ">
          <img src={Vec2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
