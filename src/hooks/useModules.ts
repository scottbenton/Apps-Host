import appConfigs from '../../appConfigs.json';

export interface IModule {
  name: string;
  friendlyName: string;
  description: string;
  entry: string;
}

export interface IModuleOverrides {
  [moduleName: string]: string;
}

export function getModuleOverrides(): IModuleOverrides {
  const moduleOverrides: IModuleOverrides = {};

  const moduleOverrideString = window.localStorage.getItem('module_overrides');
  if (moduleOverrideString) {
    try {
      const parsedModuleOverrides = JSON.parse(moduleOverrideString);
      Object.keys(parsedModuleOverrides).forEach(moduleKey => {
        if (typeof parsedModuleOverrides[moduleKey] === 'string') {
          moduleOverrides[moduleKey] = parsedModuleOverrides[moduleKey];
        }
      });
    } catch {}
  }

  return moduleOverrides;
}

export function getModules(): IModule[] {
  return appConfigs;
}

export function getModulesWithOverrides(): IModule[] {
  const newModules: IModule[] = [];

  const overrides = getModuleOverrides();

  getModules().forEach(module => {
    if (overrides[module.name]) {
      newModules.push({
        ...module,
        entry: overrides[module.name],
      });
    } else {
      newModules.push(module);
    }
  });

  return newModules;
}

export function setModuleOverride(
  moduleName: string,
  entryPoint: string | undefined,
) {
  const overrides = { ...getModuleOverrides() };

  if (entryPoint) {
    overrides[moduleName] = entryPoint;

    localStorage.setItem('module_overrides', JSON.stringify(overrides));
    location.reload();
  } else {
    delete overrides[moduleName];
  }
}

export function useModules() {
  const modules = getModules();
  const overrides = getModuleOverrides();

  return {
    modules,
    overrides,
    setModuleOverride,
  };
}
