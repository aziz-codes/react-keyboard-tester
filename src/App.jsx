import { lazy, Suspense } from "react";
import Appbar from "./components/Appbar";
const Keyboard = lazy(() => import("./components/Keyboard"));
const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Appbar />
      <Keyboard />
    </Suspense>
  );
};

export default App;
