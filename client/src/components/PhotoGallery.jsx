import React from "react";
import ImageCard from "./ImageCard";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-xl my-5 font-semibold">Photos</h3>

      {/* All my photos will be listed inside this div */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
        {/* Image card */}
        <ImageCard
          title="The Palace"
          author="Coder29"
          img="https://images.pexels.com/photos/20367980/pexels-photo-20367980/free-photo-of-hungarian-parliament-in-budapest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          price={10}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Bridge"
          author="Coder29"
          img="https://images.pexels.com/photos/103596/pexels-photo-103596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Tunnel"
          author="Coder29"
          img="https://images.pexels.com/photos/1057858/pexels-photo-1057858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Tower Decor"
          author="Coder29"
          img="https://images.pexels.com/photos/434659/pexels-photo-434659.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Building"
          author="Coder29"
          img="https://images.pexels.com/photos/342008/pexels-photo-342008.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Railway"
          author="Coder29"
          img="https://images.pexels.com/photos/552779/pexels-photo-552779.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Road"
          author="Coder29"
          img="https://images.pexels.com/photos/59520/pexels-photo-59520.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Evening"
          author="Coder29"
          img="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Infra"
          author="Coder29"
          img="https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={20}
          icon1={
            <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
