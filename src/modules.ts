import modules from "../modules.json";

export interface IModule {
  name: string;
  description: string;
  scope: string;
  defaultUrl: string;
}

export interface IModuleOverrides {
  [scope: string]: string;
}

export function initModuleURLs() {
  localStorage.setItem("modules", JSON.stringify(modules));
  const moduleOverrides = fetchModuleOverridesFromLocalStorage();

  modules.forEach((module) => {
    const moduleUrl = moduleOverrides[module.scope] ?? module.defaultUrl;
    console.debug(`Setting ${module.scope} to ${moduleUrl}.`);
    (window as any)[`${module.scope}_url`] = moduleUrl;
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
