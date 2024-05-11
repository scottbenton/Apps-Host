import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./modules/HomePage.module";
import { DevToolsWrapper } from "./modules/DevToolsWrapper";

import { authRoutes } from "auth_ui/authRoutes";
import { routes as dungeonManagerRoutes } from "dungeon_manager/routes";
import { routes as ironswornRoutes } from "iron_link/routes";

export const router = createBrowserRouter([
  {
    element: <DevToolsWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      ...authRoutes,
      ...dungeonManagerRoutes,
      ...ironswornRoutes,
    ],
  },
]);
