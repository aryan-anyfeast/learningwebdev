import React, { useState } from "react";
import anyFeastIcon from './assets/images/AnyFeast.png';
import PauseOnHover from "./PauseOnHover";
import { FaMicrophone, FaMicrophoneAlt, FaMicrophoneAltSlash, FaMicrophoneSlash, FaSearch, FaSearchLocation } from 'react-icons/fa'; // Importing icons for search and microphone
import { HiOutlineMicrophone } from 'react-icons/hi'; // Import outline version of the microphone
import UserCircle3 from './assets/images/UserCircle3.png';
import locationmap from './assets/images/locationmap.png';
import downarrow from './assets/images/downarrow.png';
import CaretCircleRight from './assets/images/CaretCircleRight.png';
import List from './assets/images/List.png';
import Vegetables from './assets/images/Vegetables.png';
import Fruits from './assets/images/Fruits.png';
import Meat from './assets/images/Meat.png';
import Dairy from './assets/images/Dairy.png';
import ProductItem from "./relatedproducts";
import FruitTrial from "./FruitsTrial";
import DelightReceipe from "./Delight";



const ResponsiveShop: React.FC = () => {
  
  return (
    <div className="font-dm-sans px-2 py-2 max-w-md mx-auto">
      {/* AnyFeast App Header */}
      <div className="flex justify-between items-center p-4 rounded-lg mb-2">
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
      <div className="flex items-center justify-between  mb-4">
        <img src={locationmap} className="size-6 ml-3" alt="locationmap" />
          <div className="text-gray-700  text-sm">
            Bangalore, Siri Anjaneya Temple..
          </div>
          <img src={downarrow} className="w-5 h-3 " alt="downarrow" />
          <div className="flex items-center space-x-1">
          <img src={UserCircle3} className="size-6" alt="UserCircle3" />
          <img src={List} className="size-8" alt="List" />
          </div>
        </div>
      <div className="px-4 flex mb-8">
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
    
    <div className="flex px-5 justify-between items-center mb-4">
  <span className="text-black text-[18px] md:text-[24px] font-medium">
    Featured Brands
  </span>
  <a href="#">
    <div className="flex items-center cursor-pointer">
      <span className="text-[#C30F16] text-[18px] md:text-[24px] font-medium mr-2">
        View All
      </span>
      <img
        src={CaretCircleRight}
        className="h-6 md:h-6" 
        alt="Caret Icon"
      />
    </div>
    <div className="h-[2px] bg-[#C30F16] mt-1 w-full" />
  </a>
</div>
      <PauseOnHover/>
      <h2 className="px-5 mt-14 mb-3 text-lg font-semibold">
  Shop Unique Ingredients by Cuisine
</h2>
<div className="flex px-5 justify-between items-center mb-7">
  <span className="text-black text-[18px] md:text-[24px] font-medium">
    Categories
  </span>
  <a href="#">
    <div className="flex items-center cursor-pointer">
      <span className="text-[#C30F16] text-[18px] md:text-[24px] font-medium mr-2">
        View All
      </span>
      <img
        src={CaretCircleRight}
        className="h-6 md:h-6" 
        alt="Caret Icon"
      />
    </div>
    <div className="h-[2px] bg-[#C30F16] mt-1 w-full" />
  </a>
</div>


<div className="flex justify-around mb-10">
  <div className="text-center">
    <img src={Fruits} alt="Fruits" className="h-20 w-20" />
    <p className="text-gray-700 mt-2">Fruits</p>
  </div>
  <div className="text-center">
    <img src={Vegetables} alt="Vegetables" className="h-20 w-20" />
    <p className="text-gray-700 mt-2">Vegetables</p>
  </div>
  <div className="text-center">
    <img src={Dairy} alt="Dairy" className="h-20 w-20" />
    <p className="text-gray-700 mt-2">Dairy</p>
  </div>
  <div className="text-center">
    <img src={Meat} alt="Meat" className="h-20 w-20" />
    <p className="text-gray-700 mt-2">Meat</p>
  </div>
</div>


<div className="flex px-5 mt-16 justify-between items-center mb-4">
  <span className="text-black text-[18px] md:text-[24px] font-bold">
    Mega Sale Upto 50%
  </span>
  <a href="#">
    <div className="flex items-center cursor-pointer">
      <span className="text-[#C30F16] text-[18px] md:text-[24px] font-medium mr-2">
        View All
      </span>
      <img
        src={CaretCircleRight}
        className="h-6 md:h-6" 
        alt="Caret Icon"
      />
    </div>
    <div className="h-[2px] bg-[#C30F16] mt-1 w-full" />
  </a>
</div>

<ProductItem/>

<div className="flex px-5 justify-between items-center mt-12 mb-4">
  <span className="text-black text-[18px] md:text-[24px] font-medium">
    Exotic Vegetables
  </span>
  <a href="#">
    <div className="flex items-center cursor-pointer">
      <span className="text-[#C30F16] text-[18px] md:text-[24px] font-medium mr-2">
        View All
      </span>
      <img
        src={CaretCircleRight}
        className="h-6 md:h-6" 
        alt="Caret Icon"
      />
    </div>
    <div className="h-[2px] bg-[#C30F16] mt-1 w-full" />
  </a>
</div>

<ProductItem/>

<div className="flex px-5 justify-between items-center mt-12 mb-4">
  <span className="text-black text-[18px] md:text-[24px] font-medium">
    Fruits
  </span>
  <a href="#">
    <div className="flex items-center cursor-pointer">
      <span className="text-[#C30F16] text-[18px] md:text-[24px] font-medium mr-2">
        View All
      </span>
      <img
        src={CaretCircleRight}
        className="h-6 md:h-6" 
        alt="Caret Icon"
      />
    </div>
    <div className="h-[2px] bg-[#C30F16] mt-1 w-full" />
  </a>
</div>

<ProductItem/>

<div className="h-7"></div>

<DelightReceipe/>

<div className="flex px-5 justify-between items-center mt-12 mb-4">
  <span className="text-black text-[18px] md:text-[24px] font-medium">
    Snacks
  </span>
  <a href="#">
    <div className="flex items-center cursor-pointer">
      <span className="text-[#C30F16] text-[18px] md:text-[24px] font-medium mr-2">
        View All
      </span>
      <img
        src={CaretCircleRight}
        className="h-6 md:h-6" 
        alt="Caret Icon"
      />
    </div>
    <div className="h-[2px] bg-[#C30F16] mt-1 w-full" />
  </a>
</div>

<ProductItem/>


    </div>
  );
};

export default ResponsiveShop;
