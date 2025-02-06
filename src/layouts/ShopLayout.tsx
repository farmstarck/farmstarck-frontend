import { useState } from "react";
import jsonProducts from "../../data/products.json";
import { Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import ShopNavbar from "../components/marketing/Shop/ShopNavbar";
import { BackDrop } from "../components/common/BackDrop";
import RequestProductForm from "../components/marketing/Shop/landing/RequestProductForm";
import { ShopContext } from "../context/ShopContext";
import { ProductProps } from "../pages/marketing/marketplace";

const ShopLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unit, setUnit] = useState(1);
  const [updateCart, setUpdateCart] = useState<any>();
  const [updateWishlist, setUpdateWishList] = useState<any>();
  const [cartItems, setCartItems] = useState<any[]>();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  //---------- CART METHODS--------//

  // Increment quantity
  const handleIncrementUnit = (productId: string) => {
    setUnit(unit + 1);

    //handle logic
    const updatedCart: any = cartItems?.map((item: any) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //Decrement quantity
  const handleDecrementUnit = (productId: string) => {
    if (unit > 1) {
      setUnit(unit - 1);
      //handle logic
      const updatedCart: any = cartItems?.map((item: any) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );

      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      removeFromCart(productId);
    }
  };

  // Add product to cart
  const handleAddToCart = (productId: any) => {
    const tempCart = localStorage.getItem("cart");
    const cart = tempCart ? JSON.parse(tempCart) : [];

    // Find product
    const product = jsonProducts.find(
      (item: ProductProps) => item.id === productId
    );

    if (!product) {
      toast.error("Product not found");
      return;
    }

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item: ProductProps) => item.id === productId
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
  const handleToggleWishlist = (productId: string) => {
    const tempWishlist = localStorage.getItem("wishlist");
    let wishlist = tempWishlist ? JSON.parse(tempWishlist) : [];

    // Find product
    const product = jsonProducts.find(
      (item: ProductProps) => item.id === productId
    );

    if (!product) {
      toast.error("Product not found");
      return;
    }

    // Check if the product already exists in the wishlist
    const existingProductIndex = wishlist.findIndex(
      (item: ProductProps) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      wishlist = wishlist.filter((item: any) => item.id !== productId);
      toast.success("Product removed from wishlist");
    } else {
      // Add new product with an initial quantity of 1
      wishlist.push({ ...product });
      toast.success("Product added to wishlist successfully!");
    }

    // Update localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    setUpdateWishList(Date.now());
  };

  // Remove product from wishlist
  const removeFromWishlist = (productId: string) => {
    const tempWishlist = localStorage.getItem("wishlist");
    const wishlist = tempWishlist ? JSON.parse(tempWishlist) : [];

    const updatedWishlist = wishlist.filter(
      (item: any) => item.id !== productId
    );
    toast.success("Product removed wishlist");

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setUpdateWishList(Date.now());
  };

  //Clear wishlist
  const clearWishlist = () => {
    localStorage.removeItem("wishlist");
    setUpdateWishList(Date.now());
    toast.success("Wishlist cleared successfully");
  };

  return (
    <ShopContext.Provider
      value={{
        updateCart,
        setUpdateCart,
        updateWishlist,
        setUpdateWishList,
        handleIncrementUnit,
        handleDecrementUnit,
        handleAddToCart,
        removeFromCart,
        handleToggleWishlist,
        cartItems,
        removeFromWishlist,
        clearWishlist,
        unit,
      }}
    >
      <div>
        <header>
          <ShopNavbar
            setIsModalOpen={setIsModalOpen}
            updateCart={updateCart}
            updateWishlist={updateWishlist}
          />
        </header>
        <main>
          <Outlet />
        </main>

        <BackDrop isOpen={isModalOpen} handleClose={handleModalClose}>
          <RequestProductForm />
        </BackDrop>
      </div>
    </ShopContext.Provider>
  );
};

export default ShopLayout;
