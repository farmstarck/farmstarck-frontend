import GenericHero from "../../components/common/GenericHero";
import WriteUs from "../../components/marketing/Contact/WriteUs";
import MapSection from "../../components/marketing/Contact/MapSection";

const ContactPage = () => {
  return (
    <div>
      <GenericHero
        header="Get in Touch"
        paragraph="Join an amazing team working on some of the most important challenges facing the world today!"
      />
      <WriteUs />
      <MapSection />
    </div>
  );
};

export default ContactPage;
