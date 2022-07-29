import React from "react";

const TimeLineItems = ({ time, content }: any) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-4 h-4 bg-orange-500 rounded-full mt-1.5 -left-2 border-4 border-white"></div>
      <time className=" md:text-base font-medium">{time}</time>
      <div className="mb-4 text-sm md:text-base font-normal text-gray-500">{content}</div>
    </li>
  );
};

export default TimeLineItems;
