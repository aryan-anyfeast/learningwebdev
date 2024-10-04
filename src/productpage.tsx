import React from "react";
import "./App.css";
import ProductItem from "./relatedproducts";

const ProductPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 overflow-y">
      <div>
       

        {/* related products */}
        <div className="flex flex-wrap justify-between items-center mb-10">
          <span className="text-black text-lg sm:text-[18px] font-medium mb-4 sm:mb-2">
            Mega Sale Upto 50% OFF
          </span>
          <a href="#" className="flex flex-col items-center pb-5">
            <div className="flex items-center">
              <span className="text-[#C30F16] text-md sm:text-[18px] font-medium mr-3">
                View All
              </span>
              <img
                src="CaretCircleRight.png"
                alt="Caret Icon"
                className="w-5 h-5"
              />
            </div>
            <div className="w-full h-[2px] bg-[#C30F16]"/>
          </a>
        </div>
        <ProductItem/>
        <div className="mb-10"/>
      </div>
    </div>
  );
};

export default ProductPage;