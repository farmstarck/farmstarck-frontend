import { useEffect, useState } from "react";
import WishListImg from "../../../assets/svg/wishlist.svg";
import CartImg from "../../../assets/svg/cart.svg";
import SearchImg from "../../../assets/svg/magnifier.svg";

const ShopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed w-full top-[75px] z-40 py-3 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl m-auto px-5 md:px-0   w-full relative flex items-center justify-between gap-5  ">
        <div className="relative w-5/6">
          <input
            type="search"
            placeholder="Search Product"
            className={`w-full h-9 md:h-12  p-3  border border-gray-300 rounded-md  bg-none placeholder-gray-500 font-light text-sm pl-12 md:pl-20 focus:outline-none`}
          />

          <img
            src={SearchImg}
            alt=""
            loading="lazy"
            className="z-10 absolute top-3 w-4 md:top-4 left-4 md:w-5"
          />
        </div>
        <div className="cursor-pointer">
          <img src={CartImg} alt="" loading="lazy" className="w-7" />
        </div>
        <div className="cursor-pointer">
          <img src={WishListImg} alt="" loading="lazy" className="w-7" />
        </div>
      </div>
    </div>
  );
};

export default ShopNavbar;
