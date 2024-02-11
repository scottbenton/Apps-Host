import React from "react";
import ReactDOM from "react-dom/client";
import { DevTools } from "./modules/DevTools.module";
import "./index.scss";
import "@fontsource-variable/inter";
import { HelmetProvider, Helmet } from "react-helmet-async";
import FavIcon from "./BaseLogo.svg";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "auth_ui/AuthProvider";
import { router } from "./routes";

const App = () => (
  <HelmetProvider>
    <AuthProvider>
      <Helmet>
        <title>Scott Benton's Apps</title>
        <link rel="icon" href={FavIcon} />
      </Helmet>
      <RouterProvider router={router} />
      <DevTools />
    </AuthProvider>
  </HelmetProvider>
);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
