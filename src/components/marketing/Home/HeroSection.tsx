import { Link } from "react-router-dom";
import mobileHeroBg from "../../../assets/images/mobile-hero-bg.png";
import CustomButton from "../../common/CustomButton";
const HeroSection = () => {
  return (
    <div
      className=" bg-cover sm:bg-[url('src/assets/images/hero-bg.png')]  h-fit w-full  bg-no-repeat p-5 md:p-0 "
      style={{ backgroundImage: `url(${mobileHeroBg})` }}
    >
      <div className="flex flex-col justify-end md:justify-center items-center max-w-2xl m-auto min-h-96 md:min-h-screen space-y-5 md:space-y-7">
        <h1 className="uppercase font-subHeading2 text-white text-xl text-center sm:leading-relaxed sm:text-2xl md:text-4xl">
          JOIN US IN ACHIEVING AGRICULTURAL EXCELLENCE
        </h1>
        <p className="text-sm font-normal md:font-subHeading2 text-center text-white">
          Welcome to Farmstark! We're here to support your farming journey every
          step of the way. By joining us, you'll become part of a community
          committed to improving food security and strengthening the
          agricultural supply chain in Nigeria. Let’s grow together!
        </p>
        <div className="flex flex-col space-x-3 space-y-2 items-center w-full sm:w-3/4 md:flex-row md:space-y-0">
          <Link
            to="/auth/login"
            className="w-full border border-solid border-secondary-dark rounded-full"
          >
            <CustomButton color="green" text="get started" />
          </Link>
          <Link
            to="/marketplace"
            className="w-full border border-solid border-secondary-dark rounded-full"
          >
            <CustomButton color="white" text="explore marketplace" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
