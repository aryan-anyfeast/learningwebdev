import React, { useState } from "react";
import Delight from "./assets/images/delight.png";
import Delight1 from "./assets/images/delight1.png";
import Delight2 from "./assets/images/delight2.png";
import Delight3 from "./assets/images/delight3.png";
import Delight4 from "./assets/images/delight4.png";
import Delight5 from "./assets/images/delight5.png";
import Delight6 from "./assets/images/delight6.png";
import Right from './assets/images/CaretCircleRight.png';

const categories = [
  { name: "Breakfast", img: Delight },
  { name: "Lunch", img: Delight1 },
  { name: "Dinner", img: Delight2 },
  { name: "Snacks", img: Delight3 },
  { name: "Dessert", img: Delight4 },
  { name: "Salad", img: Delight5 },
  { name: "Soups", img: Delight6 },
  { name: "Drinks", img: Delight },
  { name: "Shake", img: Delight1 },
];

const DelightReceipe: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState("Lunch");
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 8;

  const handleLeftClick = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleRightClick = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, categories.length - itemsToShow)
    );
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedRecipe(categoryName);
  };

  return (
    <div>
      {/* Apply DM Sans to the main title */}
      <h2 className="px-5 mt-7 mb-3 text-lg font-semibold font-dm-sans">
        Daily Delight Recipe Kit
      </h2>

      {/* Dynamic Title Based on Selected Recipe */}
      <div className="flex px-5 justify-between items-center mb-3">
        <span className="text-black text-[18px] md:text-[24px] font-medium font-dm-sans">
          {selectedRecipe} Recipes
        </span>
        <a href="#">
          <div className="flex items-center cursor-pointer">
            <span className="text-[#C30F16] text-[18px] md:text-[24px] font-medium mr-2 font-dm-sans">
              View All
            </span>
            <img
              src={Right}
              className="h-6 md:h-6"
              alt="Caret Icon"
            />
          </div>
          <div className="h-[2px] bg-[#C30F16] mt-1 w-full" />
        </a>
      </div>

      {/* Recipe Categories */}
      <div className="flex justify-between items-center space-x-4 overflow-x-scroll scrollbar-hide px-5">
        {categories
          .slice(startIndex, startIndex + itemsToShow)
          .map((category) => (
            <div
              key={category.name}
              className="flex-shrink-0 font-sans text-center w-24 md:w-36 cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}  
            >
              <img
                src={category.img}
                alt={category.name}
                className="object-cover mt-2 w-full h-24 md:h-36"
              />
              <button
                className={`text-sm md:text-lg mt-2 font-dm-sans ${selectedRecipe === category.name ? "text-[#C30F16] pb-1" : ""
                  }`}
              >
                {category.name}
              </button>
              <div
                className={`${selectedRecipe === category.name
                  ? "h-1 rounded bg-[#C30F16] mx-7"
                  : ""
                  }`}
              ></div>
            </div>
          ))}
      </div>

      {selectedRecipe && <></>}
    </div>
  );
};

export default DelightReceipe;
