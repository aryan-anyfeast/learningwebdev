import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OfferCard1 from "./assets/images/OfferCard1.png";
import OfferCard2 from "./assets/images/OfferCard2.png";
import OfferCard3 from "./assets/images/OfferCard3.png";

const PauseOnHover: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at once
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For tablet or smaller screens
        settings: {
          slidesToShow: 2, // Show 2 cards
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 card
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full mt-4 " // Aligning with the static code's layout
    >
      <Slider {...settings}>
        <div className="px-4"> {/* Add padding for space between cards */}
          <img src={OfferCard1} alt="Offer Card 1" className="w-full h-auto object-fill rounded-lg" />
        </div>
        <div className="px-4"> {/* Add padding for space between cards */}
          <img src={OfferCard2} alt="Offer Card 2" className="w-full h-auto object-fill rounded-lg" />
        </div>
        <div className="px-4"> {/* Add padding for space between cards */}
          <img src={OfferCard3} alt="Offer Card 3" className="w-full h-auto object-fill rounded-lg" />
        </div>
      </Slider>
    </div>
  );
};

export default PauseOnHover;
