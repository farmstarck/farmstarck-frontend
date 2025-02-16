import { useRoutes, useNavigate } from "react-router-dom";
import MarketingRoutes from "./routes/MarketingRoutes";
// import DashboardRoutes from "./routes/DashboardRoutes";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import AuthService from "./services/AuthenticationService";
import { useAuth } from "./context/AuthContext";
import { errorMessageRetreiver } from "./utils/errorRetriever";
const App = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  //Handling Third party authentication
  useEffect(() => {
    //Extract token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      async function verifyToken() {
        if (!token) return;
        const credential = {
          token,
        };

        dispatch({ type: "RESET" });
        // make request to get user details
        try {
          dispatch({ type: "USER_LOADING" });
          const {
            status,
            data: { data },
          } = await AuthService.verifyToken(credential);

          if (status !== 200)
            throw new Error(data.message || "Verification failed");

          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { token: data.token, user: data.user },
          });
          localStorage.setItem("token", token);
          //Redirect to dashboard
          navigate("/marketplace");
        } catch (error) {
          const message = errorMessageRetreiver(error);
          dispatch({ type: "LOGIN_ERROR", payload: message });
          toast.error(message);
          navigate("/auth/login");
        } finally {
          dispatch({ type: "USER_LOADED" });
        }
      }

      verifyToken();
    } else {
      //Navigate to login page if no token found
      navigate("/auth/login");
    }
  }, []);

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
