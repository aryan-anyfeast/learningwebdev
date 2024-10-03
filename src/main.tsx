import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // assuming App.jsx will be renamed to App.tsx
import './index.css';
import PauseOnHover from './PauseOnHover';
import ProductItems from './ProductItems';
import ShopScreens from './ShopScreens';
import ConfirmRefundPopup from './ConfirmRefund';
import ResponsiveRefund from './ResponsiveRefund';
import ReferralScreen2 from './ReferralScreen2';
import ReferralScreen1 from './ReferralScreen';
import ResponsiveShop from './ReponsiveShop';


createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {/* <ShopScreens/> */}
    {/* <ResponsiveRefund/>*/}
    {/* <ReferralScreen1/> */}
    {/* <ReferralScreen2/> */}
    <ResponsiveShop/> 

    {/* 
    ShopScreens - desktop shop page
    ResponsiveRefund mobile refund page 
    ReferralScreen1 - both for mobile and desktop
    ReferralScreen2 - both for mobile and desktop 
    ResponsiveShop - mobile shop page 
    */}
    


  </StrictMode>,
);
