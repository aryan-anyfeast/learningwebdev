import React from "react";
import "./App.css";
import bnatural from './assets/images/bnatural.png';
import image46 from './assets/images/image 46.png';
import image47 from './assets/images/image 47.png';
import image48 from './assets/images/image 48.png';
import image49 from './assets/images/image 49.png';

const ProductItem = () => {
  return (
    <div>
      {/* cardss pg */}
      <div className="flex space-x-10">
        {/* card 1 */}
        <div className="rounded-2xl border border-[#EDEDED] shadow-none relative overflow-hidden">
          {/* discount */}
          <div className="absolute top-0 right-0 bg-[#54B22C] py-1 px-3 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
            <span className="font-semibold text-center text-white text-[14px]">
              50% <br />
              OFF
            </span>
          </div>
          {/* image */}
          <div className="bg-[#F3F9FB] px-6 flex flex-col items-center">
            <img
              src={bnatural}
              alt="Product Image"
              className="w-[190px] object-cover"
            />
          </div>
          {/* border */}
          <div className="border-t border-[#EDEDED]" />
          {/* product name */}
          <div className="bg-white p-3">
            <span className="text-[15px] text-[#222222]">
              B Natural Mixed Fruit Juice
            </span>
            <br />
            <span className="text-[15px] text-[#54B22C]">
              (Buy 1 Get 1 FREE)
            </span>
            <div className="border-t border-[#EDEDED] my-2" />
            {/* price */}
            <div className="flex justify-between">
              <div>
                <span className="text-[18px] font-medium text-[#3BB77E] mr-2">
                  ₹100
                </span>
                <span className="text-[18px] font-medium text-[#ADADAD] line-through ml-2">
                  ₹110
                </span>
              </div>
              {/* button */}
              <div>
                <button className="py-1 px-4 border border-[#0B6E27] rounded-md font-medium text-[14px] text-[#0B6E27] hover:bg-[#0B6E27] hover:text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* card 2 */}
        <div className="rounded-2xl border border-[#EDEDED] shadow-none relative overflow-hidden">
          {/* discount */}
          <div className="absolute top-0 right-0 bg-[#54B22C] py-1 px-3 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
            <span className="font-semibold text-center text-white text-[14px]">
              40% <br />
              OFF
            </span>
          </div>
          {/* image */}
          <div className="bg-[#F3F9FB] px-6 flex flex-col items-center">
            <img
              src={image46}
              alt="Product Image"
              className="w-[190px] object-cover"
            />
          </div>
          {/* border */}
          <div className="border-t border-[#EDEDED]" />
          {/* product name */}
          <div className="bg-white p-3">
            <span className="text-[15px] text-[#222222]">
              Hen Fruit White Protein
            </span>
            <br />
            <span className="text-[15px]">Rich Eggs 10 Pc</span>
            <div className="border-t border-[#EDEDED] my-2" />
            {/* price */}
            <div className="flex justify-between">
              <div>
                <span className="text-[18px] font-medium text-[#3BB77E] mr-2">
                  ₹110
                </span>
                <span className="text-[18px] font-medium text-[#ADADAD] line-through ml-2">
                  ₹120
                </span>
              </div>
              {/* button */}
              <div>
                <button className="py-1 px-4 border border-[#0B6E27] rounded-md font-medium text-[14px] text-[#0B6E27] hover:bg-[#0B6E27] hover:text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* card 3 */}
        <div className="rounded-2xl border border-[#EDEDED] shadow-none relative overflow-hidden">
          {/* discount */}
          <div className="absolute top-0 right-0 bg-[#54B22C] py-1 px-3 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
            <span className="font-semibold text-center text-white text-[14px]">
              24% <br />
              OFF
            </span>
          </div>
          {/* image */}
          <div className="bg-[#F3F9FB] px-6 flex flex-col items-center">
            <img
              src={image47}
              alt="Product Image"
              className="w-[190px] object-cover"
            />
          </div>
          {/* border */}
          <div className="border-t border-[#EDEDED]" />
          {/* product name */}
          <div className="bg-white p-3">
            <span className="text-[15px] text-[#222222]">Go Cheese Slices</span>
            <br />
            <span className="text-[15px]">200 g</span>
            <div className="border-t border-[#EDEDED] my-2" />
            {/* price */}
            <div className="flex justify-between">
              <div>
                <span className="text-[18px] font-medium text-[#3BB77E] mr-2">
                  ₹140
                </span>
                <span className="text-[18px] font-medium text-[#ADADAD] line-through ml-2">
                  ₹160
                </span>
              </div>
              {/* button */}
              <div>
                <button className="py-1 px-4 border border-[#0B6E27] rounded-md font-medium text-[14px] text-[#0B6E27] hover:bg-[#0B6E27] hover:text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* card 4 */}
        <div className="rounded-2xl border border-[#EDEDED] shadow-none relative overflow-hidden">
          {/* discount */}
          <div className="absolute top-0 right-0 bg-[#54B22C] py-1 px-3 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
            <span className="font-semibold text-center text-white text-[14px]">
              41% <br />
              OFF
            </span>
          </div>
          {/* image */}
          <div className="bg-[#F3F9FB] px-6 flex flex-col items-center">
            <img
              src={image48}
              alt="Product Image"
              className="w-[190px] object-cover"
            />
          </div>
          {/* border */}
          <div className="border-t border-[#EDEDED]" />
          {/* product name */}
          <div className="bg-white p-3">
            <span className="text-[15px] text-[#222222]">
              Soan Papdi by Charlie's
            </span>
            <br />
            <span className="text-[15px]">200 g</span>
            <div className="border-t border-[#EDEDED] my-2" />
            {/* price */}
            <div className="flex justify-between">
              <div>
                <span className="text-[18px] font-medium text-[#3BB77E] mr-2">
                  ₹51
                </span>
                <span className="text-[18px] font-medium text-[#ADADAD] line-through ml-2">
                  ₹96
                </span>
              </div>
              {/* button */}
              <div>
                <button className="py-1 px-4 border border-[#0B6E27] rounded-md font-medium text-[14px] text-[#0B6E27] hover:bg-[#0B6E27] hover:text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* card 5 */}
        <div className="rounded-2xl border border-[#EDEDED] shadow-none relative overflow-hidden">
          {/* discount */}
          <div className="absolute top-0 right-0 bg-[#54B22C] py-1 px-3 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
            <span className="font-semibold text-center text-white text-[14px]">
              20% <br />
              OFF
            </span>
          </div>
          {/* image */}
          <div className="bg-[#F3F9FB] px-6 flex flex-col items-center">
            <img
              src={image49}
              alt="Product Image"
              className="w-[190px] object-cover"
            />
          </div>
          {/* border */}
          <div className="border-t border-[#EDEDED]" />
          {/* product name */}
          <div className="bg-white p-3">
            <span className="text-[15px] text-[#222222]">
              Cremica Chocolate Thicker
            </span>
            <br />
            <span className="text-[15px]">Syrup</span>
            <div className="border-t border-[#EDEDED] my-2" />
            {/* price */}
            <div className="flex justify-between">
              <div>
                <span className="text-[18px] font-medium text-[#3BB77E] mr-2">
                  ₹194
                </span>
                <span className="text-[18px] font-medium text-[#ADADAD] line-through ml-2">
                  ₹225
                </span>
              </div>
              {/* button */}
              <div>
                <button className="py-1 px-4 border border-[#0B6E27] rounded-md font-medium text-[14px] text-[#0B6E27] hover:bg-[#0B6E27] hover:text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
