import { lazy, Suspense } from "react";
const Keyboard = lazy(() => import("./components/Keyboard"));
const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Keyboard />
    </Suspense>
  );
};

export default App;
