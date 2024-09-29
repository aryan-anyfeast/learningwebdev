import React from "react";
import "./App.css";
import bnatural from './assets/images/bnatural.png';
import eggs from './assets/images/eggs.png';
import soanpapdi from './assets/images/soanpapdi.png';
import cremicasyrup from './assets/images/cremicasyrup.png';
import gocheese from './assets/images/gocheese.png';

interface Product {
  id: number;
  name: string;
  description: string;
  bogo: string;
  price: number;
  originalPrice: number;
  discount: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "B Natural Mixed Fruit Juice",
    description: "",
    bogo:"(Buy 1 Get 1 FREE)",
    price: 100,
    originalPrice: 110,
    discount: 50,
    imageUrl: bnatural,
  },
  {
    id: 2,
    name: "Hen Fruit White Protein",
    description: "Rich Eggs 10 Pc",
    price: 110,
    bogo:"",
    originalPrice: 120,
    discount: 40,
    imageUrl: eggs,
  },
  {
    id: 3,
    name: "Go Cheese Slices",
    description: "200 g",
    bogo:"",
    price: 140,
    originalPrice: 160,
    discount: 24,
    imageUrl: gocheese,
  },
  {
    id: 4,
    name: "Soan Papdi by Charlie's",
    description: "200 g",
    bogo:"",
    price: 51,
    originalPrice: 96,
    discount: 41,
    imageUrl: soanpapdi,
  },
  {
    id: 5,
    name: "Cremica Chocolate Thicker",
    description: "Syrup",
    bogo:"",
    price: 194,
    originalPrice: 225,
    discount: 20,
    imageUrl: cremicasyrup,
  },
];

const ProductItems: React.FC = () => {
  return (
    <div>
      {/* Product cards */}
      <div className="flex space-x-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-[#EDEDED] shadow-none relative overflow-hidden flex flex-col justify-between" // Ensure proper alignment
          >
            {/* discount */}
            <div className="absolute top-0 right-0 bg-[#54B22C] py-1 px-3 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
              <span className="font-semibold text-center text-white text-[14px]">
                {product.discount}% <br />
                OFF
              </span>
            </div>
            {/* image */}
            <div className="bg-[#F3F9FB] px-6 py-4 flex flex-col items-center h-[135px]"> {/* Fixed height for consistent image size */}
              <img
                src={product.imageUrl}
                alt="Product"
                className="w-[150px] h-[150px] object-top" // Fixed width and height with object-contain
              />
            </div>
            {/* border */}
            <div className="border-t border-[#EDEDED]" />
            {/* product name */}
            <div className="bg-white p-3 flex-grow"> {/* Use flex-grow to ensure the Add button stays at the bottom */}
              <span className="text-[15px] text-[#222222]">{product.name}</span>
              <br />
              <span className="text-[15px] text-[#3BB77E]">
                {product.bogo}
              </span>
              <span className="text-[15px]">
                {product.description}
              </span>
              <div className="border-t border-[#EDEDED] my-2" />
              {/* price */}
              <div className="flex justify-between items-center"> {/* Align items at the same level */}
                <div>
                  <span className="text-[18px] font-medium text-[#3BB77E] mr-2">
                    ₹{product.price}
                  </span>
                  <span className="text-[18px] font-medium text-[#ADADAD] line-through ml-2">
                    ₹{product.originalPrice}
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
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
