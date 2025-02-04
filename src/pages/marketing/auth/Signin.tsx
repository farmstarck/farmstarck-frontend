import { useState } from "react";
import LogoImg from "../../../assets/svg/auth-midlogo.svg";
import GoogleIcon from "../../../assets/svg/google-icon.svg";
import FacebookIcon from "../../../assets/svg/facebook-auth-icon.svg";
import EmailIcon from "../../../assets/svg/mail-icon.svg";
import OpenEyeIcon from "../../../assets/svg/eye-open.svg";
import CloseEyeIcon from "../../../assets/svg/eye-close.svg";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemeberMe, setIsRemeberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full  h-screen">
      <div className="w-1/2 h-screen  bg-cover bg-[url('../src/assets/svg/auth-bg.svg')]  bg-no-repeat hidden md:flex justify-center items-center">
        <div className="relative auth_img w-20 h-20 bg-white rounded-full flex justify-center items-center">
          <img src={LogoImg} alt="logo" className="w-7" />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-5 sm:px-20">
        <div className="w-full sm:w-5/6  flex flex-col justify-center items-center gap-5 ">
          <div className="w-full text-center sm:text-start">
            <h2 className="font-subHeading2 text-xl sm:text-2xl">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-sm">
              Login into your account to continue your journey
            </p>
          </div>
          <div className="w-full flex flex-col gap-5 items-center justify-center sm:flex-row sm:justify-start">
            <button className="py-2 px-2 w-52 flex items-center gap-2 justify-center border border-gray-300 rounded-lg cursor-pointer sm:w-auto">
              <img src={GoogleIcon} alt="google" className="w-5" />
              <span className="text-sm">Sign in with Google</span>
            </button>
            <button className="py-2 px-2 w-52 flex items-center gap-2 justify-center border border-gray-300 rounded-lg cursor-pointer sm:w-auto">
              <img src={FacebookIcon} alt="facebook" className="w-5" />
              <span className="text-sm">Sign in with Facebook</span>
            </button>
          </div>
          <div className="py-1">
            <p className="text-gray-600 text-sm">OR</p>
          </div>
          <form className="w-full flex flex-col gap-5 py-2">
            <div className="flex flex-col gap-1">
              <label className="font-subHeading2 text-xs md:text-sm text-gray-500">
                Email
              </label>
              <div className="relative">
                <input
                  required
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full h-12  p-3 pl-10 relative  border rounded-md  bg-white font-light text-sm focus:outline-none placeholder-gray-500"
                />
                <img
                  src={EmailIcon}
                  alt=""
                  className="absolute top-4 left-3 w-4"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-subHeading2 text-xs md:text-sm text-gray-500">
                Password
              </label>
              <div className="relative">
                <input
                  required
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full h-12  p-3 pr-10 relative  border rounded-md  bg-white font-light text-sm focus:outline-none placeholder-gray-500"
                />
                {showPassword ? (
                  <img
                    src={CloseEyeIcon}
                    alt=""
                    className="absolute top-4 right-3 w-5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <img
                    src={OpenEyeIcon}
                    alt=""
                    className="absolute top-4 right-3 w-5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between items-center w-full py-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="custom-checkbox2"
                    checked={isRemeberMe}
                    onChange={(e) => setIsRemeberMe(e.target.checked)}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="custom-checkbox2"
                    className={`w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center rounded-sm ${
                      !isRemeberMe && "border border-gray-400"
                    } peer-checked:bg-secondary-dark peer-checked:border-secondary-dark cursor-pointer transition-all`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 text-white peer-checked:block"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l5 5L20 7"></path>
                    </svg>
                  </label>
                  <span className="text-sm text-gray-500">
                    Keep me logged in
                  </span>
                </div>
              </div>
              <Link to="/underconstruction" className="text-sm text-gray-500">
                Forget password
              </Link>
            </div>
            <button className="bg-secondary-dark py-2 rounded-md cursor-pointer border border-secondary-dark text-white hover:bg-white hover:text-secondary-dark">
              Sigin In
            </button>
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link
                to="/auth/signup"
                className="text-secondary-dark font-subHeading2"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
