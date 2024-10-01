import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // assuming App.jsx will be renamed to App.tsx
import './index.css';
import ShopScreen from './ShopScreen';
import RefundScreen from './RefundScreen';
import PauseOnHover from './PauseOnHover';
import ProductItem from './ProductItem';
import ProductItems from './ProductItems';
import ShopScreens from './ShopScreens';
import OfferCarousel from './OfferCarousel';
import ConfirmRefundPopup from './ConfirmRefund';
import ResponsiveRefund from './ResponsiveRefund';
import Referral from './ReferralScreen';
import Referral2 from './ReferralScreen2';


createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {/* <ShopScreens/> //shop page */}
    {/* confirmrefund */}
    {/* <ResponsiveRefund/> */}
    {/* <Referral/> */}
    <Referral2/>
  </StrictMode>,
);
