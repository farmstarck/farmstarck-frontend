import Img1 from "../../../assets/images/community-media-1.png";

const Media = () => {
  return (
    <div className="space-y-4 sm:space-y-8">
      <img src={Img1} alt="" loading="lazy" />
      <img src={Img1} alt="" loading="lazy" />
    </div>
  );
};

export default Media;
