import React from "react";
import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="sm:w-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center">
      <form className="absolute flex justify-center items-center">
        <input
          type="search"
          id="search"
          name="search"
          className="py-3 px-3 w-[80vw] sm:text-[1.2rem] sm:w-[40vw] mx-auto outline-none border-b-2 bg-bgColor"
          placeholder="Search your asset..."
        />
        <IoIosSearch className="text-xl sm:text-2xl text-gray-500 -ml-10" />
      </form>
    </div>
  );
};

export default HeroSection;
