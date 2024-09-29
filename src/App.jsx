// App.js
import React, { useState } from 'react';
import RefundScreen from './RefundScreen';
import ShopScreen from './ShopScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home', 'refund', or 'shop'

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center">
      {currentScreen === 'home' && (
        <div className="space-y-4">
          <button
            className="bg-[#C30F16] text-white py-2 px-4 rounded-md hover:bg-opacity-90"
            onClick={() => handleScreenChange('refund')}
          >
            Go to Refund Screen
          </button>
          <button
            className="bg-[#C30F16] text-white py-2 px-4 rounded-md hover:bg-opacity-90"
            onClick={() => handleScreenChange('shop')}
          >
            Go to Shop Screen
          </button>
        </div>
      )}

      <div className="container mx-auto py-16">
        {currentScreen === 'refund' && <RefundScreen />}
        {currentScreen === 'shop' && <ShopScreen />}
        {currentScreen === 'home' && <div className="text-center">Welcome to AnyFeast!</div>}
      </div>
    </div>
  );
};

export default App;
