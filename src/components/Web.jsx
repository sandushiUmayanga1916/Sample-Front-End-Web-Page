import React from "react";
import Happy from "./../assets/happy.png";
import web from "./../assets/web.png";

const Web = () => {
  return (
    <div className="selection-container">
      <div className="py-24 flex flex-col-reverse md:flex-row justify-between items-center gap-0">
        {/* Image */}
        <div className="md:w-1/2 order-2 md:order-1">
          <img src={web} alt="" />
        </div>
        {/* Text */}
        <div className="md:w-1/2 space-y-7 px-4 order-1 md:order-2">
          <div className="card flex flex-col lg:flex-row gap-5 items-center">
            <img src={Happy} className="bg-[#1090CB] p-5 rounded-full" />
            <div>
              <h1 className="text-lg font-medium text-black">
                Lorem Ipsum is simply dummy text
              </h1>
              <p className="text-[#868686] font-normal text-sm">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <h2 className="md:text-3xl text-4xl font-semibold md:leading-snug leading-snug">
            <span className="text-0-primaryColor">Lorem Ipsum </span>is simply
            dummy text of the printing.
            <span className="text-0-yellowColor"> Battery</span> House
          </h2>
          <p className="text-base font-normal text-[#545454]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Web;
