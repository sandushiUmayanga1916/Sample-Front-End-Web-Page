import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handlChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-5 bg-white">
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <h1 className="text-[29px] text-0-primaryColor font-bold">Logo</h1>
          </div>
          <div className="flex-grow"></div>
          <nav className="hidden md:flex flex-row items-center font-normal text-base gap-12 pr-12">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer text-0-primaryColor"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="about-us"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              About us
              <span className="absolute inset-x-0 bottom-0 h-0.5 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Blog
              <span className="absolute inset-x-0 bottom-0 h-0.5 group-hover:scale-x-100"></span>
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <button className="btn bg-0-primaryColor text-white flex items-center px-6 rounded-md">
              contact us
            </button>
          </div>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handlChange} />
            ) : (
              <AiOutlineMenu size={25} onClick={handlChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about-us"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link>

          <button>contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
