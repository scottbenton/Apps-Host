import React, { lazy } from "react";
import { ModuleWrapper } from "../ModuleWrapper";

const DevToolsLazy = lazy(() =>
  // @ts-ignore
  import("dev_tools/DevTools").catch(() => {
    return { default: () => <>Dev Tools Failed to Load</> };
  })
);

export function DevTools() {
  return (
    <ModuleWrapper>
      <DevToolsLazy />
    </ModuleWrapper>
  );
}
