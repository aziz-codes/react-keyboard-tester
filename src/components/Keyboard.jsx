import React, { useState } from "react";
import { keys } from "../data/Keys";

const Keyboard = () => {
  const [allKeys, setAllKeys] = useState(keys);

  return (
    <section className="w-full  flex flex-col items-center mt-24 gap-2">
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 bg-sky-500 rounded-full relative top-1 "></div>
        <h4>Start pressing your keys on your keyboard</h4>
      </div>

      <div className="w-full max-w-4xl  h-auto max-h-full border my-2 px-2 flex justify-center py-2">
        {/* first row */}
        <div className="flex gap-2 items-center">
          {allKeys.slice(0, 17).map((btn, index) => (
            <button
              className="h-6 w-10 border rounded-sm shadow-md text-xs text-center flex justify-center items-center"
              key={index}
            >
              {btn.label}
            </button>
          ))}
        </div>
        {/* end of first row */}
      </div>
    </section>
  );
};

export default Keyboard;
