import React, { useEffect, useState } from "react";
import TestimonialImg from "../../../assets/svg/testimonial-img1.svg";
import QuoteImg from "../../../assets/svg/quote.svg";
import Statistics from "./Statistics";
import Partners from "./Partners";

const testimonials = [
  {
    id: 1,
    text: "Farmstark has been a game-changer for my business. The funding and educational resources have helped me expand and improve my farm operations.",
    author: "Sarah Adewale",
    img: TestimonialImg,
    location: "Abuja, Nigeria",
  },
  {
    id: 2,
    text: "I would highly recommend this to everyone. A true game-changer.",
    author: "John Smith",
    img: TestimonialImg,
    location: "Lagos, Nigeria",
  },
  {
    id: 3,
    text: "Excellent service and fantastic results. Couldn't ask for more.",
    author: "Alice Johnson",
    img: TestimonialImg,
    location: "Calabar, Nigeria",
  },
];

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {}, [current]);
  return (
    <div className="bg-secondary-light w-full px-5 py-10">
      <div className="relative w-full max-w-6xl m-auto mx-auto p-4">
        <div className="flex flex-col items-center mb-10">
          <h5 className="text-xs uppercase">testimonials</h5>
          <h2 className="uppercase text-lg text-center leading-relaxed sm:text-2xl md:text-3xl md:text-start">
            BE INSPIRED BY OUR FAMERS’ SUCCES
          </h2>
        </div>
        {/* Testimonial Content */}
        <div className="flex flex-col items-center justify-center gap:3 md:gap-10 md:flex-row">
          <img
            src={testimonials[current].img}
            alt=""
            className="w-40 md:w-60"
          />

          <div className="w-full text-center space-y-2 md:space-y-5 md:text-start md:w-1/2 ">
            <img src={QuoteImg} alt="" className="w-5 md:w-10" />
            <p className="text-xs text-gray-700 md:text-sm">
              {testimonials[current].text}
            </p>
            <div>
              <h4 className="mt-4 font-bold text-primary text-sm md:text-base">
                {testimonials[current].author}
              </h4>
              <p className="text-xs  text-gray-400 md:text-sm">
                {testimonials[current].location}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <button
          className={`absolute top-1/3 md:top-1/2 left-0 md:left-4 transform translate-y-1/2  p-2 text-gray-400 hover:text-secondary-dark transition ease-out duration-100 text-2xl cursor-pointer`}
          onClick={handlePrev}
        >
          ◀
        </button>
        <button
          className={`absolute top-1/3 md:top-1/2 right-0 md:right:4 transform translate-y-1/2 p-2 text-gray-400 hover:text-secondary-dark transition ease-out duration-100 text-2xl cursor-pointer`}
          onClick={handleNext}
        >
          ▶
        </button>
      </div>
      <Statistics />
      <Partners />
    </div>
  );
};

export default Testimonial;
