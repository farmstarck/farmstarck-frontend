import { useNavigate } from "react-router-dom";
import { ProductProps } from "../../../../pages/marketing/marketplace";
import toast from "react-hot-toast";
import Ratings from "../../../common/Ratings";
import AddToCartImg from "../../../../assets/svg/add-cart.svg";
import AddToWishlistImg from "../../../../assets/svg/add-wishlist.svg";
import { convertProductNameToSlugs } from "../../../../utils/slugifyProductName";
import { Dispatch, SetStateAction, useState } from "react";

type ProductThumbnailProps = {
  id: string;
  name: string;
  category: string;
  pricePerUnit: number;
  discountPerUnit: number;
  type: string;
  rating: number;
  stockQuantity: number;
  imageUrl: string;
  setUpdateCart: Dispatch<SetStateAction<any>>;
  setUpdateWishList: Dispatch<SetStateAction<any>>;
};

const ScrollProductThumbnail: React.FC<ProductThumbnailProps> = ({
  id,
  name,
  category,
  pricePerUnit,
  discountPerUnit,
  type,
  rating,
  stockQuantity,
  imageUrl,
  setUpdateCart,
  setUpdateWishList,
}) => {
  const navigate = useNavigate();
  const [productItems] = useState({
    id,
    name,
    category,
    pricePerUnit,
    discountPerUnit,
    type,
    rating,
    stockQuantity,
    imageUrl,
  });

  const handleAddToCart = (product: any) => {
    const tempCart = localStorage.getItem("cart");
    const cart = tempCart ? JSON.parse(tempCart) : [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item: ProductProps) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Increase quantity of the existing product
      cart[existingProductIndex].quantity += 1;
      toast.success("Product already in cart");
    } else {
      // Add new product with an initial quantity of 1
      cart.push({ ...product, quantity: 1 });
      toast.success("Product added to cart successfully!");
    }

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    setUpdateCart(Date.now());
  };

  // toggle (add / remove)  wishlist
  const handleToggleWishlist = (product: any) => {
    const tempWishlist = localStorage.getItem("wishlist");
    let wishlist = tempWishlist ? JSON.parse(tempWishlist) : [];

    // Check if the product already exists in the wishlist
    const existingProductIndex = wishlist.findIndex(
      (item: ProductProps) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      wishlist = wishlist.filter((item: any) => item.id !== product.id);
      toast.success("Product removed from wishlist");
    } else {
      // Add new product with an initial quantity of 1
      wishlist.push({ ...product, quantity: 1 });
      toast.success("Product added to wishlist successfully!");
    }

    // Update localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    setUpdateWishList(Date.now());
  };

  const navigateToRoute = () => {
    const productSlug = convertProductNameToSlugs(name);
    navigate(`/marketplace/product/${productSlug}/${id}`);
  };
  return (
    <div className="">
      <div className="relative w-[180px] overflow-hidden flex flex-col gap-2 md:gap-5 p-3  rounded-lg bg-secondary-light md:p-6 md:w-[300px]">
        <div
          onClick={navigateToRoute}
          className="flex flex-col h-60 gap-2 cursor-pointer items-stretch md:flex-row md:h-32"
        >
          <div className="w-full h-32 overflow-hidden  md:w-1/2">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full rounded-md overflow-hidden"
            />
          </div>
          <div className=" w-full flex flex-col md:w-1/2">
            <div className=" flex gap-2 items-baseline justify-between md:justify-start">
              <p className="uppercase text-btn-txt text-gray-400">{category}</p>
              <span
                className={`${
                  type === "bulk" ? "bg-secondary-dark" : "bg-gray-500"
                } uppercase text-white text-[0.4rem] rounded-[2px] py-[0.1rem] px-2 leading-none`}
              >
                {type}
              </span>
            </div>
            <div>
              <h3 className="text-xs md:text-sm font-subHeading2 uppercase text-gray-800 line-clamp-2">
                {name}
              </h3>
              <Ratings initialRating={rating} readonly={true} />
            </div>
            <div className="border-t border-gray-300 py-1 flex flex-col ">
              <div className="flex gap-2 items-center">
                <p className=" text-xs md:text-sm font-subHeading2  md:font-extrabold">
                  N
                  {discountPerUnit > 0
                    ? discountPerUnit.toLocaleString()
                    : pricePerUnit.toLocaleString()}
                </p>
                <p className="text-btn-txt relative text-gray-400 md:text-black">
                  {discountPerUnit > 0 && `N${pricePerUnit.toLocaleString()}`}
                  <span
                    style={{
                      position: "absolute",
                      width: " 100%",
                      height: "1.5px",
                      background: "red",
                      top: "50%",
                      left: 0,
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  ></span>
                </p>
              </div>
              <p className="text-btn-txt text-gray-500">
                Stock: {stockQuantity} {type}(s)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 sm:flex-row md:items-center">
          <button
            onClick={() => handleAddToCart(productItems)}
            className="w-full px-2 py-2 flex justify-center items-center gap-2 bg-transparent text-secondary-dark capitalize font-subHeading2 text-btn-txt md:text-sm rounded-md border border-secondary-dark md:px-8 md:w-auto sm:py-1"
          >
            <img src={AddToCartImg} alt="" className="w-4 md:w-30" />
            Add to Cart
          </button>
          <button
            onClick={() => handleToggleWishlist(productItems)}
            className="px-2 py-2 bg-secondary-cart text-white uppercase font-subHeading2 text-sm rounded-md md:px-3 hidden sm:block"
          >
            <img src={AddToWishlistImg} alt="" className="w-4" />
          </button>
        </div>
        <button
          onClick={() => handleToggleWishlist(productItems)}
          className="absolute top-1 right-1 px-2 py-2 bg-secondary-cart text-white uppercase font-subHeading2 text-sm rounded-full  block sm:hidden"
        >
          <img src={AddToWishlistImg} alt="" className="w-3" />
        </button>
      </div>
    </div>
  );
};

export default ScrollProductThumbnail;
