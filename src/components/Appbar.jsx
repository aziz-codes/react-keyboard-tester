import { MoonIcon } from "@heroicons/react/24/outline";
const Appbar = () => {
  return (
    <div className="w-full h-11 flex items-center border border-b justify-end px-4">
      <MoonIcon className="h-5 w-5 cursor-pointer" title="dark mode" />
    </div>
  );
};

export default Appbar;
// test commit
