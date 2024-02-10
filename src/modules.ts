export interface IModule {
  name: string;
  moduleKey: string;
  windowKey: string;
  defaultUrl: string;
}

export interface IModuleOverrides {
  [moduleKey: string]: string;
}

export const modules: IModule[] = [
  {
    name: "Home Page",
    moduleKey: "home_page",
    windowKey: "home_page_url",
    defaultUrl: "https://apps-homepage.web.app",
  },
  {
    name: "Dev Tools",
    moduleKey: "dev_tools",
    windowKey: "dev_tools_url",
    defaultUrl: "https://scott-benton-dev-tools.web.app",
  },
];

export function initModuleURLs() {
  localStorage.setItem("modules", JSON.stringify(modules));
  const moduleOverrides = fetchModuleOverridesFromLocalStorage();

  modules.forEach((module) => {
    const moduleUrl = moduleOverrides[module.moduleKey] ?? module.defaultUrl;
    console.debug(`Setting ${module.windowKey} to ${moduleUrl}.`);
    (window as any)[module.windowKey] = moduleUrl;
  });
}

const fetchModuleOverridesFromLocalStorage = (): IModuleOverrides => {
  const localStorageValue = localStorage.getItem("module-overrides");
  let parsedOverrides: IModuleOverrides = {};
  if (localStorageValue) {
    try {
      const values = JSON.parse(localStorageValue);
      Object.keys(values).forEach((key) => {
        const value = values[key];
        if (typeof value === "string") {
          parsedOverrides[key] = value;
        }
      });
    } catch {}
  }
  return parsedOverrides;
};
