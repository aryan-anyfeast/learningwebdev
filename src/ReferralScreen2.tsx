import React, { useState } from 'react';
import { FaFacebook, FaEnvelope, FaTwitter, FaFacebookMessenger, FaClipboard, FaClipboardCheck } from 'react-icons/fa'; // Importing icons
import { MdOutlineContentCopy } from "react-icons/md";

const Referral2: React.FC = () => {  
  const [isCopied, setIsCopied] = useState(false); // State to handle copied text

  const handleCopy = () => {
    navigator.clipboard.writeText('AnyFeast.co'); // Copy the text to clipboard
    setIsCopied(true); // Set copied state to true
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (  
    <div>
      {/* Red navbar for demo */}
      <nav className="bg-red-600 p-4 text-white text-center font-bold">
        AnyFeast
      </nav>

      {/* Referral Section */}
      <div className="max-w-xl mx-auto bg-white shadow-none  mt-6">  
        <h1 className="text-2xl font-bold text-center mb-4">Feast Together, Save Together.</h1>  
        
        <div className="shadow-none mx-6 p-6 px-6 bg-[#F5F7F2]">
        <div className="mb-4 ">  
        <p className="text-center text-[#313131] mb-6">
          Refer a friend to AnyFeast and earn <span className="font-semibold">₹500</span> credit.
          Your friend will also enjoy a <span className="font-semibold">20% discount</span> on their first order.
        </p>
        <a
          href="#"
          className="text-sm text-center block mb-6 underline font-medium text-[#313131]"
        >
          Terms & Conditions
        </a>
        </div>  
        
        <form className="space-y-4">  
          <input  
            type="text"  
            placeholder="First Name"  
            className="w-full p-2 border rounded"  
          />  
          <input  
            type="email"  
            placeholder="Email"  
            className="w-full p-2 border rounded"  
          />  
          <div className="flex items-center">  
            <input type="checkbox" id="terms" className="mr-2" />  
            <label htmlFor="terms" className="text-sm">  
              I agree to <a href="#" className="underline font-semibold">Term & Conditions</a>  
            </label>  
          </div>  
        </form>  
        
        <div className="mt-6 ">  
          <p className="text-sm font-bold py-3 text-center">Invite now using:</p>  
          <div className="flex justify-center space-x-4">  
  <button className="w-12 h-12 flex items-center justify-center text-[#0B6E27]">  
    <FaEnvelope size={30} /> {/* Email icon */}
  </button>
  <button className="w-12 h-12 flex items-center justify-center text-[#0B6E27]">  
    <FaFacebook size={30} /> {/* Facebook icon */}
  </button>
  <button className="w-12 h-12 flex items-center justify-center text-[#0B6E27]">  
    <FaFacebookMessenger size={30} /> {/* Messenger icon */}
  </button>
  <button className="w-12 h-12 flex items-center justify-center text-[#0B6E27]">  
    <FaTwitter size={30} /> {/* Twitter icon */}
  </button>
</div>

 
        </div>

        <div className="mt-6">  
          <p className="text-sm mb-2 text-center">Or copy your personal link</p>  
          <div className="flex">  
            <input  
              type="text"  
              value="AnyFeast.co"  
              readOnly  
              className="flex-grow p-2 border rounded-l"  
            />  
            <button
  className="bg-[#0B6E27] text-white p-2 px-4 flex items-center justify-center"
  onClick={handleCopy}
>
  <MdOutlineContentCopy size={20} /> {/* Clipboard icon with increased size */}
</button>
  
          </div>  
          {isCopied && (
            <p className="text-sm text-green-600 mt-2">Copied to clipboard!</p>
          )}
        </div> 
          </div> 
          <div className="h-16"></div>
      </div>  
    </div>
  );  
};  
  
export default Referral2;
