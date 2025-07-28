import { Link } from "react-router-dom";
import MarketImg from "../../../assets/images/landing-market.png";

const Market = () => {
  return (
    <div className="px-5 relative bg-secondary-veryLight md:pt-10 md:pb-20">
      <div className="w-full max-w-3xl m-auto space-y-8 flex flex-col items-center">
        <h2 className="uppercase text-base text-center text-secondary-dark font-subHeading leading-relaxed">
          marketplace
        </h2>
        <img
          src={MarketImg}
          alt="market-img"
          className="object-contain w-full h-auto min-w-[350px]"
        />
        <div className="w-full flex flex-col items-center gap-3 md:gap-7 md:w-5/6 m-auto pb-8 px-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl  text-center font-subHeading leading-tight font-extrabold text-secondary-veryDark text-centers">
            Your <span className="text-secondary-light">One-Stop</span> Hub for
            Quality Farm Produce and Resources
          </h2>
          <p className="text-sm font-subHeading2 sm:text-base md:text-lg text-center">
            From the farm to the market to your wallet. Farmstarck powers
            agriculture with smart tools, seamless trade, and financial
            inclusion.
          </p>
          <Link
            // to="shop"
            to="underconstruction"
            className="px-12 self-auto text-center py-2  md:py-4 bg-secondary-light text-white text-base rounded-full font-btnBody transition-all duration-300 hover:bg-white hover:text-secondary-light"
          >
            View Marketplace
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Market;
