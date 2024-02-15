import React from "react";
import Star from "./../assets/Star.png";
import Pie from "./../assets/Pai Chart.png";

const Subscribe = () => {
  return (
    <div className="selection-container bg-[#E8F4FA] relative">
      <div className="absolute -top-12 left-24">
        <img src={Star} alt="" />
      </div>
      <div className="px-24 py-24 relative">
        <div className="w-full px-0 md:px-60 text-center relative">
          <div className="absolute -top-12 right-40">
            <img src={Pie} alt="" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 mt-28">
            Lorem Ipsum is simply dummy text of the printing.
          </h2>
        </div>

        <form className="w-full max-w-2xl mx-auto mt-20 mb-24 space-y-4 text-gray-600">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-4 px-8 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="flex-none py-4 px-8 rounded-lg text-white bg-black hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
