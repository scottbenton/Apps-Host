import { constructBaseWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";

const config = constructBaseWebpackConfig({
  name: "scottbenton_micro_frontend_host",
  dependencies: {},
  modules: [
    ModuleScope.Authentication,
    ModuleScope.DeveloperTools,
    ModuleScope.HomePage,
    ModuleScope.DungeonManager,
  ],
});

export default config;
