import { RouteObject } from "react-router-dom";
import MarketingLayout from "../layouts/MarketingLayout";
import HomePage from "../pages/marketing/Home";
import AboutPage from "../pages/marketing/About";
import ContactPage from "../pages/marketing/Contact";
import CommunityPage from "../pages/marketing/Community";
import ServicesPage from "../pages/marketing/Services";
import MarketPlacePage from "../pages/marketing/MarketPlace";

// Define the marketing routes and their corresponding components
const MarketingRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MarketingLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "community", element: <CommunityPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "marketplace", element: <MarketPlacePage /> },
    ],
  },
];

export default MarketingRoutes;
