import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

export function ModuleWrapper(props: PropsWithChildren) {
  const { children } = props;

  return (
    <ErrorBoundary fallback={<></>}>
      <Suspense fallback={<></>}>{children}</Suspense>
    </ErrorBoundary>
  );
}
