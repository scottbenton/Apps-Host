// <reference path="./index.d.ts" />
import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./modules/HomePage.module";
import { DevTools } from "./modules/DevTools.module";
import "./index.scss";
import "@fontsource-variable/inter";
import { HelmetProvider, Helmet } from "react-helmet-async";
import FavIcon from "./BaseLogo.svg";

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>Scott Benton's Apps</title>
      <link rel="icon" href={FavIcon} />
    </Helmet>
    <HomePage />
    <DevTools />
  </HelmetProvider>
);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
