import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LogoDarkImg from "../assets/svg/logo-dark.svg";
import LogoLightImg from "../assets/svg/logo-light.svg";
import XIcon from "../assets/svg/twitter.svg";
import LinkedInIcon from "../assets/svg/linkedin.svg";
// import DiscordIcon from "../assets/svg/discord.svg";
import InstagramIcon from "../assets/svg/instagram.svg";
import FacbookIcon from "../assets/svg/facebook.svg";
// import WhatsappIcon from "../assets/svg/whatsapp.svg";

import { Link } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [route, setRoute] = useState("");

  const menuToggle = () => {
    const menu = document.getElementById("menu")!;
    const btn = document.getElementById("menu-btn")!;

    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
  };

  const closeMenu = () => {
    menuToggle();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setRoute(location.pathname);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="relative p-5">
        <div className="flex justify-between items-center max-w-6xl m-auto  md:px-0">
          {route === "/" && !isScrolled ? (
            <Link to="/">
              <img src={LogoLightImg} className="w-32" alt="farmstarck logo" />
            </Link>
          ) : (
            <Link to="/">
              <img src={LogoDarkImg} className="w-32" alt="farmstarck logo" />
            </Link>
          )}

          <button
            id="menu-btn"
            className="block hamburger focus:outline-none"
            onClick={menuToggle}
          >
            <span
              className="hamburger-top"
              style={{
                background: `${route === "/" && !isScrolled ? "white" : ""}`,
              }}
            ></span>
            <span
              className="hamburger-middle"
              style={{
                background: `${route === "/" && !isScrolled ? "white" : ""}`,
              }}
            ></span>
            <span
              className="hamburger-bottom"
              style={{
                background: `${route === "/" && !isScrolled ? "white" : ""}`,
              }}
            ></span>
          </button>
        </div>
        <div className="relative max-w-6xl my-auto bg-slate-700"></div>
      </div>
      <div
        id="menu"
        className="w-full h-screen absolute right-0 top-0 hidden flex-col items-start self-end py-8 px-7 sm:px-14 md:w-1/3 space-y-8  bg-white sm:self drop-shadow-md "
      >
        <div className="w-full flex justify-end">
          <button
            id="menu-btn"
            className="open block hamburger focus:outline-none"
            onClick={menuToggle}
          >
            <span
              className="hamburger-top"
              style={{
                background: `${route === "/" && !isScrolled ? "#333" : ""}`,
              }}
            ></span>
            <span
              className="hamburger-middle"
              style={{
                background: `${route === "/" && !isScrolled ? "#333" : ""}`,
              }}
            ></span>
            <span
              className="hamburger-bottom"
              style={{
                background: `${route === "/" && !isScrolled ? "#333" : ""}`,
              }}
            ></span>
          </button>
        </div>
        <Link to="/" onClick={closeMenu}>
          <div className="py-3 px-9 bg-secondary-dark rounded cursor-pointer text-white text-sm">
            SIGN IN
          </div>
        </Link>
        <div className="flex flex-col items-start space-y-2 text-base text-primary mt-32">
          <Link
            to="about"
            className="text-lg transition ease-in-out duration-75 hover:text-secondary-dark "
            onClick={closeMenu}
          >
            ABOUT
          </Link>
          <Link
            to="services"
            className="text-base md:text-lg transition ease-in-out duration-75 hover:text-secondary-dark "
            onClick={closeMenu}
          >
            OUR SERVICES
          </Link>
          <Link
            to="marketplace"
            className="text-base md:text-lg  transition ease-in-out duration-75 hover:text-secondary-dark "
            onClick={closeMenu}
          >
            MARKETPLACE
          </Link>
          <Link
            to="community"
            className="text-base md:text-lg  transition ease-in-out duration-75 hover:text-secondary-dark "
            onClick={closeMenu}
          >
            COMMUNITY
          </Link>
          <Link
            to="contact"
            className="text-base md:text-lg  transition ease-in-out duration-75 hover:text-secondary-dark "
            onClick={closeMenu}
          >
            CONTACT
          </Link>
        </div>
        <div className="pt-5">
          <p className="font-thin text-sm text-gray-500">EMAIL US @</p>
          <h4 className="text-sm">info@farmstarck.com</h4>
        </div>
        <div className="pb-4">
          <p className="font-thin text-sm text-gray-500">PHONE NUMBER</p>
          <h4 className="text-sm">+234 813 039 5444</h4>
        </div>
        <div className="flex space-x-3 items-end">
          <Link to="https://x.com/farmstarck?s=21&t=1LZ4ghO_eX6kdqKI8zG_vw">
            <img src={XIcon} alt="x-icon" className="w-5" />
          </Link>
          <Link to="https://www.linkedin.com/company/farmstarck/">
            <img src={LinkedInIcon} alt="linkendin-icon" className="w-5" />
          </Link>
          {/* <Link to="/">
            <img src={DiscordIcon} alt="discord-icon" className="w-5" />
          </Link> */}
          <Link to="https://www.instagram.com/farmstarck/profilecard/?igsh=MWNrbzlic3drcGU2aw==">
            <img src={InstagramIcon} alt="instagram-icon" className="w-5" />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=61562747617838&mibextid=LQQJ4d">
            <img src={FacbookIcon} alt="facebook-icon" className="w-5" />
          </Link>
          {/* <Link to="/">
            <img src={WhatsappIcon} alt="whatsapp-icon" className="w-5" />
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
