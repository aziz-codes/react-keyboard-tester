import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Store } from "../context/Context";
const Appbar = () => {
  const { darkMode, setDarkMode } = Store();
  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="w-full h-11 flex items-center border border-b justify-end px-4">
      {darkMode ? (
        <SunIcon
          className="h-5 w-5 cursor-pointer"
          title="light mode"
          onClick={handleToggle}
        />
      ) : (
        <MoonIcon
          className="h-5 w-5 cursor-pointer"
          title="dark mode"
          onClick={handleToggle}
        />
      )}
    </div>
  );
};

export default Appbar;
// test commit
