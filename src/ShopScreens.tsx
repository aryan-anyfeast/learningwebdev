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
//import ProductItem from './ProductItem';
import ProductItems from './ProductItems';
import FruitTrial from './FruitsTrial';
import SnackTrial from './SnacksTrial';

const ShopScreens: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-dm-sans">

      {/* Featured Brands Section */}
      <div className="flex flex-col items-center my-8 ">
        <div className="flex justify-between w-full px-16">
          <div>
            <p className="font-semibold mt-2 text-[24px] text-[#666666]">
              Featured Brands
              <div>
                <hr className="border-red-600 my-2 border-2 rounded-lg" />
              </div>
            </p>
          </div>
          <div className="flex flex-col items-start cursor-pointer">
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
           <PauseOnHover/>
            {/* <div className="flex flex-wrap justify-center ">
              <div className="w-1/4 m-4">
                <img src={OfferCard1} alt="Offer Card 1" className="w-full h-auto object-fill rounded-lg" />
              </div>
              <div className="w-1/4 m-4">
                <img src={OfferCard2} alt="Offer Card 2" className="w-full h-auto object-fill rounded-lg" />
              </div>
              <div className="w-1/4 m-4">
                <img src={OfferCard3} alt="Offer Card 3" className="w-full h-auto object-fill rounded-lg" />
              </div>

            </div> */}
          </div>
        </div>

      <div className="h-6"></div>

      {/* Shop by Cuisine Section */}
      <div className="flex flex-col items-center my-8 font-dm-sans">
        <div className="flex justify-between w-full px-16">
          <div>
            <h2 className="text-[28px] font-semibold">Shop Unique Ingredients by Cuisine</h2>
            <p className="text-lg text-[#212121]  text-[24px] mt-2">Categories</p>
          </div>
          <div className="flex flex-col items-start cursor-pointer"> {/* Add cursor-pointer here */}
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

        <div className="flex justify-between w-full mt-4 px-16 space-x-4">
          {/* Cuisine Cards */}
          {[
            { image: Italian, name: "Italian" },
            { image: French, name: "French" },
            { image: Chinese, name: "Chinese" },
            { image: Japanese, name: "Japanese" },
            { image: Mexican, name: "Mexican" },
            { image: American, name: "American" },
            { image: Korean, name: "Korean" },
          ].map((cuisine, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={cuisine.image} alt={`${cuisine.name} Cuisine`} className="w-full h-auto object-cover rounded-lg" />
              <p className="mt-2 text-center text-[22px] text-[#424242]">{cuisine.name}</p>
            </div>
          ))}
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
          <div className="flex flex-col items-start cursor-pointer">
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
        <ProductItems/>
        
      </div>


      <div className="h-24"></div>
      
        
      
      

            {/* Exotic Vegetables Section */}
      <div className="flex flex-col items-center my-8 font-dm-sans">
        <div className="flex justify-between w-full px-16">
          <div>
            <p className="  text-[24px] text-[#212121] mt-2">Exotic Vegetables</p>
          </div>
          <div className="flex flex-col items-start ">
            <div className="flex items-center ">
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

        <div className="flex justify-between w-full mt-4 px-16 space-x-4">
          {/* Exotic Vegetable Cards */}
          {[
            { image: ExoticVegetable1, name: "B Natural Mixed Fruit Juice", price: "₹100", discountPrice: "₹110" },
            { image: ExoticVegetable2, name: "Hen Fruit White Protein Eggs", price: "₹140", discountPrice: "₹160" },
            { image: ExoticVegetable3, name: "Go Cheese Slices", price: "₹140", discountPrice: "₹160" },
            { image: ExoticVegetable4, name: "Soan Papdi by Charlie's", price: "₹51", discountPrice: "₹96" },
            { image: ExoticVegetable5, name: "Cremica Chocolate Thicker Syrup", price: "₹194", discountPrice: "₹225" },
          ].map((veg, index) => (
            <div key={index} className="bg-[#F3F9FB] p-4 rounded-lg flex flex-col items-center shadow-lg w-[240px]">
              <img src={veg.image} alt={veg.name} className="w-full h-[150px] object-contain" />
              <p className="text-center mt-2 font-medium text-[20px]">{veg.name}</p>
              <p className="mt-1 text-center text-[#FF0000] text-[20px]">{veg.price}</p>
              <p className="text-gray-500 line-through text-[16px]">{veg.discountPrice}</p>
              <button className="bg-[#C30F16] hover:bg-red-600 text-white py-2 px-4 mt-4 rounded-lg">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="h-12"></div>
      <div className='px-16 '>
        {/* related products */}
        <div className="flex justify-between mb-10">
          <span className="text-black text-[24px] font-medium">
            Fruits Vegetables
          </span>
          <a href="#">
          <div className="flex flex-col items-start cursor-pointer">
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
        <FruitTrial/> 
      </div>
      <div className="h-12"></div>
        <div className='px-16 '>
        {/* related products */}
        <div className="flex justify-between mb-10">
          <span className="text-black text-[24px] font-medium">
            Snacks
          </span>
          <a href="#">
          <div className="flex flex-col items-start cursor-pointer">
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
        <SnackTrial/>
        
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default ShopScreens;
