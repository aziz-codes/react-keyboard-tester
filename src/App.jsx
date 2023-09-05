import { lazy, Suspense } from "react";
import Appbar from "./components/Appbar";
import KeyboardLoader from "./layouts/KeyboardLoader";
const Keyboard = lazy(() => import("./components/Keyboard"));
const App = () => {
  return (
    <Suspense fallback={<KeyboardLoader />}>
      <Appbar />
      <Keyboard />
    </Suspense>
  );
};

export default App;
