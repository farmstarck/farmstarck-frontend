import { useEffect, useState } from "react";
import { useShopContext } from "../../../context/ShopContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import DeleteImg from "../../../assets/svg/delete-bin.svg";
import DefaultImg from "../../../assets/svg/cart-default.svg";

const cartHeaders = [
  { key: 1, item: "product" },
  { key: 2, item: "price" },
  { key: 3, item: "quantity" },
  { key: 4, item: "total" },
  { key: 5, item: "action" },
];

const Cart = () => {
  const { setUpdateCart } = useShopContext();
  const [cartItems, setCartItems] = useState([]);
  const [deliveryMode, setDeliveryMode] = useState("free");
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);

  const handleDeliveryToggle = (mode: string) => {
    if (deliveryMode === mode) {
      setDeliveryMode("");
    } else {
      setDeliveryMode(mode);
    }
    setDeliveryFee(mode === "door" ? 5000 : 0);
  };

  // Increment quantity
  const handleIncrementUnit = (productId: string) => {
    //handle logic
    const updatedCart: any = cartItems?.map((item: any) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //Decrement quantity
  const handleDecrementUnit = (productId: string) => {
    const uniqueItem: any = cartItems?.find(
      (item: any) => item.id === productId
    );

    if (uniqueItem?.quantity === 1 && uniqueItem) return;

    //handle logic
    const updatedCart: any = cartItems?.map((item: any) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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

  //Clear cart
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    setUpdateCart(Date.now());
    toast.success("Cart cleared successfully");
  };

  // Fetch single product and check if item is in cart
  useEffect(() => {
    // retrive cart items
    const cart = localStorage.getItem("cart");
    const parsedCart = cart ? JSON.parse(cart) : [];

    setCartItems(parsedCart);
  }, []);

  // Calculate total amount
  useEffect(() => {
    let total = 0;
    cartItems?.forEach((item: any) => {
      const price = item?.discountPerUnit || item?.pricePerUnit;
      total += item.quantity * price;
    });
    setTotalAmount(total);
  }, [cartItems]);

  return (
    <div className="w-full  pt-36 px-5 md:pt-48">
      <div className="max-w-4xl mx-auto w-full">
        {cartItems?.length > 0 && (
          <>
            <header className="w-full flex items-center justify-between">
              <h2 className="font-bold text-xl text-gray-700">
                My Cart{" "}
                <span className="text-gray-400 text-base font-light pl-1">
                  ({cartItems?.length})
                </span>
              </h2>
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => clearCart()}
              >
                <img src={DeleteImg} alt="" className="w-4" />
                <span className="text-[.9rem]">Delete All</span>
              </div>
            </header>

            {/* Web view */}

            <div className="mt-10 w-full overflow-scroll whitespace-nowrap hidden sm:block">
              <table className="border-collapse w-full px-5 overflow-hidden min-w-[550px]">
                <thead className="">
                  <tr className="text-left border-b border-gray-300">
                    {cartHeaders.map((header) => (
                      <th
                        key={header.key}
                        className="uppercase text-xs text-gray-600 font-normal  py-5 "
                      >
                        {header.item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item: any) => {
                    const price = item?.discountPerUnit || item?.pricePerUnit;
                    const total = item?.quantity * price;
                    return (
                      <tr key={item?.id}>
                        <td className="flex items-center gap-1  w-[250px] sm:w-auto">
                          <div className="flex gap-2 items-center">
                            <img
                              src={item?.imageUrl}
                              alt="product image"
                              className="w-12 h-12 rounded-md"
                            />
                            <div>
                              <p className="text-[0.5rem] uppercase text-gray-500">
                                {item?.category}
                              </p>
                              <p className="text-xs uppercase ">{item?.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="font-bold text-sm text-gray-600">
                          N {price.toLocaleString()}
                        </td>
                        <td className="">
                          <div className=" flex gap-5 items-center justify-between ">
                            <span
                              onClick={() => handleDecrementUnit(item?.id)}
                              className={` w-5 h-5 ${
                                item?.quantity == 1
                                  ? "bg-gray-500 cursor-default"
                                  : "bg-secondary-dark cursor-pointer"
                              } text-white text-base rounded flex items-center justify-center`}
                            >
                              -
                            </span>
                            <span className="text-sm">{item?.quantity}</span>
                            <span
                              onClick={() => handleIncrementUnit(item?.id)}
                              className="cursor-pointer w-5 h-5 bg-secondary-dark text-white text-base rounded flex items-center justify-center"
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td className="font-bold text-sm text-gray-600 ">
                          N {total.toLocaleString()}
                        </td>
                        <td>
                          <img
                            src={DeleteImg}
                            alt=""
                            className="w-[16px] cursor-pointer"
                            onClick={() => removeFromCart(item?.id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col gap-10 w-full mt-10 sm:hidden">
              {cartItems?.map((item: any) => {
                const price = item?.discountPerUnit || item?.pricePerUnit;
                const total = item?.quantity * price;
                return (
                  <div className="flex flex-col gap-3 shadow-md p-5 rounded-md">
                    <div className="flex gap-4">
                      <img
                        src={item?.imageUrl}
                        alt={item?.name}
                        className="w-20 h-20 rounded-md"
                      />
                      <div>
                        <p className="text-btn-txt uppercase text-gray-500">
                          {item?.category}
                        </p>
                        <p className="capitalize text-xs">{item?.name}</p>
                        <div className="flex gap-10 pt-1">
                          <div className="leading-none">
                            <p className="text-btn-txt uppercase text-gray-500">
                              Unit:
                            </p>
                            <p className="capitalize text-sm text-gray-700 font-medium">
                              N {price.toLocaleString()}
                            </p>
                          </div>
                          <div className="leading-none">
                            <p className="text-btn-txt uppercase text-gray-500">
                              item total:
                            </p>
                            <p className="capitalize text-sm text-gray-700 font-medium">
                              N {total.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between pt-5 items-center w-full">
                      <img
                        src={DeleteImg}
                        alt=""
                        className="w-[20px] cursor-pointer"
                        onClick={() => removeFromCart(item?.id)}
                      />
                      <div className=" flex gap-5 items-center justify-between ">
                        <span
                          onClick={() => handleDecrementUnit(item?.id)}
                          className={`w-6 h-6 ${
                            item?.quantity == 1
                              ? "bg-gray-500 cursor-default"
                              : "bg-secondary-dark cursor-pointer "
                          } text-white text-lg rounded flex items-center justify-center`}
                        >
                          -
                        </span>
                        <span className="text-sm">{item?.quantity}</span>
                        <span
                          onClick={() => handleIncrementUnit(item?.id)}
                          className="cursor-pointer w-6 h-6 bg-secondary-dark text-white text-lg rounded flex items-center justify-center"
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtoal and total view */}
            <div className="flex flex-col justify-between gap-10 bg-secondary-light rounded-md p-7 md:p-12  mt-14 md:flex-row md:gap-y-5">
              {/* shipping select */}
              <div className="flex flex-col gap-4">
                <h3>Choose shipping mode:</h3>
                {/* shipping options */}
                <div
                  className="flex items-center gap-3"
                  onClick={() => handleDeliveryToggle("free")}
                >
                  <div
                    className={`w-3 h-3 rounded-full border border-secondary-dark ${
                      deliveryMode === "free" && "bg-secondary-dark"
                    } cursor-pointer`}
                  ></div>
                  <p className="text-sm text-gray-600">
                    Store Pickup (in 20mins) -{" "}
                    <span className="text-gray-700 font-bold block md:inline-block">
                      FREE
                    </span>
                  </p>
                </div>
                <div
                  className="flex items-center gap-3"
                  onClick={() => handleDeliveryToggle("door")}
                >
                  <div
                    className={`w-3 h-3 rounded-full border border-secondary-dark ${
                      deliveryMode === "door" && "bg-secondary-dark"
                    } cursor-pointer`}
                  ></div>
                  <p className="text-sm text-gray-600">
                    Doorstep Delivery (2-3 days) -
                    <span className="text-gray-700 font-bold block md:inline-block">
                      N,5000
                    </span>
                  </p>
                </div>
              </div>
              {/* Total view */}
              <div className="flex flex-col gap-2 w-full sm:w-1/2 md:w-1/3">
                <div className="flex justify-between gap-3">
                  <p className="uppercase text-xs text-gray-700">Subtoal</p>
                  <p className="text-sm text-gray-700 font-bold ">
                    N {totalAmount?.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between gap-3">
                  <p className="uppercase text-xs text-gray-700">shipping</p>
                  <p className="text-sm text-gray-700 font-bold ">
                    N{" "}
                    {deliveryMode === "door" ? deliveryFee.toLocaleString() : 0}
                  </p>
                </div>
                <div className="flex justify-between gap-3">
                  <p className="uppercase text-xs text-gray-700">total</p>
                  <p className="text-sm text-gray-700 font-bold ">
                    N {(totalAmount + deliveryFee).toLocaleString()}
                  </p>
                </div>
                <Link
                  to="/marketplace"
                  className="bg-secondary-dark py-2 mt-2 w-full flex justify-center items-center sm:py-2 text-white text-sm sm:text-sm rounded-md cursor-pointer font-medium"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
        {cartItems?.length === 0 && (
          <div className="flex flex-col items-center gap-4 text-center w-full mt-10">
            <img
              src={DefaultImg}
              alt="no cart image"
              className="w-32 sm:w-52"
            />
            <p className="text-base sm:text-xl text-gray-600">
              You have not added any item to your cart!
            </p>
            <Link
              to="/marketplace"
              className="bg-secondary-dark py-2 px-14 sm:px-20 sm:py-2 text-white text-sm sm:text-base rounded-md cursor-pointer font-medium"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
