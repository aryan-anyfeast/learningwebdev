// RefundScreen.jsx
import React, { useState } from 'react';
import ConfirmRefundPopup from './ConfirmRefundPopup';
import one from './assets/images/one.png';
import two from './assets/images/two.png';
import three from './assets/images/three.png';
import four from './assets/images/four.png';
import five from './assets/images/five.png';
import six from './assets/images/six.png';

const RefundScreen = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleConfirm = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Navbar */}
      <nav className="bg-[#C30F16] p-4 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">AnyFeast Sample Navbar</div>
          <ul className="flex space-x-6">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Orders</li>
            <li className="hover:underline cursor-pointer">Profile</li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <div className="bg-[#F9F9F9] px-4 py-16 md:px-20 lg:px-40 rounded-lg shadow-transparent w-full md:w-4/5 lg:w-4/5 mx-auto space-y-6 mt-8 font-dm-sans">
        <div className="flex flex-col space-y-6">
          {/* Active Order section */}
          <div className="rounded-lg space-y-5">
            <h2 className="px-3 text-[#C30F16] text-xl font-bold mb-2">Active Order</h2>
            <div className="bg-[#FFFFFF] space-y-2">
              <div className="h-2"></div>
              <p className="font-bold pl-4">Arriving By Today</p>
              <p className="pl-4">Order Number: # 00007023</p>
              <p className="pl-4">Total ₹800</p>
              <div className="h-2"></div>
            </div>
          </div>

          {/* Scrollable Order Items */}
          <div className="relative w-full max-w-full bg-[#FFFFFF] rounded-lg p-4 md:p-8 shadow-lg">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FFFFFF] rounded-full p-2"
              onClick={() => document.getElementById('scroll-container')?.scrollBy({ left: -120, behavior: 'smooth' })}
            >
              &lt;
            </button>
            <div
              id="scroll-container"
              className="snap-x snap-mandatory overflow-x-auto flex space-x-4 scroll-smooth"
              style={{
                scrollbarWidth: 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
            >
              <div className="snap-center flex-shrink-0">
                <img src={one} alt="taco" className="w-[120px] h-[106px] object-contain" />
              </div>
              <div className="snap-center flex-shrink-0">
                <img src={two} alt="lettuce" className="w-[120px] h-[106px] object-contain" />
              </div>
              <div className="snap-center flex-shrink-0">
                <img src={three} alt="coriander" className="w-[120px] h-[106px] object-contain" />
              </div>
              <div className="snap-center flex-shrink-0">
                <img src={four} alt="cheese" className="w-[120px] h-[106px] object-contain" />
              </div>
              <div className="snap-center flex-shrink-0">
                <img src={five} alt="cream" className="w-[120px] h-[106px] object-contain" />
              </div>
              <div className="snap-center flex-shrink-0">
                <img src={six} alt="salsa" className="w-[120px] h-[106px] object-contain" />
              </div>
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FFFFFF] rounded-full p-2"
              onClick={() => document.getElementById('scroll-container')?.scrollBy({ left: 120, behavior: 'smooth' })}
            >
              &gt;
            </button>
          </div>

          {/* Reason for Cancellation */}
          <div className="bg-[#FFFFFF] p-4 md:py-6 rounded-lg">
            <p className="font-bold text-gray-800">Reason for Cancellation</p>
            <p className="text-gray-500 text-sm">
              Please tell us the correct reason for cancellation. This information is only used to improve our service.
            </p>
          </div>

          {/* Select Reason */}
          <div className="bg-[#FFFFFF] p-4 md:p-6 rounded-lg space-y-2">
            <p className="font-bold text-gray-800">Select Reason</p>
            <div className="flex items-center">
              <input type="radio" name="reason" id="reason1" className="mr-2" />
              <label htmlFor="reason1" className="text-gray-800">Incorrect Product</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="reason" id="reason2" className="mr-2" />
              <label htmlFor="reason2" className="text-gray-800">Ordered by mistake</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="reason" id="reason3" className="mr-2" />
              <label htmlFor="reason3" className="text-gray-800">Want to change product</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="reason" id="reason4" className="mr-2" />
              <label htmlFor="reason4" className="text-gray-800">Delayed Delivery Cancellation</label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="reason" id="reason5" className="mr-2" />
              <label htmlFor="reason5" className="text-gray-800">Duplicate Order</label>
            </div>
          </div>

          {/* Refund Section */}
          <div className="bg-[#FFFFFF] p-4 md:p-6 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-gray-800">Refund Amount</p>
              <p>₹800</p>
            </div>
            <button
              className="bg-[#C30F16] w-2/4 text-white py-2 rounded-md hover:bg-opacity-90"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>

      </div>

      {/* Show popup on confirm */}
      {showPopup && <ConfirmRefundPopup onClose={handleClose} />}

      {/* Add some space at the bottom */}
      <div className="h-24"></div>
    </div>
  );
};

export default RefundScreen;
