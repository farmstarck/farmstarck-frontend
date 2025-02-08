import { Link } from "react-router-dom";
import Img2 from "../../../assets/images/section-img2.png";
import CustomButton from "../../common/CustomButton";

const Intro = () => {
  return (
    <div className="px-5 py-6 mt-6">
      <div className="max-w-3xl m-auto flex flex-col space-y-10 justify-between items-center md:items-start">
        <div className="flex justify-center w-ful">
          <img src={Img2} alt="" loading="lazy" className="w-3/4" />
        </div>
        <div className="flex flex-col items-center space-y-4 w-full md:w-2/3">
          <p className="text-sm text-center md:text-start">
            At Farmstarck, we believe in empowering farmers and agricultural
            businesses with the tools they need to thrive. Our mission is to
            provide user-friendly software that boosts productivity, reduces
            waste, and increases profitability for agribusinesses of all sizes.
          </p>
          <Link
            to="/underconstruction"
            className="w-full  border border-solid border-secondary-dark rounded-full"
          >
            <CustomButton color="green" text="start your free today" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
