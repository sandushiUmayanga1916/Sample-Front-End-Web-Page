import React from "react";
import Bell from "./assets/Bell.png";

const Card = () => {
  return (
    <div className="selection-container flex flex-wrap justify-between relative">
      {/* First card */}
      <div className="card w-full sm:w-80 md:w-[550px]  bg-[#F4F4F4] p-4 m-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold mb-6">
            Lorem Ipsum is simply <br /> dummy text.
          </h2>
          <p className="text-[#545454] text-base font-normal mb-6">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
          <div className="card-actions">
            <button className="btn bg-[#1090CB] text-white px-8 py-4">
              View more
            </button>
          </div>
        </div>
      </div>

      {/* Second card */}
      <div className="card-container card w-full sm:w-80  bg-0-primaryColor md:w-[550px] text-white p-4 m-4 relative">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold mb-6">
            Lorem Ipsum is simply <br /> dummy text.
          </h2>
          <p className=" text-base font-normal mb-6">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
          <div className="card-actions">
            <button className="btn text-[#1090CB] bg-white px-8 py-4">
              View more
            </button>
          </div>
        </div>

        <div className="absolute top-0 right-0 -mt-20 mr-2">
          <img src={Bell} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
