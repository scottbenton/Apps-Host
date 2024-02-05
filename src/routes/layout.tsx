import { Outlet } from '@modern-js/runtime/router';
// Supports weights 100-900
import '@fontsource-variable/inter';
import { Helmet } from '@modern-js/runtime/head';
import { getModulesWithOverrides } from '@/hooks/useModules';
import FavIcon from '@/assets/BaseLogo.svg';
import DevTools from '@/components/modules/DevTools';

function setModules() {
  if (window) {
    const newModules = getModulesWithOverrides();

    (window as any).modern_manifest = {
      modules: newModules,
    };
  }
}

setModules();

export default function Layout() {
  return (
    <div>
      <Helmet>
        <title>Scott Benton&#39;s Apps</title>
        <link rel="icon" href={FavIcon} />
      </Helmet>
      <Outlet />
      <DevTools />
    </div>
  );
}
