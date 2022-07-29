import React, { useEffect } from "react";

const Hero = () => {
  const gradients = [
    "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
    "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
    "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-900",
    "bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",
    "bg-gradient-to-r from-orange-400 via-yellow-300 to-yellow-500",
  ];
  return (
    <div className="w-full h-screen flex flex-col pt-80 font-serif text-center text-7xl lg:text-9xl">
      <div
        className={`text-transparent bg-clip-text ${
          gradients[Math.floor(Math.random() * (5 - 0 + 1) + 0)]
        }`}
      >
        <h1>Think Less</h1>
        <h1>Create More</h1>
      </div>
    </div>
  );
};

export default Hero;
