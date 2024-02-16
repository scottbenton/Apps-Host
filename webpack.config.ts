import { constructBaseWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";
import { dependencies } from "./package.json";

const config = constructBaseWebpackConfig({
  name: "scottbenton_micro_frontend_host",
  dependencies,
  modules: [
    ModuleScope.Authentication,
    ModuleScope.DeveloperTools,
    ModuleScope.HomePage,
  ],
});

export default config;
