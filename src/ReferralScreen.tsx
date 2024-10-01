// components/Referral.tsx
import React from "react";
import Referral1 from './assets/images/Referral1.png'; // Adjust the path based on your project structure
import referralasset1 from './assets/images/ref1.png'; // Replace this path with the actual location of the image
import referralasset2 from './assets/images/ref2.png'; // Adjust this path
import referralasset3 from './assets/images/ref3.png'; // Adjust this path

const Referral = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-2 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Sample Navbar */}
      <nav className="bg-white w-full px-6 py-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">AnyFeast</h1>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-700 cursor-pointer">Home</li>
            <li className="hover:text-gray-700 cursor-pointer">Shop</li>
            <li className="hover:text-gray-700 cursor-pointer">About Us</li>
            <li className="hover:text-gray-700 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Referral Section */}
      <div className="w-full max-w-xl mt-10 text-center">
        <div className="flex justify-center  items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Invite Friends to AnyFeast</h2>
          <img
            src={Referral1}
            alt="Referral Illustration"
            className="size-24 ml-4"
          />
        </div>

        <div className="bg-[#313131] text-white text-sm font-semibold py-3 px-4 mb-0">
          Already <span className="font-bold">800</span> customers shared this offer with friends.
        </div>

        <div className="bg-[#F5F7F2] py-4 px-4">
          <p className="text-[#313131] text-[18px] mb-4">
            Get ₹<span className="font-bold text-[24px]">500</span> credit for every friend who places their first order.
          </p>
          <p className="text-[#313131] font-bold text-md mb-6">
            Share the love and enjoy the feast together
          </p>

          <ul className="text-gray-600 text-left space-y-4 mb-6">
            <li className="flex items-center">
              <img src={referralasset1} alt="Invite Icon" className="size-9 mr-2" />
              Invite your friends to AnyFeast.
            </li>
            <li className="flex items-center">
              <img src={referralasset2} alt="Discount Icon" className="size-9 mr-2" />
              Your friends get ₹200 off their first purchase.
            </li>
            <li className="flex items-center">
              <img src={referralasset3} alt="Credit Icon" className="size-9 mr-2" />
              When your friend makes a purchase using your referral code, you get ₹500 credited to your account.
            </li>
          </ul>

          <button className="bg-[#0B6E27] text-white text-sm shadow-gray-500 shadow-md font-semibold py-3 px-28 rounded-sm hover:bg-green-700 transition duration-300">
            Start Referring
          </button>
          <div className="h-10"></div>
        </div>
      </div>

      <div className="h-16"></div>
    </div>
  );
};

export default Referral;
