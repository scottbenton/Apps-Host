import { Outlet } from '@modern-js/runtime/router';
// Supports weights 100-900
import '@fontsource-variable/inter';
import { getModulesWithOverrides } from '@/hooks/useModules';

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
      <Outlet />
    </div>
  );
}
