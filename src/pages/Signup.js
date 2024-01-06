import React from "react";
import Navbar from "../components/Navbar";
const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex justify-center min-h-screen items-center px-4 font-Nunito text-violet-700">
        <div className="flex flex-col gap-5 max-w-4xl">
          <p className="md:text-6xl font-bold text-4xl">
            How do you plan to make use of our bike rental services?
          </p>
          <p className="md:text-2xl font-medium text-gray-500 text-lg">
            We'll tailor your setup experience to meet your individual
            preferences and needs.
          </p>
          <div className="flex gap-3 md:flex-row flex-col">
            <button className=" border-2 p-4 md:p-5 bg-gray-200 hover:border-gray-600 font-semibold">
              I'm interested in offering my bike for rent
            </button>
            <button className=" border-2 p-4 md:p-5 bg-gray-200 hover:border-gray-600 font-semibold">
              I'm looking to rent a bike.
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
