import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import MarketingLayout from "../layouts/MarketingLayout";

// Lazy load pages
const HomePage = lazy(() => import("../pages/marketing/Home"));
const AboutPage = lazy(() => import("../pages/marketing/About"));
const ContactPage = lazy(() => import("../pages/marketing/Contact"));
const CommunityPage = lazy(() => import("../pages/marketing/Community"));
const ServicesPage = lazy(() => import("../pages/marketing/Services"));
const MarketPlacePage = lazy(() => import("../pages/marketing/MarketPlace"));
const InventoryManagementPage = lazy(
  () => import("../pages/marketing/InventoryManagement")
);
const BecomeAFarmerPage = lazy(
  () => import("../pages/marketing/BecomeAFarmer")
);
const FarmFundingPage = lazy(() => import("../pages/marketing/FarmFunding"));

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
        path: "marketplace",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MarketPlacePage />
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
    ],
  },
];

export default MarketingRoutes;
