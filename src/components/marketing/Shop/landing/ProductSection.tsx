import { useState } from "react";
import jsonProducts from "../../../../../products.json";
import FilterIcon from "../../../../assets/svg/filter-icon.svg";
import ProductThumbnail from "./ProductThumbnail";

type ProductSectionProps = {
  tag: string;
};

const ProductSection: React.FC<ProductSectionProps> = ({ tag }) => {
  const [products] = useState(jsonProducts);

  return (
    <div className="flex flex-col gap-5 py-3 md:py-10">
      <div className="flex justify-between items-center">
        <h5 className="capitalize text-gray-600 text-sm md:text-base">{tag}</h5>
        <div className="w-4 cursor-pointer md:w-5">
          <img src={FilterIcon} alt="" loading="lazy" className="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-y-5  md:gap-y-10 gap-x-3 md:gap-x-16 md:grid-cols-3 justify-center items-stretch">
        {products?.map((product) => (
          <ProductThumbnail key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
