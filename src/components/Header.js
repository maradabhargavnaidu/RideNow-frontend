import React from "react";
import Background from "../assets/medium.jpg";
import toast, { Toaster } from "react-hot-toast";
const Header = () => {
  return (
    <header className=" text-white">
      <div className=" flex justify-center items-center bg-white min-h-screen">
        {/* <div>
          <img
            src={Background}
            alt="hero-img"
            className="rounded min-h-screen"
            height={300}
          />
        </div> */}
        <div className=" flex flex-col w-auto px-5">
          <p className="font-extrabold text-6xl  md:text-8xl text-violet-700 font-RubikScr">
            Embark Now
          </p>
          <p className="font-semibold text-4xl text-violet-700 md:text-5xl font-RubikScr">
            Rent Your Ride Today!
          </p>
          <div className="flex flex-col gap-5 my-5">
            <input
              type="text"
              placeholder="Enter Drop Location"
              className="h-16 p-2 text-gray-900 accent-transparent border-2 border-violet-700"
            />
            <input
              type="text"
              placeholder="Enter PickUp and Drop Time"
              className="h-16 p-2 text-gray-900 accent-transparent border-2 border-violet-700"
            />
            {/* <button
              onClick={() => toast("Here is your toast")}
              className="sm:text-lg text-xl font-Nunito py-5 font-bold border-2 bg-violet-700  duration-700 transition-all hover:bg-white hover:text-violet-700 hover:border-violet-700"
            >
              Find Your Ride
            </button> */}
            <button class=" py-5 relative group font-medium bg-white text-violet-700 border-violet-700 border-2">
              <span class="absolute top-0 right-0 flex w-0 h-full mb-0 transition-all duration-400 ease-out transform translate-x-0 bg-violet-700 group-hover:w-full opacity-100"></span>
              <span class="relative group-hover:text-white text-lg">
                Find Your Ride
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
