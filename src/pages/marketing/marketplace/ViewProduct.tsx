import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import jsonProducts from "../../../../data/products.json";
import toast from "react-hot-toast";
import Ratings from "../../../components/common/Ratings";
import AddToCartImg from "../../../assets/svg/add-cart.svg";
import AddToWishlistImg from "../../../assets/svg/add-wishlist.svg";
import { ProductProps } from ".";
import { formatRelativeTime } from "../../../utils/formatRelativeTime";
import YellowRating from "../../../components/marketing/Shop/singleProducts/YellowRating";
import MayAlsoLike from "../../../components/marketing/Shop/singleProducts/MayAlsoLike";
import { BackDrop } from "../../../components/common/BackDrop";
import RequestProductForm from "../../../components/marketing/Shop/landing/RequestProductForm";
import Request from "../../../components/marketing/Shop/landing/Request";
import { useShopContext } from "../../../context/ShopContext";

const ViewProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setUpdateCart, setUpdateWishList } = useShopContext();

  const { id } = useParams();
  const [product, setProduct] = useState<any>();
  const [selectedImage, setSelectedImage] = useState<string | "">();
  const [unit, setUnit] = useState(1);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(true);
  const [isRaingsOpen, setIsRaingsOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  //Set main product image
  useEffect(() => {
    setSelectedImage(product?.imageUrl);
  }, [product]);

  // Handle closing modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Handle toggle for accordion
  const toggles = (
    value: boolean,
    setter: Dispatch<SetStateAction<boolean>>
  ) => {
    setter(value);
  };

  //---------- CART METHODS--------//

  // Increment quantity
  const handleIncrementUnit = () => {
    setUnit(unit + 1);

    //handle logic
    const updatedCart: any = cartItems?.map((item: any) =>
      item.id === product?.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //Decrement quantity
  const handleDecrementUnit = () => {
    if (unit > 1) {
      setUnit(unit - 1);
      //handle logic
      const updatedCart: any = cartItems?.map((item: any) =>
        item.id === product?.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      removeFromCart(product.id);
    }
  };

  // Add product to cart
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
      toast.success("Product added to cart");
    }

    setCartItems(cart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    setUpdateCart(Date.now());
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    const tempCart = localStorage.getItem("cart");
    const cart = tempCart ? JSON.parse(tempCart) : [];

    const updatedCart = cart.filter((item: any) => item.id !== productId);
    toast.success("Product removed cart");

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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

  // Fetch single product and check if item is in cart
  useEffect(() => {
    const tempProduct = jsonProducts.find((p: ProductProps) => p.id === id);

    // retrive cart items
    const cart = localStorage.getItem("cart");
    const parsedCart = cart ? JSON.parse(cart) : [];

    const filteredProduct = parsedCart.find(
      (p: any) => p.id === tempProduct?.id
    );

    if (filteredProduct) {
      setProduct(filteredProduct);
    } else {
      setProduct(tempProduct);
    }

    // setCartItems(parsedCart);
  }, [id, cartItems]);

  if (!product) return null;

  return (
    <div>
      <div className="w-full  pt-36 px-5 md:pt-40">
        <div className="max-w-5xl m-auto flex flex-col gap-5">
          {/* Product display section */}
          <div className="flex flex-col gap-10 items-center justify-between w-full md:flex-row">
            {/* images section */}
            <div className="flex flex-col-reverse gap-10 items-center w-full md:flex-row md:w-1/2">
              {/* product image gallery */}
              <div className="flex flex-row justify-between w-full sm:w-fit md:flex-col">
                {product?.images?.map((image: string, i: number) => (
                  <div
                    key={i}
                    className="p-1 shadow-lg round-md w-10 md:w-12"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="w-full rounded-md cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full sm:w-80 p-2 shadow-xl rounded-2xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt={selectedImage}
                  loading="lazy"
                  className="object-cover rounded-md w-full"
                />
              </div>
            </div>
            {/* details section */}
            <div className="flex flex-col gap-3 w-full md:w-1/2">
              {/* details header */}
              <div className="flex flex-col gap-2 w-full md:w-5/6">
                <h2 className="text-xl md:text-3xl lg:text-4xl leading-none font-bold capitalize mb-3 md:mb-0">
                  {product?.name}{" "}
                  <span className="py-1 px-2 rounded bg-secondary-dark text-white text-[0.5rem] md:text-btn-txt uppercase font-normal">
                    {product?.category}
                  </span>
                </h2>
                {/* details ratings */}
                <div className="flex items-center gap-3">
                  <Ratings
                    initialRating={Number(product?.rating)}
                    readonly={true}
                  />
                  <p className="text-xs">
                    {product?.rating} ({product?.reviews?.length} Reviews)
                  </p>
                </div>
              </div>
              {/* details unit price */}
              <div className="mt-3 flex gap-10 items-center w-full">
                {/* details price */}
                <div className="flex flex-col gap-2 w-1/2 sm:w-full">
                  <label className="text-gray-700 text-xs ">Price</label>
                  <div className="bg-secondary-light sm:w-48 h-10 rounded flex gap-5 items-center justify-center ">
                    <p className="font-bold text-gray-600 text-base md:text-lg">
                      N{" "}
                      {product.discountPerUnit > 1
                        ? product.discountPerUnit.toLocaleString()
                        : product.pricePerUnit.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              {/* details add to cart */}
              <div className="flex  items-start gap-4 mt-3 md:mt-10  md:items-center">
                {product &&
                  (product?.quantity == undefined || product?.quantity < 1) && (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className=" px-2 py-2 flex justify-center items-center gap-2 bg-transparent text-secondary-dark capitalize font-medium text-btn-txt md:text-sm rounded-md border border-secondary-dark  w-[100%] sm:w-52 sm:py-2"
                    >
                      <img src={AddToCartImg} alt="" className="w-4 md:w-30" />
                      Add to Cart
                    </button>
                  )}

                {product && product?.quantity > 0 && (
                  <div className="flex flex-col gap-2 py-2 w-[100%] sm:w-fit sm:py-2">
                    <div className="border border-secondary-light p-2 rounded flex gap-5 items-center justify-between w-[100%] sm:w-52 sm:py-2 ">
                      <span
                        onClick={handleDecrementUnit}
                        className="cursor-pointer w-5 h-5 bg-gray-500 text-white text-base rounded flex items-center justify-center"
                      >
                        -
                      </span>
                      <span className="text-sm">{product?.quantity}</span>
                      <span
                        onClick={handleIncrementUnit}
                        className="cursor-pointer w-5 h-5 bg-secondary-dark text-white text-base rounded flex items-center justify-center"
                      >
                        +
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => handleToggleWishlist(product)}
                  className="px-2 py-2 bg-secondary-cart text-white uppercase font-medium text-sm rounded-md md:px-3    sm:py-3"
                >
                  <img src={AddToWishlistImg} alt="" className="w-4" />
                </button>
              </div>
            </div>
          </div>
          {/* Product description section */}
          <div className="py-5">
            <p className="text-xs md:text-sm text-gray-700">
              {product.description}
            </p>
          </div>
          {/* Product details section */}
          <div className="bg-secondary-light rounded-md md:p-3">
            {/* Accordion Header */}
            <button
              onClick={() => toggles(!isDetailsOpen, setIsDetailsOpen)}
              className="w-full flex justify-between items-center p-3 bg-transparent text-left focus:outline-none"
            >
              <span className="capitalize text-xs">Product Details</span>
              <span
                className={`transform transition-transform duration-300 ${
                  isDetailsOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-2"
                >
                  <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
                </svg>
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                isDetailsOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 pt-8">
                <div className="flex flex-col gap-y-3">
                  <div className="flex gap-5">
                    <p className="w-16 text-sm text-gray-700 ">Category:</p>
                    <p className="text-sm uppercase text-gray-700 ">
                      {product.category}
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <p className="w-16 text-sm text-gray-700 ">Type:</p>
                    <p className="text-sm  text-gray-700 ">{product.type}</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="w-16 text-sm text-gray-700 ">Stock:</p>
                    <p className="text-sm  text-gray-700 ">
                      {product.unit} Units
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <p className="w-16 text-sm text-gray-700 ">SKU:</p>
                    <p className="text-sm  text-gray-700 ">{product.sku}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Delivery & Returns section */}
          <div className="bg-secondary-light rounded-md md:p-3">
            {/* Accordion Header */}
            <button
              onClick={() => toggles(!isDeliveryOpen, setIsDeliveryOpen)}
              className="w-full flex justify-between items-center p-3 bg-transparent text-left focus:outline-none"
            >
              <span className="capitalize text-xs">Delivery & Returns</span>
              <span
                className={`transform transition-transform duration-300 ${
                  isDeliveryOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-2"
                >
                  <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
                </svg>
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                isDeliveryOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 pt-8">
                <div className="flex flex-col gap-y-8 md:gap-y-3">
                  <div className="flex flex-col  gap-3 md:gap-5">
                    <p className="text-sm uppercase text-gray-700 ">
                      farmstarck delivery & returns
                    </p>
                    <p className="text-xs md:text-sm text-gray-700 ">
                      Item ordered will be handled by the logistics company.{" "}
                      <Link
                        to="/underconstruction"
                        className="text-blue-600 underline"
                      >
                        {" "}
                        Learn More
                      </Link>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-5">
                    <p className="text-sm uppercase text-gray-700 ">
                      farmstarck products return policy
                    </p>
                    <p className="text-xs md:text-sm text-gray-700 ">
                      A return policy is a set of rules a retailer creates to
                      manage how customers return and exchange unwanted
                      merchandise they've purchased{" "}
                      <Link
                        to="/underconstruction"
                        className="text-blue-600 underline"
                      >
                        {" "}
                        Learn More
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Product rating section */}
          <div className="bg-secondary-light rounded-md md:p-3">
            {/* Accordion Header */}
            <button
              onClick={() => toggles(!isRaingsOpen, setIsRaingsOpen)}
              className="w-full flex justify-between items-center p-3 bg-transparent text-left focus:outline-none"
            >
              <span className="capitalize text-xs">
                Product Rating & Reviews
              </span>
              <span
                className={`transform transition-transform duration-300 ${
                  isRaingsOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-2"
                >
                  <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
                </svg>
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                isRaingsOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 pt-8">
                <div className="flex flex-col gap-y-8 md:gap-y-3">
                  {product?.reviews?.map((review: any, i: any) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-between gap-3 md:gap-5"
                      >
                        <div>
                          <p className="text-sm  text-gray-700 ">
                            BY {review.author}
                          </p>
                          <p className="text-xs md:text-sm text-gray-700 ">
                            {review.comment}
                          </p>
                          <YellowRating
                            initialRating={review.rating}
                            readonly
                          />
                        </div>
                        <div>
                          <p className="text-gray-700 text-xs md:text-sm">
                            {formatRelativeTime(review.date)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* May also like */}
          <MayAlsoLike
            tag="You may also like "
            setUpdateCart={setUpdateCart}
            setUpdateWishList={setUpdateWishList}
          />
        </div>
      </div>

      <Request setIsModalOpen={setIsModalOpen} />

      <BackDrop isOpen={isModalOpen} handleClose={handleModalClose}>
        <RequestProductForm />
      </BackDrop>
    </div>
  );
};

export default ViewProduct;
