import { useState } from "react";
import { Outlet } from "react-router-dom";
import ShopNavbar from "../components/marketing/Shop/ShopNavbar";
import { BackDrop } from "../components/common/BackDrop";
import RequestProductForm from "../components/marketing/Shop/landing/RequestProductForm";
import { ShopContext } from "../context/ShopContext";

const ShopLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateCart, setUpdateCart] = useState();
  const [updateWishlist, setUpdateWishList] = useState();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ShopContext.Provider
      value={{ updateCart, setUpdateCart, updateWishlist, setUpdateWishList }}
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
