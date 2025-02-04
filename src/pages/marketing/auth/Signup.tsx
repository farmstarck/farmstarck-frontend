import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import LogoImg from "../../../assets/svg/auth-midlogo.svg";
import GoogleIcon from "../../../assets/svg/google-icon.svg";
import FacebookIcon from "../../../assets/svg/facebook-auth-icon.svg";
import EmailIcon from "../../../assets/svg/mail-icon.svg";
import OpenEyeIcon from "../../../assets/svg/eye-open.svg";
import CloseEyeIcon from "../../../assets/svg/eye-close.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [phoneError, setPhoneError] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePhoneNumberChange = (newValue: any) => {
    setValue(newValue);
    setPhoneError(false);
    if (newValue === undefined || newValue === null) {
      return;
    } else if (newValue.length >= 15 || newValue.length === 12) {
      setIsValid(false);
    } else {
      setIsValid(isValidPhoneNumber(newValue));
    }
  };

  return (
    <div className="flex w-full py-12  overflow-y-auto no-scrollbar sm:h-screen sm:py-0">
      <div className="w-1/2 h-screen  bg-cover bg-[url('../src/assets/svg/auth-bg.svg')]  bg-no-repeat hidden md:flex justify-center items-center">
        <div className="relative auth_img w-20 h-20 bg-white rounded-full flex justify-center items-center">
          <img src={LogoImg} alt="logo" className="w-7" />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center  px-5 sm:px-20">
        <div className="w-full sm:w-[90%] flex flex-col justify-center items-center gap-5 sm:gap-2">
          <div className="w-full text-center sm:text-start">
            <h2 className="font-subHeading2 text-xl sm:text-2xl">Sign Up</h2>
            <p className="text-gray-600 text-sm">
              Create an account to start your journey
            </p>
          </div>
          <div className="w-full flex flex-col gap-5 items-center justify-center sm:flex-row sm:justify-start">
            <button className="py-2 px-2 w-52 flex items-center gap-2 justify-center border border-gray-300 rounded-lg cursor-pointer sm:w-auto">
              <img src={GoogleIcon} alt="google" className="w-5" />
              <span className="text-sm">Sign up with Google</span>
            </button>
            <button className="py-2 px-2 w-52 flex items-center gap-2 justify-center border border-gray-300 rounded-lg cursor-pointer sm:w-auto">
              <img src={FacebookIcon} alt="facebook" className="w-5" />
              <span className="text-sm">Sign up with Facebook</span>
            </button>
          </div>
          <div className="py-2 sm:py-1">
            <p className="text-gray-600 text-xs">OR</p>
          </div>
          <form className="w-full flex flex-col gap-5 sm:gap-3 py-2">
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
            <div className="flex flex-col gap-3">
              <label className="font-subHeading2 text-xs md:text-sm text-gray-500">
                Phone Number
              </label>
              <PhoneInput
                defaultCountry="NG"
                international
                initialValueFormat="national"
                placeholder="Phone number"
                value={value}
                onChange={handlePhoneNumberChange}
                className="w-full h-12  p-3 relative  border rounded-md  bg-white font-light text-sm focus:outline-none placeholder-gray-500"
                limitMaxLength
              />
              {isValid ? null : (
                <div className="w-full text-center text-red-600 text-xs">
                  Invalid phone number
                </div>
              )}
              {phoneError && (
                <p className="w-full text-center text-red-600 text-xs">
                  Phone Number is required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-subHeading2 text-xs md:text-sm text-gray-500">
                Full Name
              </label>
              <div className="relative">
                <input
                  required
                  value={fullname}
                  type="text"
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full h-12  p-3 p relative  border rounded-md  bg-white font-light text-sm focus:outline-none placeholder-gray-500"
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
            <button className="bg-secondary-dark mt-2 py-2 rounded-md cursor-pointer border border-secondary-dark text-white hover:bg-white hover:text-secondary-dark">
              Sigin Up
            </button>
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link
                to="/auth/login"
                className="text-secondary-dark font-subHeading2"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
