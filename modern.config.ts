import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';
import apps from './appConfigs.json';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig(() => {
  return {
    runtime: {
      router: true,
      state: true,
      masterApp: {
        apps,
        disablePreloadApp: true,
      },
    },
    plugins: [appTools(), garfishPlugin()],
  };
});
