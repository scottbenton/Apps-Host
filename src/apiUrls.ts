import apis from "../apis.json";

export interface IApi {
  name: string;
  description: string;
  key: string;
  defaultUrl: string;
}

export interface IApiOverrides {
  [key: string]: string;
}

export function initApiUrls() {
  localStorage.setItem("default-apis", JSON.stringify(apis));
  const apiOverrides = fetchApiOverridesFromLocalStorage();

  const apiUrls: Record<string, string> = {};

  apis.forEach((api) => {
    const apiUrl = apiOverrides[api.key] ?? api.defaultUrl;
    console.debug(`Setting ${api.key} to ${apiUrl}.`);
    apiUrls[api.key] = apiUrl;
  });

  localStorage.setItem("api-urls", JSON.stringify(apiUrls));
}

const fetchApiOverridesFromLocalStorage = (): IApiOverrides => {
  const localStorageValue = localStorage.getItem("api-overrides");
  let parsedOverrides: IApiOverrides = {};
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
