import MarketPlacePage from "./MarketPlace";
import CategoryPage from "./Category";
import CategoryDisplayPage from "./CategoryDisplay";

export type ProductProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  pricePerUnit: number;
  discountPerUnit: number;
  type: string;
  unit: string;
  rating: GLfloat;
  sku: string;
  stockQuantity: number;
  isAvailable: boolean;
  imageUrl: string;
  reviews: ReviewProps[];
};

type ReviewProps = {
  rating: GLfloat;
  comment: string;
  author: string;
  date: string;
};
export { MarketPlacePage, CategoryPage, CategoryDisplayPage };
