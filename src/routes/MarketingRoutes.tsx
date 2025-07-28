import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import BaseLoader from "../components/loaders/BaseLoader";
import MarketingLayout from "../layouts/MarketingLayout";
import ShopLayout from "../layouts/ShopLayout";
import {
  SigninPage,
  SignupPage,
  VerifyEmailPage,
  CreatePasswordPage,
  ForgotPasswordPage,
} from "../pages/marketing/auth";
import {
  ShopPage,
  CategoryPage,
  CategoryDisplayPage,
  ViewProductPage,
  CartPage,
  WishlistPage,
  CheckoutPage,
  AllProductDisplayPage,
} from "../pages/marketing/shop";

// Lazy load pages
const HomePage = lazy(() => import("../pages/marketing/Home"));
const MarketPlacePage = lazy(() => import("../pages/marketing/MarketPlace"));
const ProcurementPage = lazy(() => import("../pages/marketing/Procurement"));
const FoodvaultPage = lazy(() => import("../pages/marketing/Foodvault"));
const SmartInventoryPage = lazy(
  () => import("../pages/marketing/SmartInventory")
);
const BecomeMerchantPage = lazy(
  () => import("../pages/marketing/BecomeMerchant")
);
const FarmEmpowermentPage = lazy(
  () => import("../pages/marketing/FarmEmpowerment")
);
const BusinessJourneyPage = lazy(
  () => import("../pages/marketing/BusinessJourney")
);
const InvestmentPage = lazy(() => import("../pages/marketing/Investment"));
const AboutPage = lazy(() => import("../pages/marketing/About"));
const BlogPage = lazy(() => import("../pages/marketing/Blog"));
const ContactPage = lazy(() => import("../pages/marketing/Contact"));
const CareerPage = lazy(() => import("../pages/marketing/Career"));
const FaqPage = lazy(() => import("../pages/marketing/Faq"));

const AboutsPage = lazy(() => import("../pages/marketing/Aboutss"));
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
const UnderConstructionPage = lazy(
  () => import("../pages/marketing/UnderConstruction")
);

// Define the marketing routes and their corresponding components
const MarketingRoutes: RouteObject[] = [
  // auth routes
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <SigninPage />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <SignupPage />
          </Suspense>
        ),
      },
      {
        path: "verify-email",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <VerifyEmailPage />
          </Suspense>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <ForgotPasswordPage />
          </Suspense>
        ),
      },
      {
        path: "create-password/:token",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <CreatePasswordPage />
          </Suspense>
        ),
      },
    ],
  },
  // web pages routes
  {
    path: "/",
    element: <MarketingLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "marketplace",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <MarketPlacePage />
          </Suspense>
        ),
      },
      {
        path: "procurement",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <ProcurementPage />
          </Suspense>
        ),
      },
      {
        path: "foodvault",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <FoodvaultPage />
          </Suspense>
        ),
      },
      {
        path: "inventory",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <SmartInventoryPage />
          </Suspense>
        ),
      },
      {
        path: "become-merchant",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <BecomeMerchantPage />
          </Suspense>
        ),
      },
      {
        path: "farm-empowerment",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <FarmEmpowermentPage />
          </Suspense>
        ),
      },
      {
        path: "business",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <BusinessJourneyPage />
          </Suspense>
        ),
      },
      {
        path: "investment",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <InvestmentPage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "career",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <CareerPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "faq",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <FaqPage />
          </Suspense>
        ),
      },
      {
        path: "abouts",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <AboutsPage />
          </Suspense>
        ),
      },

      {
        path: "community",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <CommunityPage />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: "inventory-management",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <InventoryManagementPage />
          </Suspense>
        ),
      },
      {
        path: "become-a-farmer",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <BecomeAFarmerPage />
          </Suspense>
        ),
      },
      {
        path: "farm-funding",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <FarmFundingPage />
          </Suspense>
        ),
      },
      {
        path: "investment-opportunity",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <InvestmentOpportunityPage />
          </Suspense>
        ),
      },
      {
        path: "become-partner",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <BecomeAPartnerPage />
          </Suspense>
        ),
      },
      {
        path: "become-merchants",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <BecomeAMerchantPage />
          </Suspense>
        ),
      },

      {
        path: "underconstruction",
        element: (
          <Suspense fallback={<BaseLoader />}>
            <UnderConstructionPage />
          </Suspense>
        ),
      },
      // Marketplace routes
      // Shop routes under ShopLayout
      {
        // path: "shop",
        path: "underconstruction",
        element: <ShopLayout />, // Wrapping shop-related routes with ShopLayout
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<BaseLoader />}>
                <ShopPage />
              </Suspense>
            ),
          },
          {
            path: "categories",
            element: (
              <Suspense fallback={<BaseLoader />}>
                <CategoryPage />
              </Suspense>
            ),
          },
          {
            path: "products/:name",
            element: (
              <Suspense fallback={<BaseLoader />}>
                <AllProductDisplayPage />
              </Suspense>
            ),
          },
          {
            path: "categories/:name",
            element: (
              <Suspense fallback={<BaseLoader />}>
                <CategoryDisplayPage />
              </Suspense>
            ),
          },
          {
            path: "product/:slug/:id",
            element: (
              <Suspense fallback={<BaseLoader />}>
                <ViewProductPage />
              </Suspense>
            ),
          },
          {
            path: "cart",
            element: (
              <Suspense fallback={<BaseLoader />}>
                <CartPage />
              </Suspense>
            ),
          },
          {
            path: "wishlist",
            element: (
              <Suspense fallback={<BaseLoader />}>
                <WishlistPage />
              </Suspense>
            ),
          },
          {
            path: "checkout",
            element: (
              <Suspense fallback={<BaseLoader />}>
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
