import HeroSection from "../../components/marketing/Home/HeroSection";
import ServiceSections from "../../components/marketing/Home/ServiceSections";
import Testimonial from "../../components/marketing/Home/Testimonial";
import Community from "../../components/marketing/Home/Community";
const HomePage = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <ServiceSections />
      <Testimonial />
      <Community />
    </div>
  );
};

export default HomePage;
