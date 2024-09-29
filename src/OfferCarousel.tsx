import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferCard1 from './assets/images/OfferCard1.png';
import OfferCard2 from './assets/images/OfferCard2.png';
import OfferCard3 from './assets/images/OfferCard3.png';
import SliderIcon1 from "../../../src/images/slidericon1.png";
import SliderIcon2 from "../../../src/images/slidericon2.png";

const testimonials = [
  {
    image: OfferCard1,
    name: "Customer 1",
    date: "Apr 30, 2024",
    title: "Elevating Every Occasion with AnyFeast",
    text: "Thanks to AnyFeast, I've kissed meal planning stress goodbye! With fresh ingredients delivered to my door and easy-to-follow recipes, cooking has become a joy. From gourmet dishes to quick meals, it's convenience and quality rolled into one. Highly recommend.",
  },
  {
    image: OfferCard2,
    name: "Customer 2",
    date: "Sept 09, 2024",
    title: "Game Changer for Busy People",
    text: "AnyFeast has transformed my cooking experience. The ingredients are always fresh, and the recipes are easy to follow. It's a game-changer for busy people like me.",
  },
  {
    image: OfferCard3,
    name: "Customer 2",
    date: "Sept 09, 2024",
    title: "Game Changer for Busy People",
    text: "AnyFeast has transformed my cooking experience. The ingredients are always fresh, and the recipes are easy to follow. It's a game-changer for busy people like me.",
  },
];
const SampleNextArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:"gray", borderRadius: "100%"}}
        onClick={onClick}
      />
    );
  }
  
  const SamplePrevArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:"gray", borderRadius: "100%" }}
        onClick={onClick}
      />
    );
  }
const OfferCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "120px",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 font-sans text-[#313131]">
        What Our Customers Say About Us
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
                <div className="md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-l-lg object-cover w-full h-full max-h-64"
                  />
                </div>
                <div className="md:w-2/3 ml-0 md:ml-6 text-[#525252] p-8 font-sans">
                  <div className="mb-10">
                    <p className="text-sm  mb-2">{testimonial.date}</p>
                    <h3 className="text-xl font-bold mb-2">
                      {testimonial.title}
                    </h3>
                  </div>

                  <p>{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OfferCarousel;
