import React, { useState } from "react";
import ResponsivePopup from './ResponsivePopupProps'; // Import the popup
import one from './assets/images/one.png';
import two from './assets/images/two.png';
import three from './assets/images/three.png';
import four from './assets/images/four.png';
import five from './assets/images/five.png';
import six from './assets/images/six.png';
import anyFeastIcon from './assets/images/AnyFeast.png';
import arrowIcon from './assets/images/ArrowIcon.png';
import './app.css'; // Ensure this is correctly imported


const ResponsiveRefund: React.FC = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReason(event.target.value);
  };

  const handleConfirmClick = () => {
    setShowPopup(true); // Show popup on Confirm click
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close popup
  };

  return (
    <div className="font-dm-sans px-4 py-6 max-w-md mx-auto">
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

      {/* Back button with Arrow */}
      <button className="text-xl mb-4">
        <img src={arrowIcon} alt="Back" className="h-6 w-6" />
      </button>

      {/* Active Order Header */}
      <h2 className="text-lg font-bold text-red-600">Active Order</h2>

      <div className="h-5"></div>

      {/* Order Details */}
      <div className="mt-2 ml-2 space-y-2">
        <p className="text-[14px] text-black font-semibold">Arriving By Today</p>
        <p className="text-[14px] text-[#313131]">Order Number: #00007023</p>
        <p className="text-[14px] text-[#313131] font-semibold">Total ₹800</p>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Product Images */}
      <div className="flex justify-between px-2 space-x-2">
        <img src={one} alt="Item 1" className="h-12 w-12 object-cover" />
        <img src={two} alt="Item 2" className="h-12 w-12 object-cover" />
        <img src={three} alt="Item 3" className="h-12 w-12 object-cover" />
        <img src={four} alt="Item 4" className="h-12 w-12 object-cover" />
        <img src={five} alt="Item 5" className="h-12 w-12 object-cover" />
        <img src={six} alt="Item 6" className="h-12 w-12 object-cover" />
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Reason for Cancellation */}
      <div className="mt-6">
        <h3 className="text-md font-bold">Reason for Cancellation</h3>
        <p className="text-sm text-gray-500 mb-4">
          Please tell us the correct reason for cancellation. This information is only used to improve our service.
        </p>

        <hr className="border-gray-300 my-4" />

        {/* Select Reason */}
        <p className="font-semibold text-sm mb-2 py-2">Select Reason</p>
        <div className="space-y-5">
        

<label className="flex items-center">
  <input
    type="radio"
    name="reason"
    value="Ordered by mistake"
    checked={selectedReason === "Ordered by mistake"}
    onChange={handleReasonChange}
    className="myradio h-4 w-4" // Apply custom radio button class
  />
  <span className="ml-2 text-sm">Ordered by mistake</span>
</label>

<label className="flex items-center">
  <input
    type="radio"
    name="reason"
    value="Want to change product"
    checked={selectedReason === "Want to change product"}
    onChange={handleReasonChange}
    className="myradio h-4 w-4" // Apply custom radio button class
  />
  <span className="ml-2 text-sm">Want to change product</span>
</label>

<label className="flex items-center">
  <input
    type="radio"
    name="reason"
    value="Delayed Delivery Cancellation"
    checked={selectedReason === "Delayed Delivery Cancellation"}
    onChange={handleReasonChange}
    className="myradio h-4 w-4" // Apply custom radio button class
  />
  <span className="ml-2 text-sm">Delayed Delivery Cancellation</span>
</label>

<label className="flex items-center">
  <input
    type="radio"
    name="reason"
    value="Duplicate Order"
    checked={selectedReason === "Duplicate Order"}
    onChange={handleReasonChange}
    className="myradio h-4 w-4" // Apply custom radio button class
  />
  <span className="ml-2 text-sm">Duplicate Order</span>
</label>

        </div>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Refund Amount and Confirm Button */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Refund Amount</p>
          <p className="text-lg">₹800</p>
        </div>
        <button
          className="bg-[#C93B3B] text-white py-3 px-4 rounded-lg flex items-center justify-between w-1/2"
          onClick={handleConfirmClick}
        >
          <span>Cancel</span>
          <span className="ml-auto">&rarr;</span>
        </button>
      </div>

      {/* Show popup on confirm */}
      {showPopup && <ResponsivePopup onClose={handleClosePopup} />}
    </div>
  );
};

export default ResponsiveRefund;
