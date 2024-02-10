import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./modules/HomePage.module";
import { DevTools } from "./modules/DevTools.module";
import "./index.scss";
import "@fontsource-variable/inter";

const App = () => (
  <>
    <div className="container">
      <div>Name: scottbenton-micro-frontend-host</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <HomePage />
    </div>
    <DevTools />
  </>
);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
