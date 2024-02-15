import React from "react";
import pic1 from "./../assets/Logo1.png";
import pic2 from "./../assets/Logo2.png";
import pic3 from "./../assets/Logo3.png";
import pic4 from "./../assets/Logo4.png";

const Company = () => {
  return (
    <div className="selection-container mt-28">
      <h2 className=" text-2xl font-medium text-center mb-8">
        You will be in good Company
      </h2>
      <div className=" flex flex-wrap justify-between">
        {/* First card */}
        <div className="card flex flex-col lg:flex-row items-center">
          <img src={pic1} />
        </div>

        {/* Second card */}
        <div className="card flex flex-col lg:flex-row items-center">
          <img src={pic2} />
        </div>

        {/* Third card */}
        <div className="card flex flex-col lg:flex-rowitems-center">
          <img src={pic3} />
        </div>

        {/* Fourth card */}
        <div className="card flex flex-col lg:flex-rowitems-center">
          <img src={pic4} />
        </div>
      </div>
    </div>
  );
};

export default Company;
