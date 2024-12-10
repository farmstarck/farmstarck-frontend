import { Link } from "react-router-dom";
import CustomButton from "./common/CustomButton";
import LogoLightImg from "../assets/svg/logo-light.svg";
import AppStoreImg from "../assets/svg/applestore.svg";
import GooglePlayImg from "../assets/svg/googleplay.svg";
import footerBg from "../assets/svg/footer-bg.svg";
import FootAccordion from "./common/FooterAccordion";

const Footer = () => {
  const accordionItems = [
    {
      title: "QUICK NAVIGATION",
      content: [
        {
          url: "/about",
          name: "About",
        },
        {
          url: "/services",
          name: "Our Services",
        },
        {
          url: "/",
          name: "Starck AI",
        },
        {
          url: "/marketplace",
          name: "Marketplace",
        },
        {
          url: "/contact",
          name: "Contact Us",
        },
      ],
    },
    {
      title: "OTHERS",
      content: [
        {
          url: "/become-a-farmer",
          name: "Farmers",
        },
        {
          url: "/",
          name: "Investment",
        },
        {
          url: "/",
          name: "Partnership",
        },
        {
          url: "/",
          name: "Community",
        },
        {
          url: "/",
          name: "Career",
        },
      ],
    },
    // {
    //   title: "CONTACT INFORMATION",
    //   content: [
    //     "+234 000 0000 000",
    //     "info@farmstarck.com",
    //     "Lorem ispum do not know the current address of farstack company",
    //   ],
    // },
  ];

  //  // Toggle button visibility on scroll
  //  useEffect(() => {
  //   const toggleVisibility = () => {
  //     if (window.scrollY > 300) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", toggleVisibility);

  //   return () => {
  //     window.removeEventListener("scroll", toggleVisibility);
  //   };
  // }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="bg-center h-fit w-full bg-auto space-y-7  bg-no-repeat mt-20 p-5 md:py-14 md:space-y-12"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-3xl m-auto bg-white bg-opacity-5 px-4 py-5 md:px-20 md:max-w-6xl md:py-10">
        <div className="space-y-4 flex flex-col items-center justify-center md:space-y-8">
          <h1 className="text-lg uppercase font-normal text-white md:text-4xl text-center">
            Share your thought with us
          </h1>
          <p className="text-xs w-full text-center text-white md:w-2/3 md:text-sm">
            We value your input and are here to assist you with any questions,
            feedback, or partnership opportunities. Please use the form below to
            let us know what you need, and we'll get back to you as soon as
            possible.
          </p>
          <form className=" flex flex-col gap-4 w-full  md:w-2/3 ">
            <div className="flex flex-col gap-4 md:space-y-5">
              <div className="flex flex-col justify-between gap-5  w-full md:gap-3 md:flex-row">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-10 md:w-72 p-3 px-0 border-0 border-b  bg-transparent text-white font-light text-sm placeholder-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-10  p-3 px-0 border-0 border-b  bg-transparent text-white font-light text-sm placeholder-white focus:outline-none md:w-72 "
                />
              </div>
              <div className="flex justify-between gap-3 w-full">
                <textarea
                  placeholder="Your Message"
                  className="h-10 w-full p-3 px-0 border-0 border-b  bg-transparent text-white font-light text-sm placeholder-white focus:outline-none"
                />
              </div>
            </div>
            <div>
              <CustomButton color="white" text="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className=" max-w-3xl m-auto flex flex-col-reverse gap-12 justify-center items-center md:justify-between md:flex-row md:gap-10 md:max-w-6xl">
        <div className="flex flex-col space-y-8 justify-center items-center  w-full md:w-1/4 md:justify-start md:items-start">
          <Link to="/">
            <img
              src={LogoLightImg}
              alt="farmstarck-logo"
              className="w-32 md:w-40"
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={AppStoreImg}
                alt="connect to app store"
                className="w-28"
              />
            </Link>
            <Link to="/">
              <img
                src={GooglePlayImg}
                alt="connect to google play"
                className="w-28"
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center gap-8 md:flex-row md:justify-end ">
          <div className=" flex flex-col justify-start items-start gap-4 w-full  md:w-1/4">
            <h2 className="text-xs text-white uppercase font-semibold">
              QUICK NAVIGATION
            </h2>
            <ul className="flex flex-col gap-2 font-thin text-sm">
              <Link
                to="/about"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>About</li>
              </Link>
              <Link
                to="/services"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>Our Services</li>
              </Link>
              <Link
                to="/"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>Starck AI</li>
              </Link>
              <Link
                to="/marketplace"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>Marketplace</li>
              </Link>
              <Link
                to="contact"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className=" flex flex-col justify-start items-start gap-4 w-full  md:w-1/4">
            <h2 className="text-xs text-white uppercase font-semibold">
              OTHERS
            </h2>
            <ul className="flex flex-col gap-2 font-thin text-sm">
              <Link
                to="/become-a-farmer"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>Farmers</li>
              </Link>
              <Link
                to="/"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>Investment</li>
              </Link>
              <Link
                to="/"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>Partnership</li>
              </Link>
              <Link
                to="/community"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>Community</li>
              </Link>
              <Link
                to="/"
                className="text-white transition ease-out duration-100 hover:text-opacity-80"
              >
                <li>Career</li>
              </Link>
            </ul>
          </div>
          <div className=" flex flex-col justify-start items-start gap-4 w-full  md:w-1/4">
            <h2 className="text-xs text-white uppercase font-semibold">
              CONTACT INFORMATION
            </h2>
            <ul className="flex flex-col gap-2 font-thin text-sm">
              <li className="text-white transition ease-out duration-100 hover:text-opacity-80">
                +234 813 039 5444
              </li>
              <li className="text-white transition ease-out duration-100 hover:text-opacity-80">
                info@farmstarck.com
              </li>
              <li className="text-white transition ease-out duration-100 hover:text-opacity-80">
                Lorem ispum do not know the current address of farstack company
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:hidden">
          <FootAccordion items={accordionItems} />
        </div>
      </div>
      <div className="max-w-3xl m-auto flex flex-col gap-6 justify-center items-center">
        <h2 className="font-bold text-white text-sm md:text-base">
          STAY CONNNECTED
        </h2>
        <div className="flex space-x-6 items-end justify-end">
          <Link to="https://x.com/farmstarck?s=21&t=1LZ4ghO_eX6kdqKI8zG_vw">
            <svg
              width="20"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9314 0.856445H23.812L15.3337 10.6034L25.3084 23.864H17.4986L11.3824 15.8205L4.38256 23.864H0.49984L9.56867 13.4383L0 0.857506H8.00799L13.5368 8.20959L19.9314 0.856445ZM18.57 21.5286H20.7202L6.83958 3.06992H4.53231L18.57 21.5286Z"
                fill="#fff"
                fillOpacity="0.7"
              />
            </svg>
          </Link>
          <Link to="https://www.linkedin.com/company/farmstarck/">
            <svg
              width="20"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.02236 2.71429C6.02236 4.21336 4.80713 5.42859 3.30807 5.42859C1.809 5.42859 0.593772 4.21336 0.593772 2.71429C0.593772 1.21523 1.809 0 3.30807 0C4.80713 0 6.02236 1.21523 6.02236 2.71429ZM0.59375 8.82162H6.02234V27.1431H0.59375V8.82162ZM10.0939 8.82162H15.5224V9.96354C16.3714 9.66347 17.285 9.50019 18.2367 9.50019C22.7339 9.50019 26.3796 13.1459 26.3796 17.6431V27.1431H20.951V17.6431C20.951 16.144 19.7358 14.9288 18.2367 14.9288C16.7377 14.9288 15.5224 16.144 15.5224 17.6431V27.1431H10.0939V17.6431V8.82162Z"
                fill="#fff"
                fillOpacity="0.7"
              />
            </svg>
          </Link>
          {/* <Link to="/">
            <svg
              width="25"
              height="25"
              viewBox="0 0 33 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5004 2.13713C25.4918 1.20737 23.317 0.532546 21.0516 0.142647C21.0318 0.142016 21.012 0.145718 20.9937 0.15349C20.9755 0.161263 20.9591 0.172919 20.9459 0.187636C20.6741 0.682508 20.3569 1.32734 20.1455 1.82221C17.7427 1.46231 15.2991 1.46231 12.8963 1.82221C12.6848 1.31234 12.3677 0.682508 12.0807 0.187636C12.0656 0.157644 12.0203 0.142647 11.975 0.142647C9.70964 0.532546 7.54999 1.20737 5.52625 2.13713C5.51115 2.13713 5.49605 2.15213 5.48094 2.16712C1.37306 8.27055 0.240373 14.209 0.799166 20.0875C0.799166 20.1175 0.814268 20.1475 0.844473 20.1625C3.56292 22.142 6.17566 23.3417 8.75819 24.1364C8.80349 24.1514 8.8488 24.1364 8.8639 24.1065C9.468 23.2817 10.0117 22.4119 10.4799 21.4971C10.5101 21.4371 10.4799 21.3772 10.4195 21.3622C9.55862 21.0323 8.74308 20.6424 7.94265 20.1925C7.88224 20.1625 7.88224 20.0725 7.92755 20.0275C8.09368 19.9075 8.2598 19.7726 8.42593 19.6526C8.45614 19.6226 8.50144 19.6226 8.53165 19.6376C13.7269 21.992 19.3299 21.992 24.4648 19.6376C24.495 19.6226 24.5403 19.6226 24.5705 19.6526C24.7366 19.7876 24.9028 19.9075 25.0689 20.0425C25.1293 20.0875 25.1293 20.1775 25.0538 20.2075C24.2685 20.6723 23.4378 21.0472 22.577 21.3772C22.5166 21.3922 22.5015 21.4671 22.5166 21.5121C22.9999 22.4269 23.5435 23.2967 24.1325 24.1215C24.1778 24.1364 24.2232 24.1514 24.2685 24.1364C26.8661 23.3417 29.4788 22.142 32.1973 20.1625C32.2275 20.1475 32.2426 20.1175 32.2426 20.0875C32.9071 13.2942 31.1401 7.40077 27.5608 2.16712C27.5457 2.15213 27.5306 2.13713 27.5004 2.13713ZM11.2652 16.5034C9.70965 16.5034 8.41083 15.0788 8.41083 13.3242C8.41083 11.5697 9.67944 10.1451 11.2652 10.1451C12.8661 10.1451 14.1347 11.5847 14.1196 13.3242C14.1196 15.0788 12.851 16.5034 11.2652 16.5034ZM21.7917 16.5034C20.2361 16.5034 18.9373 15.0788 18.9373 13.3242C18.9373 11.5697 20.2059 10.1451 21.7917 10.1451C23.3925 10.1451 24.6611 11.5847 24.646 13.3242C24.646 15.0788 23.3925 16.5034 21.7917 16.5034Z"
                fill="#fff"
                fillOpacity="0.7"
              />
            </svg>
          </Link> */}
          <Link to="https://www.instagram.com/farmstarck/profilecard/?igsh=MWNrbzlic3drcGU2aw==">
            <svg
              width="22"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8809 6.21973C11.2166 6.21973 9.62038 6.88089 8.44351 8.05776C7.26663 9.23464 6.60547 10.8308 6.60547 12.4952C6.60547 14.1595 7.26663 15.7557 8.44351 16.9326C9.62038 18.1095 11.2166 18.7706 12.8809 18.7706C14.5453 18.7706 16.1415 18.1095 17.3183 16.9326C18.4952 15.7557 19.1564 14.1595 19.1564 12.4952C19.1564 10.8308 18.4952 9.23464 17.3183 8.05776C16.1415 6.88089 14.5453 6.21973 12.8809 6.21973ZM12.8809 16.5707C11.7997 16.5707 10.7627 16.1412 9.99814 15.3766C9.23357 14.612 8.80405 13.5751 8.80405 12.4938C8.80405 11.4126 9.23357 10.3756 9.99814 9.61104C10.7627 8.84648 11.7997 8.41695 12.8809 8.41695C13.9622 8.41695 14.9991 8.84648 15.7637 9.61104C16.5283 10.3756 16.9578 11.4126 16.9578 12.4938C16.9578 13.5751 16.5283 14.612 15.7637 15.3766C14.9991 16.1412 13.9622 16.5707 12.8809 16.5707Z"
                fill="#fff"
                fillOpacity="0.7"
              />
              <path
                d="M19.3995 7.4514C20.2075 7.4514 20.8625 6.79639 20.8625 5.9884C20.8625 5.1804 20.2075 4.52539 19.3995 4.52539C18.5915 4.52539 17.9365 5.1804 17.9365 5.9884C17.9365 6.79639 18.5915 7.4514 19.3995 7.4514Z"
                fill="#fff"
                fillOpacity="0.7"
              />
              <path
                d="M24.4582 4.50143C24.144 3.6901 23.6639 2.95331 23.0485 2.33822C22.4332 1.72313 21.6962 1.24329 20.8848 0.929421C19.9353 0.572975 18.9321 0.380239 17.9181 0.359419C16.6111 0.302418 16.1972 0.286133 12.8831 0.286133C9.5689 0.286133 9.14412 0.286133 7.84804 0.359419C6.83478 0.379174 5.83235 0.57195 4.88403 0.929421C4.07237 1.24292 3.33521 1.72263 2.71983 2.33777C2.10446 2.95291 1.62447 3.68989 1.31066 4.50143C0.954144 5.45091 0.76185 6.45415 0.742016 7.46816C0.683659 8.77373 0.666016 9.18766 0.666016 12.5032C0.666016 15.8173 0.666016 16.2394 0.742016 17.5382C0.762373 18.5533 0.953731 19.5549 1.31066 20.5063C1.62535 21.3175 2.10581 22.0542 2.72133 22.6693C3.33685 23.2843 4.0739 23.7642 4.88539 24.0783C5.83191 24.4491 6.83476 24.6556 7.85075 24.689C9.15769 24.746 9.57162 24.7636 12.8858 24.7636C16.1999 24.7636 16.6247 24.7636 17.9208 24.689C18.9347 24.6684 19.9378 24.4761 20.8875 24.1204C21.6988 23.8058 22.4355 23.3255 23.0508 22.7102C23.666 22.095 24.1463 21.3582 24.4609 20.547C24.8178 19.597 25.0092 18.5954 25.0295 17.5803C25.0879 16.2747 25.1055 15.8608 25.1055 12.5452C25.1055 9.22974 25.1055 8.80902 25.0295 7.51023C25.0137 6.48188 24.8204 5.46399 24.4582 4.50143ZM22.8052 17.4378C22.7964 18.2199 22.6537 18.9947 22.3831 19.7286C22.1793 20.2564 21.8673 20.7356 21.4671 21.1356C21.067 21.5355 20.5875 21.8472 20.0597 22.0507C19.3339 22.32 18.5673 22.4628 17.7932 22.4728C16.5039 22.5325 16.1402 22.5474 12.8342 22.5474C9.52548 22.5474 9.18754 22.5474 7.87383 22.4728C7.10015 22.4633 6.33391 22.3205 5.60875 22.0507C5.07903 21.8485 4.59767 21.5373 4.19581 21.1373C3.79394 20.7373 3.48052 20.2574 3.27581 19.7286C3.00906 19.0026 2.86637 18.2369 2.85374 17.4635C2.79538 16.1743 2.78181 15.8105 2.78181 12.5045C2.78181 9.19716 2.78181 8.85923 2.85374 7.54416C2.86251 6.76247 3.00527 5.98808 3.27581 5.25465C3.68974 4.18386 4.53796 3.34107 5.60875 2.93121C6.33426 2.66269 7.10029 2.51995 7.87383 2.50914C9.16447 2.45078 9.52683 2.4345 12.8342 2.4345C16.1416 2.4345 16.4809 2.4345 17.7932 2.50914C18.5673 2.51845 19.3341 2.66124 20.0597 2.93121C20.5875 3.13516 21.0669 3.4472 21.467 3.84733C21.8671 4.24745 22.1791 4.72682 22.3831 5.25465C22.6498 5.98066 22.7925 6.74637 22.8052 7.51973C22.8635 8.81038 22.8784 9.17273 22.8784 12.4801C22.8784 15.7861 22.8784 16.1417 22.8201 17.4391H22.8052V17.4378Z"
                fill="#fff"
                fillOpacity="0.7"
              />
            </svg>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=61562747617838&mibextid=LQQJ4d">
            <svg
              width="22"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2488 0.428711C6.16019 0.428711 0.391602 6.1973 0.391602 13.2859C0.391602 20.3745 6.16019 26.1431 13.2488 26.1431C20.3374 26.1431 26.106 20.3745 26.106 13.2859C26.106 6.1973 20.3374 0.428711 13.2488 0.428711ZM13.2488 2.57158C19.1792 2.57158 23.9631 7.35552 23.9631 13.2859C23.9657 15.8509 23.046 18.3313 21.3717 20.2744C19.6974 22.2176 17.3802 23.4939 14.8431 23.8706V16.4102H17.8945L18.3734 13.3105H14.8431V11.6177C14.8431 10.332 15.2663 9.18874 16.4695 9.18874H18.4035V6.48445C18.0638 6.43837 17.3449 6.33873 15.9863 6.33873C13.1491 6.33873 11.4863 7.83659 11.4863 11.2502V13.3105H8.56984V16.4102H11.4863V23.8438C8.98422 23.432 6.71009 22.144 5.07022 20.2099C3.43034 18.2758 2.53156 15.8216 2.53447 13.2859C2.53447 7.35552 7.31841 2.57158 13.2488 2.57158Z"
                fill="#fff"
                fillOpacity="0.7"
              />
            </svg>
          </Link>
          {/* <Link to="/">
            <svg
              width="22"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2488 0.286133C20.3498 0.286133 26.106 6.04229 26.106 13.1433C26.106 20.2443 20.3498 26.0005 13.2488 26.0005C10.9766 26.0042 8.74449 25.4028 6.78164 24.2583L0.396763 26.0005L2.13505 19.613C0.989598 17.6496 0.387824 15.4165 0.391619 13.1433C0.391619 6.04229 6.14778 0.286133 13.2488 0.286133ZM8.86707 7.10044L8.60993 7.11072C8.44345 7.12086 8.28076 7.1646 8.13164 7.23929C7.99217 7.31828 7.86485 7.41701 7.75364 7.53244C7.59935 7.67772 7.51192 7.80372 7.41807 7.92587C6.94251 8.54417 6.68646 9.30327 6.69035 10.0833C6.69292 10.7133 6.85749 11.3266 7.11464 11.9C7.6405 13.0597 8.50578 14.2876 9.6475 15.4255C9.92264 15.6993 10.1926 15.9745 10.4832 16.2303C11.9019 17.4793 13.5924 18.3801 15.4204 18.8609L16.1507 18.9728C16.3885 18.9856 16.6264 18.9676 16.8655 18.956C17.24 18.9367 17.6056 18.8353 17.9365 18.659C18.1049 18.5723 18.2692 18.4779 18.429 18.3762C18.429 18.3762 18.4842 18.3402 18.5897 18.2605C18.7632 18.1319 18.87 18.0406 19.014 17.8902C19.1207 17.7796 19.2132 17.6498 19.284 17.5019C19.3842 17.2923 19.4845 16.8925 19.5257 16.5595C19.5565 16.3049 19.5475 16.166 19.5437 16.0799C19.5385 15.9423 19.4241 15.7996 19.2994 15.7392L18.5511 15.4036C18.5511 15.4036 17.4325 14.9163 16.7485 14.6052C16.6769 14.5739 16.6003 14.5561 16.5222 14.5525C16.4343 14.5434 16.3454 14.5533 16.2616 14.5815C16.1777 14.6096 16.1009 14.6554 16.0362 14.7157C16.0298 14.7132 15.9437 14.7865 15.0141 15.9127C14.9607 15.9844 14.8872 16.0386 14.803 16.0684C14.7187 16.0982 14.6275 16.1022 14.5409 16.0799C14.4572 16.0574 14.3751 16.0291 14.2954 15.995C14.1359 15.9282 14.0807 15.9025 13.9714 15.8562C13.2335 15.5342 12.5503 15.0991 11.9464 14.5666C11.7844 14.4252 11.6339 14.2709 11.4796 14.1217C10.9738 13.6373 10.533 13.0893 10.1682 12.4915L10.0924 12.3693C10.0379 12.2872 9.99382 12.1987 9.96122 12.1057C9.91236 11.9167 10.0396 11.765 10.0396 11.765C10.0396 11.765 10.3521 11.423 10.4974 11.2379C10.6388 11.0579 10.7584 10.883 10.8355 10.7583C10.9872 10.514 11.0348 10.2633 10.9551 10.0692C10.5951 9.18973 10.2222 8.31415 9.83907 7.44501C9.76322 7.27272 9.53822 7.14929 9.33379 7.12487C9.26436 7.11715 9.19493 7.10944 9.1255 7.10429C8.95284 7.09572 8.77981 7.09743 8.60736 7.10944L8.86707 7.10044Z"
                fill="#fff"
                fillOpacity="0.7"
              />
            </svg>
          </Link> */}
        </div>
        <button
          onClick={scrollToTop}
          className="w-16 h-16 cursor-pointer flex justify-center items-center rounded-full border-2 border-opacity-60 border-solid border-white text-4xl text-white my-5 md:w-24 md:h-24"
        >
          &#8593;
        </button>
        <div className="flex flex-col-reverse space-x-3 items-center text-xs text-white text-opacity-75  md:flex-row">
          <p>© All Right Reserved 2024 Farmstarck</p>
          <Link to="/">Terms & Condition</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
