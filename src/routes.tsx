import React from "react";
import { createBrowserRouter } from "react-router-dom";
import authRoutes from "auth_ui/authRoutes";
import { HomePage } from "./modules/HomePage.module";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  ...authRoutes,
]);
