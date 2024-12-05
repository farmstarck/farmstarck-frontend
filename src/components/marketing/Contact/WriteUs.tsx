import toast from "react-hot-toast";
import UserLight from "../../../assets/svg/user-white.svg";
import Userdark from "../../../assets/svg/user-dark.svg";
import CustomButton from "../../common/CustomButton";
import { useState } from "react";

const WriteUs = () => {
  const [role, setRole] = useState<string>("");

  const handleRoleSelect = (selected: string) => {
    if (role === selected) {
      setRole("");
    } else {
      setRole(selected);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!role) {
      toast.error("Please select your role.");
      return;
    }
    toast.success("Message sent successfully!");
  };

  return (
    <div className="max-w-3xl m-auto flex flex-col space-y-14 md:space-y-24 px-5 py-6 md:py-12">
      <div className="flex flex-col gap-5">
        <h5 className="text-xs uppercase">write to us</h5>
        <h2 className="uppercase w-full text-center md:text-start md:w-2/3 sm:text-2xl md:text-3xl">
          To reach out to us, please fill in the form below.
        </h2>
        <div className="py-8">
          <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
            <div className="flex gap-1">
              <label className="">*</label>
              <div className="w-full flex justify-around gap-2 md:gap-10 md:justify-start">
                <div
                  className="flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => handleRoleSelect("farmer")}
                >
                  <div
                    className={`border border-solid border-gray-200 rounded-md p-3 flex items-center justify-center md:p-5 ${
                      role === "farmer" && "bg-secondary-dark"
                    }`}
                  >
                    {role === "farmer" ? (
                      <img
                        src={UserLight}
                        alt=""
                        className="w-3 md:w-4"
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={Userdark}
                        alt=""
                        className="w-3 md:w-4"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <label className="text-btn-txt md:text-xs">Farmer</label>
                </div>
                <div
                  className="flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => handleRoleSelect("investor")}
                >
                  <div
                    className={`border border-solid border-gray-200 rounded-md p-3 flex items-center justify-center md:p-5 ${
                      role === "investor" && "bg-secondary-dark"
                    }`}
                  >
                    {role === "investor" ? (
                      <img
                        src={UserLight}
                        alt=""
                        className="w-3 md:w-4"
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={Userdark}
                        alt=""
                        className="w-3 md:w-4"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <label className="text-btn-txt md:text-xs">Investor</label>
                </div>
                <div
                  className="flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => handleRoleSelect("merchant")}
                >
                  <div
                    className={`border border-solid border-gray-200 rounded-md p-3 flex items-center justify-center md:p-5 ${
                      role === "merchant" && "bg-secondary-dark"
                    }`}
                  >
                    {role === "merchant" ? (
                      <img
                        src={UserLight}
                        alt=""
                        className="w-3 md:w-4"
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={Userdark}
                        alt=""
                        className="w-3 md:w-4"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <label className="text-btn-txt md:text-xs">Merchant</label>
                </div>
                <div
                  className="flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => handleRoleSelect("user")}
                >
                  <div
                    className={`border border-solid border-gray-200 rounded-md p-3 flex items-center justify-center md:p-5 ${
                      role === "user" && "bg-secondary-dark"
                    }`}
                  >
                    {role === "user" ? (
                      <img
                        src={UserLight}
                        alt=""
                        className="w-3 md:w-4"
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={Userdark}
                        alt=""
                        className="w-3 md:w-4"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <label className="text-btn-txt md:text-xs">User</label>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <label className="">*</label>
              <input
                required
                type="text"
                placeholder="Full name"
                className="w-full h-12  p-3  border-0 border-b rounded-md  bg-secondary-light placeholder-black font-light text-sm focus:outline-none"
              />
            </div>
            <div className="flex gap-1">
              <label className="">*</label>
              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full h-12  p-3  border-0 border-b rounded-md  bg-secondary-light placeholder-black font-light text-sm focus:outline-none"
              />
            </div>
            <div className="flex gap-1">
              <label className="">*</label>
              <textarea
                required
                placeholder="Write your message"
                className="w-full h-40  p-3  border-0 border-b rounded-md  bg-secondary-light placeholder-black font-light text-sm focus:outline-none"
              />
            </div>
            <div className="w-full md:ml-3 border border-solid border-secondary-dark rounded-full">
              <CustomButton color="green" text="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteUs;
