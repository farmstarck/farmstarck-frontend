import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonial = [
  {
    id: 1,
    text: "with Farmstarck, I don't have to chase market buyers anymore, they find me",
    author: "Chinwe, yam merchant (Benue)",
    videoUrl: "https://www.youtube.com/embed/Q49EhjZAJNI?si=9XjXQkQmPXP0Teq_",
  },
  {
    id: 2,
    text: "I would highly recommend this to everyone. A true game-changer.",
    author: "John Smith",
    videoUrl: "https://www.youtube.com/embed/Q49EhjZAJNI?si=9XjXQkQmPXP0Teq_",
  },
  {
    id: 3,
    text: "Excellent service and fantastic results. Couldn't ask for more.",
    author: "Alice Johnson",
    videoUrl: "https://www.youtube.com/embed/Q49EhjZAJNI?si=9XjXQkQmPXP0Teq_",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState<number>(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonial.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonial.length - 1 : prev - 1));
  };

  return (
    <div className="px-5 relative pt-12 md:pt-10 pb-20">
      <div className="w-full max-w-6xl m-auto space-y-8 flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-3 md:gap-5">
          <div className="flex flex-col items-center gap-3 md:gap-5">
            <h2 className="text-xl sm:text-3xl md:text-4xl  text-center font-subHeading leading-tight font-extrabold text-secondary-veryDark text-centers">
              What Our Users Are Saying
            </h2>

            <div className="w-full md:p-8 bg-white rounded-lg flex flex-col gap-6">
              <div className="flex items-center justify-between gap-10">
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center md:flex-row md:gap-20"
                    >
                      {/* Left side - Text */}
                      <div className="flex-1 flex flex-col gap-4 md:gap-10 items-center md:items-start">
                        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-start">
                          "{testimonial[current].text}"
                        </p>
                        <span className="font-bold text-secondary-light text-lg text-center md:text-start">
                          - {testimonial[current].author}
                        </span>
                        {/* Controls */}
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={prev}
                            className="p-2 text-secondary-light transition"
                          >
                            <ArrowLeft size={24} />
                          </button>

                          <span className="font-subHeading2 text-sm">
                            {current + 1} of {testimonial.length}
                          </span>

                          <button
                            onClick={next}
                            className="p-2 text-secondary-light transition"
                          >
                            <ArrowRight size={24} />
                          </button>
                        </div>
                      </div>

                      {/* Right side - Image */}
                      <div className="flex-shrink-0">
                        <iframe
                          width="100%"
                          //   height="400"
                          className="w-full md:w-96 h-80 object-cover rounded-2xl border-4"
                          src={testimonial[current].videoUrl}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-secondary-veryLight rounded-xl px-5 py-10 md:p-20">
          <div className="w-full max-w-3xl m-auto  flex flex-col gap-8 items-center">
            <h2 className="capitalize ext-xl sm:text-3xl md:text-4xl  text-center font-subHeading leading-tight font-extrabold text-secondary-veryDark text-centers">
              Ready to grow your{" "}
              <span className="text-secondary-light">business</span>? Start
              where the <span className="text-secondary-light">buyers</span> are
            </h2>
            <div className="w-full md:w-4/5 flex flex-col gap-2">
              <p className="text-sm  sm:text-base md:text-lg text-center">
                Join thousands of farmers, agro-merchants, and suppliers already
                scaling their income with Farmstarck.
              </p>
              <p className="text-sm font-subHeading2 sm:text-base md:text-lg text-center">
                Sell faster. Reach more. Earn without limits.
              </p>
            </div>
            <Link
              to=""
              className="px-16 self-auto text-center py-2  md:px-32 md:py-4 bg-secondary-light text-white text-base rounded-full font-btnBody transition-all duration-300 hover:bg-white hover:text-secondary-light"
            >
              Start Selling Nnow
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
