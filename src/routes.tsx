import React from "react";
import { createBrowserRouter } from "react-router-dom";
import authRoutes from "auth_ui/authRoutes";
import { HomePage } from "./modules/HomePage.module";
import { DevToolsWrapper } from "./modules/DevToolsWrapper";

export const router = createBrowserRouter([
  {
    element: <DevToolsWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      ...authRoutes,
    ],
  },
]);
