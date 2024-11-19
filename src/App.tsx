import { useRoutes } from "react-router-dom";
import MarketingRoutes from "./routes/MarketingRoutes";
// import DashboardRoutes from "./routes/DashboardRoutes";

const App = () => {
  const routes = useRoutes([...MarketingRoutes]);
  // const routes = useRoutes([...MarketingRoutes, ...DashboardRoutes]);
  return <>{routes}</>;
};

export default App;
