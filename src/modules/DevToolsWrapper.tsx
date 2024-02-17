import React from "react";
import { Outlet } from "react-router-dom";
import { SessionBlocker } from "auth_ui/SessionBlocker";
import { Roles } from "@scottbenton/apps-config";
import { DevTools } from "./DevTools.module";

export function DevToolsWrapper() {
  return (
    <>
      <Outlet />
      <SessionBlocker roles={[Roles.Developer]}>
        <DevTools />
      </SessionBlocker>
    </>
  );
}
