import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);

// Dynamically set basename based on the environment
const basename = import.meta.env.MODE === "production" ? "/" : "/";

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
