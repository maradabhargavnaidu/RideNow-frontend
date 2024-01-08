import React from "react";

// import toast, { Toaster } from "react-hot-toast";
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
            <div className="flex w-full gap-2">
              <input
                type="date"
                placeholder="Enter Drop Location"
                className="h-16 p-2 text-violet-700 accent-transparent flex-1 bg-gray-300"
              />
              <input
                type="time"
                placeholder="Enter PickUp and Drop Time"
                className="h-16 p-2 text-violet-700 accent-transparent  flex-1 bg-gray-300"
                min="09:00"
                max="18:00"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="date"
                placeholder="Enter Drop Location"
                className="h-16 p-2 text-violet-700 accent-transparent  bg-gray-300  flex-1"
              />
              <input
                type="time"
                placeholder="Enter PickUp and Drop Time"
                className="h-16 p-2 text-violet-700 accent-transparent flex-1 bg-gray-300"
                min="09:00"
                max="18:00"
              />
            </div>

            <button className="sm:text-lg text-xl font-Nunito py-5 font-extrabold border-2 bg-violet-700  duration-700 transition-all hover:bg-white hover:text-violet-700 hover:border-violet-700">
              Find Your Ride
            </button>
            {/* <button className=" py-5 relative group font-extrabold bg-white text-violet-700 border-violet-700 border-2 font-Nunito">
              <span className="absolute top-0 right-0 flex w-0 h-full mb-0 transition-all duration-400 ease-out transform translate-x-0 bg-violet-700 group-hover:w-full opacity-100"></span>
              <span className="relative group-hover:text-white text-lg">
                Find Your Ride
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
