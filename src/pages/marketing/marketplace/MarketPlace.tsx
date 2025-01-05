import ShopNavbar from "../../../components/marketing/Shop/ShopNavbar";
import HeroSection from "../../../components/marketing/Shop/landing/HeroSection";
import CategorySection from "../../../components/marketing/Shop/landing/CategorySection";
import ProductSection from "../../../components/marketing/Shop/landing/ProductSection";
import Request from "../../../components/marketing/Shop/landing/Request";
const MarketPlacePage = () => {
  return (
    <div>
      <ShopNavbar />
      <div className=" relative w-full flex flex-col mt-20 gap-8 max-w-6xl m-auto px-5 md:px-0 py-20">
        <HeroSection />
        <CategorySection />
        <ProductSection tag="popular products" />
        <ProductSection tag="best rated" />
      </div>
      <Request />
    </div>
  );
};

export default MarketPlacePage;
