import { useRoutes } from "react-router-dom";
import MarketingRoutes from "./routes/MarketingRoutes";
// import DashboardRoutes from "./routes/DashboardRoutes";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const routes = useRoutes([...MarketingRoutes]);
  // const routes = useRoutes([...MarketingRoutes, ...DashboardRoutes]);
  return (
    <>
      <ScrollToTop />
      {routes}
      <Toaster />
    </>
  );
};

export default App;
