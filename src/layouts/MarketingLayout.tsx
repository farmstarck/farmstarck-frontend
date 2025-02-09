import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthService from "../services/AuthenticationService";
import { useEffect } from "react";

const MarketingLayout = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await AuthService.test();
        console.log("////:::::", data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
