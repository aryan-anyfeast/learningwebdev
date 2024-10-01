// ResponsivePopup.tsx
import React from 'react';

interface ResponsivePopupProps {
  onClose: () => void;
}

const ResponsivePopup: React.FC<ResponsivePopupProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-4/5 relative">
          
            <button
      className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl p-2 font-bold"
      onClick={onClose}
    >
      &times;
    </button>
    
            <h2 className="text-xl  font-dm-sans mb-4">Confirm Refund</h2>
            <p className="text-gray-700    font-dm-sans mb-6">
              You will receive a refund of <span className="text-green-700">₹800</span> within five business days via the same UPI method used for your original payment.
            </p>
            <div className="flex justify-between space-x-4">
              <button className=" border border-black-3 text-black flex-1 px-4 py-2 rounded-lg text-base font-dm-sans font-medium" onClick={onClose}>
                Cancel
              </button>
              <button className="bg-[#C30F16] text-white flex-1 px-4 py-2 rounded-lg text-base font-dm-sans font-medium">
                Confirm
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default ResponsivePopup;
    