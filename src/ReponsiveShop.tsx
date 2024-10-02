import React, { useState } from "react";
import anyFeastIcon from './assets/images/AnyFeast.png';
import PauseOnHover from "./PauseOnHover";
import { FaMicrophone, FaMicrophoneAlt, FaMicrophoneAltSlash, FaMicrophoneSlash, FaSearch, FaSearchLocation } from 'react-icons/fa'; // Importing icons for search and microphone
import { HiOutlineMicrophone } from 'react-icons/hi'; // Import outline version of the microphone


const ResponsiveShop: React.FC = () => {
  
  return (
    <div className="font-dm-sans px-2 py-4 max-w-md mx-auto">
      {/* AnyFeast App Header */}
      <div className="flex justify-between items-center p-4 rounded-lg mb-6">
        <div className="flex items-center">
          <img src={anyFeastIcon} alt="AnyFeast Logo" className="h-8 w-10 mr-2" />
          <div>
            <p className="font-bold text-gray-900 text-[12px]">AnyFeast, Recipe Kit delivery</p>
            <p className="text-gray-500 text-[10px]">Open in AnyFeast App</p>
          </div>
        </div>
        <button
          className="bg-blue-500  text-[14px] text-white py-1.5 px-6 rounded-full"
          onClick={() => window.open("https://anyfeast-app-link.com", "_blank")}
        >
          OPEN
        </button>
      </div>
      <div className="px-4 flex">
      <div className="flex items-center justify-between bg-transparent border-2 rounded-lg p-2 w-full">
        <FaSearch className="text-[#ABB7C2] mr-2"  size={24}/>
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent outline-none text-gray-900 text-lg"
        />
      </div>
      <div className="flex items-center justify-center ml-2">
        <div className="border-2 border-[#C93B3B] rounded-full p-2">
          <HiOutlineMicrophone className="text-[#C93B3B]" size={25} />
        </div>
      </div>
    </div>

      <PauseOnHover/>

    </div>
  );
};

export default ResponsiveShop;
