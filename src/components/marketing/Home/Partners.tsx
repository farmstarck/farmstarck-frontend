import WavetifyImg from "../../../assets/svg/wavetify.svg";
import ArolonaImg from "../../../assets/svg/arolana.svg";
import IbrandImg from "../../../assets/svg/ibrand.svg";
import FugeImg from "../../../assets/svg/fuge.svg";
import KoinwaImg from "../../../assets/svg/koinwa.svg";

const stats = [
  { id: 1, value: WavetifyImg },
  { id: 2, value: ArolonaImg },
  { id: 3, value: IbrandImg },
  { id: 4, value: FugeImg },
  { id: 5, value: KoinwaImg },
];

const Partners = () => {
  return (
    <div className="bg-secondary-light pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h5 className="text-xs uppercase text-center mb-10">our partners</h5>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-center items-center md:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <img src={stat.value} alt="" className="w-14 md:w-20" />
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Partners;
