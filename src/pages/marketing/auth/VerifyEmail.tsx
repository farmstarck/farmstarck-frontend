import { useState } from "react";
import VerifyImg from "../../../assets/svg/auth-verify.svg";
import CountdownTimer from "../../../components/common/CountdownTimer";
import CodeInput from "../../../components/marketing/auth/CodeInput";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isCountingdown, setIsCountingdown] = useState(true);
  const [_, setCode] = useState("");

  const handleComplete = (code: string) => {
    setCode(code);
  };

  const handleResendCode = async () => {
    if (isCountingdown === true) {
      toast.error("Verification code already sent");
      return;
    }

    setIsCountingdown(true);
    toast.success("Code sent to your email address");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-5">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-7">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <img src={VerifyImg} alt="lock-icon" className="w-20" />
          <h1 className="font-subHeading2 text-2xl">Email Verification</h1>
          <p>Please check your email for an OTP Verification code</p>
        </div>
        <form className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm">
            Expires in 60 seconds{" "}
            <span>
              {isCountingdown && (
                <CountdownTimer
                  initialMinutes={1}
                  initialSeconds={0}
                  setIsCountingdown={setIsCountingdown}
                />
              )}
            </span>
          </p>
          <CodeInput
            length={6}
            onComplete={handleComplete}
            setIsDisabled={setIsDisabled}
          />
          <button
            className="w-full md:w-1/3 bg-secondary-dark mt-2 py-2 rounded-md cursor-pointer border border-secondary-dark text-white hover:bg-white hover:text-secondary-dark disabled:bg-secondary-light disabled:cursor-auto disabled:border-none disabled:hover:text-white"
            disabled={isDisabled}
          >
            Proceed
          </button>
          <p className="text-xs  w-1/3  py-5">
            Didn’t receive the OTP code ? Please check your spam folder or try
            to resend the OTP code{" "}
            <span
              className={`${
                isCountingdown ? "text-gray-400" : "text-secondary-dark "
              } cursor-pointer`}
              onClick={handleResendCode}
            >
              Resend link
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
