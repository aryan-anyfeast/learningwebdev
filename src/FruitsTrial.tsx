import React from "react";
import "./App.css";
import fruits1 from './assets/images/fruits1.png';
import fruits2 from './assets/images/fruits2.png';
import fruits3 from './assets/images/fruits3.png';
import fruits4 from './assets/images/fruits4.png';
import fruits5 from './assets/images/fruits5.png';


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  imageUrl: string;
}


const products: Product[] = [
  {
    id: 1,
    name: "B Natural Mixed Fruit Juice",
    description: "(Buy 1 Get 1 FREE)",
    price: 100,
    originalPrice: 110,
    discount: 50,
    imageUrl: fruits1,
  },
  {
    id: 2,
    name: "Hen Fruit White Protein",
    description: "Rich Eggs 10 Pc",
    price: 110,
    originalPrice: 120,
    discount: 40,
    imageUrl: fruits2,
  },
  {
    id: 3,
    name: "Go Cheese Slices",
    description: "200 g",
    price: 140,
    originalPrice: 160,
    discount: 24,
    imageUrl: fruits3,
  },
  {
    id: 4,
    name: "Soan Papdi by Charlie's",
    description: "200 g",
    price: 51,
    originalPrice: 96,
    discount: 41,
    imageUrl: fruits4,
  },
  {
    id: 5,
    name: "Cremica Chocolate Thicker",
    description: "Syrup",
    price: 194,
    originalPrice: 225,
    discount: 20,
    imageUrl: fruits5,
  },
];


const FruitTrial: React.FC = () => {
  return (
    <div>
      {/* cardss pg */}
      <div className="flex space-x-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-[#EDEDED] shadow-none relative overflow-hidden"
          >
            {/* discount */}
            {/* <div className="absolute top-0 right-0 bg-[#54B22C] py-1 px-3 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center">
              <span className="font-semibold text-center text-white text-[14px]">
                {product.discount}% <br />
                OFF
              </span>
            </div> */}
            {/* image */}
            <div className="bg-[#F3F9FB] px-6 flex flex-col items-center">
              <img
                src={product.imageUrl}
                alt="Product"
                className="w-[190px] object-cover"
              />
            </div>
            {/* border */}
            <div className="border-t border-[#EDEDED]" />
            {/* product name */}
            <div className="bg-white p-3">
              <span className="text-[15px] text-[#222222]">{product.name}</span>
              <br />
              <span className="text-[15px]">
                {product.description}
              </span>
              <div className="border-t border-[#EDEDED] my-2" />
              {/* price */}
              <div className="flex justify-between">
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


export default FruitTrial;


