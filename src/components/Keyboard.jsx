import React, { useState, useEffect } from "react";
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
  const fourthRow = allKeys.slice(44, 57);
  const fifthRow = allKeys.slice(57, 69);

  useEffect(() => {
    const activeKeyhandler = (event) => {
      console.log(event.key);
      const index = allKeys.findIndex((key) => key.keyCode === event.key);
      if (index) {
        const updatedKeys = [...allKeys];
        updatedKeys[index].isPressed = true;
        setAllKeys(updatedKeys);
        alert("key updated at index", index);
      } else {
        alert("key not found");
      }
    };
    window.addEventListener("keypress", activeKeyhandler);

    return () => window.removeEventListener("keypress", activeKeyhandler);
  }, []);
  // console.log(allKeys);
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
              className={`h-6 w-10 border rounded-sm shadow-lg text-xs text-center flex justify-center items-center`}
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
              } h-10 w-11 border rounded-sm flex items-center justify-center shadow-lg ${
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
              } h-10 w-11 border rounded-sm flex items-center justify-center shadow-lg ${
                index === thirdRow.length - 1 && "w-[50px]"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        {/* end of third row */}

        {/* start of 4th row */}

        <div className="flex gap-2 items-center">
          {fourthRow.map((btn, index) => (
            <button
              key={index}
              className={`h-10 w-11 border ${
                index === 0 &&
                "w-20 flex rounded-sm items-center justify-center shadow-lg "
              } ${index === fourthRow.length - 1 && "w-24"}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* end of 4th row  */}
        {/* start of fifth row */}

        <div className="flex gap-2 items-center">
          {fifthRow.map((btn, index) => (
            <button
              className={`h-10 border shadow-lg rounded-sm w-11 ${
                (index === fifthRow.length - 1 && "w-28") ||
                (index === 0 && "w-28")
              }`}
              key={index}
            >
              {btn.label}
            </button>
          ))}
        </div>
        {/* end of fifth row */}
      </div>
    </section>
  );
};
export default Keyboard;
