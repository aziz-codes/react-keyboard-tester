import { lazy, Suspense } from "react";
import Appbar from "./components/Appbar";
import KeyboardLoader from "./layouts/KeyboardLoader";
const Keyboard = lazy(() => import("./components/Keyboard"));
import { Store } from "./context/Context";
const App = () => {
  const { darkMode } = Store();
  return (
    <Suspense fallback={<KeyboardLoader />}>
      <section
        className={`h-screen flex w-full flex-col gap-2 items-center justify-center ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
        }`}
      >
        <Appbar />
        <Keyboard />
      </section>
    </Suspense>
  );
};

export default App;
