import React, { useState } from "react";
import { keys } from "../data/Keys";

const Keyboard = () => {
  const [allKeys, setAllKeys] = useState(
    keys.map((key) => ({
      label: key.label,
      keyCode: key.keyCode,
      isPressed: false,
    }))
  );
  console.log(allKeys);
  const firstRow = allKeys.slice(0, 16);
  const secondRow = allKeys.slice(16, 30);
  const thirdRow = allKeys.slice(30, 44);
  return (
    <section className="w-full  flex flex-col items-center mt-24">
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 bg-sky-500 rounded-full relative top-1 "></div>
        <h4>Start pressing your keys on your keyboard</h4>
      </div>

      <div className="w-full max-w-4xl  h-auto max-h-full border my-2 px-2 flex flex-col items-center justify-center py-2 gap-3">
        {/* first row */}
        <div className="flex gap-2 items-center">
          {firstRow.map((btn, index) => (
            <button
              className={`h-6 w-10 border rounded-sm shadow-md text-xs text-center flex justify-center items-center`}
              key={index}
            >
              {btn.label}
            </button>
          ))}
        </div>
        {/* end of first row */}
        {/* second row */}
        <div className="flex gap-2 items-center">
          {secondRow.map((btn, index) => (
            <button
              key={index}
              className={`${
                index === 0 && "h-10 w-8  rounded-sm"
              } h-10 w-11 border rounded-sm flex items-center justify-center ${
                index === secondRow.length - 1 && "w-[96px] px-5"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        {/* end of second row */}
        {/* start of third row */}
        <div className="flex gap-2 items-center">
          {thirdRow.map((btn, index) => (
            <button
              key={index}
              className={`${
                index === 0 && "h-10 w-[75px]"
              } h-10 w-11 border rounded-sm flex items-center justify-center ${
                index === thirdRow.length - 1 && "w-[50px]"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        {/* end of third row */}
      </div>
    </section>
  );
};

export default Keyboard;
