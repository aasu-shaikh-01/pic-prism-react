import React from "react";
import { Link } from "react-router-dom";
import img from "../../public/picprismlogo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 fixed top-0 left-0 ring-0 shadow-md gap-1 sm:gap-0 w-full z-30 bg-white">
      {/* logo and site name */}
      <div className="flex justify-between items-center">
        {/* I will add the image here later */}
        <img src={img} className="w-[50px]" alt="our logo" />
        <Link to={"/"} className="font-bold text-2xl">
          PicPrismm
        </Link>
      </div>
      <ul className="flex gap-5 font-semibold text-gray-600 ml-5 sm:ml-0">
        <Link to={"/"}>
          <li className="hover:text-black sm:p-2">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="hover:text-black sm:p-2">About</li>
        </Link>
        <Link to={"/contact"}>
          <li className="hover:text-black sm:p-2">Contact</li>
        </Link>
        <Link to={"/login"}>
          <li className="hover:text-black sm:p-2">Log In</li>
        </Link>
        <Link to={"/signup"}>
          <li className="hover:text-black sm:p-2">Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
// flex-col sm:flex-row justify-between items-start sm:items-center
