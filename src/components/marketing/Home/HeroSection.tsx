import { Link } from "react-router-dom";
import CustomButton from "../../common/CustomButton";
const HeroSection = () => {
  return (
    <div className="bg-[url('src/assets/svg/hero-bg.svg')] h-fit w-full bg-auto bg-no-repeat p-5 md:p-0 ">
      <div className="flex flex-col justify-center items-center max-w-2xl m-auto min-h-screen space-y-7">
        <h1 className="uppercase font-medium text-white text-2xl text-center leading-relaxed sm:text-2xl md:text-4xl">
          JOIN US IN ACHIEVING AGRICULTURAL EXCELLENCE
        </h1>
        <p className="text-xs text-center text-white md:text-sm">
          Welcome to Farmstark! We're here to support your farming journey every
          step of the way. By joining us, you'll become part of a community
          committed to improving food security and strengthening the
          agricultural supply chain in Nigeria. Let’s grow together!
        </p>
        <div className="flex flex-col space-x-3 space-y-5 items-center w-full sm:w-3/4 md:flex-row md:space-y-0">
          <Link
            to="/"
            className="w-full border border-solid border-secondary-dark rounded-full"
          >
            <CustomButton color="green" text="get started" />
          </Link>
          <Link
            to="/marketplace"
            className="w-full border border-solid border-gray-50 rounded-full"
          >
            <CustomButton color="transparentWhite" text="explore marketplace" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
