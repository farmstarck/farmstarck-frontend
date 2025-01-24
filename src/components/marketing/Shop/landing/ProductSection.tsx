import { Dispatch, SetStateAction, useState } from "react";
import jsonProducts from "../../../../../data/products.json";
import ProductThumbnail from "./ProductThumbnail";
import { Link } from "react-router-dom";

type ProductSectionProps = {
  tag: string;
  setUpdateCart: Dispatch<SetStateAction<any>>;
  setUpdateWishList: Dispatch<SetStateAction<any>>;
};

const ProductSection: React.FC<ProductSectionProps> = ({
  tag,
  setUpdateCart,
  setUpdateWishList,
}) => {
  const [products] = useState(jsonProducts);

  return (
    <div className="flex flex-col gap-5 sm:px-5 py-3 md:py-10">
      <div className="flex justify-between items-center">
        <h5 className="capitalize text-gray-600 text-sm md:text-base">{tag}</h5>
        <Link
          to={tag}
          className="text-gray-500 text-sm transition ease-out duration-200 hover:text-secondary-dark"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 w-full gap-y-5  md:gap-y-10 gap-x-3 md:gap-x-16 lg:grid-cols-3 justify-center items-stretch">
        {products?.map((product) => (
          <ProductThumbnail
            key={product.id}
            {...product}
            setUpdateCart={setUpdateCart}
            setUpdateWishList={setUpdateWishList}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
