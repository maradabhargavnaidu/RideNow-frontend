import React from "react";
import Background from "../assets/medium.jpg";
const Header = () => {
  return (
    <header className="bg-black text-white ">
      <div className=" flex justify-center ">
        <div>
          <img
            src={Background}
            alt="hero-img"
            className="rounded min-h-screen"
            height={300}
          />
        </div>
        <div className="fixed top-[20%] flex flex-col w-auto px-5">
          <p className="font-extrabold text-6xl  md:text-8xl text-white font-RubikScr">
            Embark Now
          </p>
          <p className="font-semibold text-4xl text-white md:text-5xl font-RubikScr">
            Rent Your Ride Today!
          </p>
          <div className="flex flex-col gap-5 my-5">
            <input
              type="text"
              placeholder="Enter Drop Location"
              className="h-16 p-2 text-gray-900 accent-transparent"
            />
            <input
              type="text"
              placeholder="Enter PickUp and Drop Time"
              className="h-16 p-2 text-gray-900 accent-transparent"
            />
            <button className="bg-transparent sm:text-lg text-xl text-white hover:text-white py-5 font-semibold border-2 border-white hover:bg-black  duration-700 transition-all">
              Find Your Ride
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
