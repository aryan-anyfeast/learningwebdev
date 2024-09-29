import React from 'react';
import OfferCard1 from './assets/images/OfferCard1.png';
import OfferCard2 from './assets/images/OfferCard2.png';
import OfferCard3 from './assets/images/OfferCard3.png';
import PauseOnHover from './PauseOnHover'; // Import the slider component
import Italian from './assets/images/Italian.png'; // Cuisine images
import French from './assets/images/French.png';
import Chinese from './assets/images/Chinese.png';
import Japanese from './assets/images/Japanese.png';
import Mexican from './assets/images/Mexican.png';
import American from './assets/images/American.png';
import Korean from './assets/images/Korean.png';
import ExoticVegetable1 from './assets/images/ExoticVegetable1.png'; // Exotic vegetable images
import ExoticVegetable2 from './assets/images/ExoticVegetable2.png';
import ExoticVegetable3 from './assets/images/ExoticVegetable3.png';
import ExoticVegetable4 from './assets/images/ExoticVegetable4.png';
import ExoticVegetable5 from './assets/images/ExoticVegetable5.png';
import CaretCircleRight from './assets/images/CaretCircleRight.png';
import ArrowDown2 from './assets/images/Arrow - Down 2.png';
import ProductItem from './ProductItem';

const ShopScreen = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-dm-sans">

      {/* Featured Brands Section */}
      <div className="flex flex-col items-center my-8 ">
        <div className="flex justify-between w-full px-16">
          <div>
            <p className="text-lg font-semibold mt-2 text-[24px] text-[#666666]">
              Featured Brands
              <div>
                <hr className="border-red-600 my-2 border-2 rounded-lg" />
              </div>
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <span className="text-[#222222] text-[24px] font-medium mr-3">
                View All
              </span>
              <img 
              src={ArrowDown2}
              className='h-6'
                alt="Caret Icon" 
                />
            </div>
          
          </div>
        </div>
        <div className="flex justify-between w-full mt-4 px-16 space-x-4"> {/* Single horizontal row with space between items */}
          <div className="flex flex-wrap justify-center ">
            <div className="w-1/4 m-4">
              <img src={OfferCard1} alt="Offer Card 1" className="w-full h-auto object-fill rounded-lg" />
            </div>
            <div className="w-1/4 m-4">
              <img src={OfferCard2} alt="Offer Card 2" className="w-full h-auto object-fill rounded-lg" />
            </div>
            <div className="w-1/4 m-4">
              <img src={OfferCard3} alt="Offer Card 3" className="w-full h-auto object-fill rounded-lg" />
            </div>

          </div>
        </div>
      </div>

      <div className="h-6"></div>


      {/* Shop by Cuisine Section */}
      <div className="flex flex-col items-center my-8 font-dm-sans">
        <div className="flex justify-between w-full px-16">
          <div>
            <h2 className="text-2xl text-[28px] font-semibold">Shop Unique Ingredients by Cuisine</h2>
            <p className="text-lg text-[#212121]  text-[24px] mt-2">Categories</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <span className="text-[#C30F16] text-[24px] font-medium mr-3">
                View All
              </span>
              <img 
              src={CaretCircleRight}
              className='h-6'
                alt="Caret Icon" 
                />
            </div>
            <div className="w-full h-[2px] bg-[#C30F16] mt-1" />
          </div></div>

        <div className="flex justify-between w-full mt-4 px-16 space-x-4"> {/* Single horizontal row with space between items */}
          <div className="flex flex-col items-center ">
            <img src={Italian} alt="Italian Cuisine" className="w-full h-auto object-cover rounded-lg" />
            <p className="mt-2 text-center text-[22px] text-[#424242] ">Italian</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={French} alt="French Cuisine" className="w-full h-auto object-cover rounded-lg" />
            <p className="mt-2 text-center text-[22px] text-[#424242]">French</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Chinese} alt="Chinese Cuisine" className="w-full h-auto object-cover rounded-lg" />
            <p className="mt-2 text-center text-[22px] text-[#424242]">Chinese</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Japanese} alt="Japanese Cuisine" className="w-full h-auto object-cover rounded-lg" />
            <p className="mt-2 text-center text-[22px] text-[#424242]">Japanese</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Mexican} alt="Mexican Cuisine" className="w-full h-auto object-cover rounded-lg" />
            <p className="mt-2 text-center text-[22px] text-[#424242]">Mexican</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={American} alt="American Cuisine" className="w-full h-auto object-cover rounded-lg" />
            <p className="mt-2 text-center text-[22px] text-[#424242]">American</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Korean} alt="Korean Cuisine" className="w-full h-auto object-cover rounded-lg" />
            <p className="mt-2 text-center text-[22px] text-[#424242]">Korean</p>
          </div>
        </div>
      </div>
     
      <div className='h-6'></div>

      <div className='px-16 '>
        {/* related products */}

        <div className="flex justify-between mb-10">
          <span className="text-black text-[24px] font-medium">
            Mega Sale Upto 50% OFF
          </span>
          <a href="#">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <span className="text-[#C30F16] text-[24px] font-medium mr-3">
                View All
              </span>
              <img 
              src={CaretCircleRight}
              className='h-6'
                alt="Caret Icon" 
                />
            </div>
            <div className="w-full h-[2px] bg-[#C30F16] mt-1" />
          </div>
          </a>
        </div>
        <ProductItem/>
      </div>

      <div className="h-6"></div>

      <div className="flex flex-col items-center my-8 font-dm-sans"> {/* Applying DM Sans font */}
        <div className="flex justify-between w-full px-16">
          <div>
            <p className="text-lg  text-[24px] text-[#212121] font-semibold mt-2">Exotic Vegetables</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <span className="text-[#C30F16] text-[24px] font-medium mr-3">
                View All
              </span>
              <img 
              src={CaretCircleRight}
              className='h-6'
                alt="Caret Icon" 
                />
            </div>
            <div className="w-full h-[2px] bg-[#C30F16] mt-1" />
          </div>
        </div>


        {/* Flexbox container for vegetable cards */}
        <div className="flex justify-between w-full mt-4 px-16 space-x-4">
          {/* Card 1 */}
          <div className="bg-[#F3F9FB] p-4 rounded-lg flex flex-col items-center shadow-lg w-[240px]">
            <img
              src={ExoticVegetable1}
              alt="B Natural Mixed Fruit Juice"
              className="w-full h-[150px] object-contain rounded-t-lg"
            />
            <div className="p-2 w-full text-center">
              <p className="text-md font-semibold">B Natural Mixed Fruit Juice</p>
              <p className="text-sm text-green-600">(Buy 1 Get 1 FREE)</p>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-lg text-green-600 font-bold">₹100</p>
                  <p className="text-sm line-through text-gray-400">₹110</p>
                </div>
                <button className="bg-white border border-green-600 text-green-600 rounded-lg px-4 py-1">Add</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F3F9FB] p-4 rounded-lg flex flex-col items-center shadow-lg w-[240px]">
            <img
              src={ExoticVegetable2}
              alt="Hen Fruit White Protein Eggs"
              className="w-full h-[150px] object-contain rounded-t-lg"
            />
            <div className="p-2 w-full text-center">
              <p className="text-md font-semibold">Hen Fruit White Protein Eggs</p>
              <p className="text-sm text-green-600">(Pack of 10)</p>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-lg text-green-600 font-bold">₹140</p>
                  <p className="text-sm line-through text-gray-400">₹160</p>
                </div>
                <button className="bg-white border border-green-600 text-green-600 rounded-lg px-4 py-1">Add</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F3F9FB] p-4 rounded-lg flex flex-col items-center shadow-lg w-[240px]">
            <img
              src={ExoticVegetable3}
              alt="Go Cheese Slices"
              className="w-full h-[150px] object-contain rounded-t-lg"
            />
            <div className="p-2 w-full text-center">
              <p className="text-md font-semibold">Go Cheese Slices</p>
              <p className="text-sm text-green-600">(200g)</p>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-lg text-green-600 font-bold">₹140</p>
                  <p className="text-sm line-through text-gray-400">₹160</p>
                </div>
                <button className="bg-white border border-green-600 text-green-600 rounded-lg px-4 py-1">Add</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F3F9FB] p-4 rounded-lg flex flex-col items-center shadow-lg w-[240px]">
            <img
              src={ExoticVegetable4}
              alt="Soan Papdi by Charlie's"
              className="w-full h-[150px] object-contain rounded-t-lg"
            />
            <div className="p-2 w-full text-center">
              <p className="text-md font-semibold">Soan Papdi by Charlie's</p>
              <p className="text-sm text-green-600">(200g)</p>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-lg text-green-600 font-bold">₹51</p>
                  <p className="text-sm line-through text-gray-400">₹96</p>
                </div>
                <button className="bg-white border border-green-600 text-green-600 rounded-lg px-4 py-1">Add</button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#F3F9FB]  rounded-lg flex flex-col items-center shadow-lg w-[240px]">
            <img
              src={ExoticVegetable5}
              alt="Cremica Chocolate Thicker Syrup"
              className="w-full h-[150px] object-contain rounded-t-lg"
            />
            <div className=" bg-white p-2 w-full text-center">
              <p className="text-md font-semibold">Cremica Chocolate Thicker Syrup</p>
              <p className="text-sm text-green-600">(200g)</p>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-lg text-green-600 font-bold">₹194</p>
                  <p className="text-sm line-through text-gray-400">₹225</p>
                </div>
                <button className="bg-white border border-green-600 text-green-600 rounded-lg px-4 py-1">Add</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      
      <div className='h-16'></div>
    </div>
  );
};

export default ShopScreen;
