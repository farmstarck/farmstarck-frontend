import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import MarketingLayout from "../layouts/MarketingLayout";
import ShopLayout from "../layouts/ShopLayout";
import {
  MarketPlacePage,
  CategoryPage,
  CategoryDisplayPage,
  ViewProductPage,
  CartPage,
  WishlistPage,
  CheckoutPage,
  AllProductDisplayPage,
} from "../pages/marketing/marketplace";

// Lazy load pages
const HomePage = lazy(() => import("../pages/marketing/Home"));
const AboutPage = lazy(() => import("../pages/marketing/About"));
const ContactPage = lazy(() => import("../pages/marketing/Contact"));
const CommunityPage = lazy(() => import("../pages/marketing/Community"));
const ServicesPage = lazy(() => import("../pages/marketing/Services"));
const InventoryManagementPage = lazy(
  () => import("../pages/marketing/InventoryManagement")
);
const BecomeAFarmerPage = lazy(
  () => import("../pages/marketing/BecomeAFarmer")
);
const FarmFundingPage = lazy(() => import("../pages/marketing/FarmFunding"));
const InvestmentOpportunityPage = lazy(
  () => import("../pages/marketing/InvestmentOpportunity")
);
const BecomeAPartnerPage = lazy(
  () => import("../pages/marketing/BecomeAPartner")
);
const BecomeAMerchantPage = lazy(
  () => import("../pages/marketing/BecomeAMerchant")
);
const CareerPage = lazy(() => import("../pages/marketing/Career"));
const UnderConstructionPage = lazy(
  () => import("../pages/marketing/UnderConstruction")
);

// Define the marketing routes and their corresponding components
const MarketingRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MarketingLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "community",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CommunityPage />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: "inventory-management",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <InventoryManagementPage />
          </Suspense>
        ),
      },
      {
        path: "become-a-farmer",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BecomeAFarmerPage />
          </Suspense>
        ),
      },
      {
        path: "farm-funding",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FarmFundingPage />
          </Suspense>
        ),
      },
      {
        path: "investment-opportunity",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <InvestmentOpportunityPage />
          </Suspense>
        ),
      },
      {
        path: "become-partner",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BecomeAPartnerPage />
          </Suspense>
        ),
      },
      {
        path: "become-merchant",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BecomeAMerchantPage />
          </Suspense>
        ),
      },
      {
        path: "career",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CareerPage />
          </Suspense>
        ),
      },
      {
        path: "underconstruction",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UnderConstructionPage />
          </Suspense>
        ),
      },
      // Marketplace routes
      // Shop routes under ShopLayout
      {
        path: "marketplace",
        element: <ShopLayout />, // Wrapping shop-related routes with ShopLayout
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <MarketPlacePage />
              </Suspense>
            ),
          },
          {
            path: "categories",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CategoryPage />
              </Suspense>
            ),
          },
          {
            path: "products/:name",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <AllProductDisplayPage />
              </Suspense>
            ),
          },
          {
            path: "categories/:name",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CategoryDisplayPage />
              </Suspense>
            ),
          },

          {
            path: "product/:slug/:id",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ViewProductPage />
              </Suspense>
            ),
          },
          {
            path: "cart",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CartPage />
              </Suspense>
            ),
          },
          {
            path: "wishlist",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <WishlistPage />
              </Suspense>
            ),
          },
          {
            path: "checkout",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <CheckoutPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];

export default MarketingRoutes;
