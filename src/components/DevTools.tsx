import { useModuleApps } from '@modern-js/plugin-garfish/runtime';
import { useModules } from '@/hooks/useModules';

const DevTools = () => {
  const { DevTools } = useModuleApps();

  const { modules, overrides, setModuleOverride } = useModules();

  return (
    <div>
      <DevTools
        modules={modules}
        overrides={overrides}
        setModuleOverride={setModuleOverride}
      />
    </div>
  );
};

export default DevTools;
