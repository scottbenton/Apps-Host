import { lazy } from "react";
import { ModuleWrapper } from "./ModuleWrapper";

const HomePageLazy = lazy(() =>
  import("home_page/HomePage").catch(() => {
    return { default: () => <>Home Page Failed to Load</> };
  })
);

export function HomePage() {
  return (
    <ModuleWrapper>
      <HomePageLazy />
    </ModuleWrapper>
  );
}
