import React, { useState, useEffect } from "react";
import { keys } from "../data/Keys";
import { Store } from "../context/Context";
const Keyboard = () => {
  const { darkMode } = Store();
  // add 'isPressed' property to all keys
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
  const lastRow = allKeys.slice(69, 75);
  const navigationKeys = allKeys.slice(75, 79);

  // using useEffect hook to listen for keyup event.
  useEffect(() => {
    const activeKeyhandler = (event) => {
      // prevent default functionality
      event.preventDefault();
      console.log(event.key.toLowerCase());
      const index = allKeys.findIndex(
        (key) => key.keyCode.toLowerCase() === event.key.toLowerCase()
      );
      if (index) {
        // updating 'isPressed' prop of a key that matches
        const updatedKeys = [...allKeys];
        updatedKeys[index].isPressed = !updatedKeys[index].isPressed;
        setAllKeys(updatedKeys);
      } else {
        console.log("key not found");
      }
    };
    window.addEventListener("keyup", activeKeyhandler);
    // cleanup function.
    return () => window.removeEventListener("keyup", activeKeyhandler);
  }, []);

  //  background-color for active and non active buttons.
  const activeBtn = "bg-red-500";
  const nonActiveBtn = darkMode ? "bg-slate-800 text-white" : "bg-white";

  return (
    <section
      className={`w-full  flex flex-col items-center  h-full justify-center ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 bg-sky-500 rounded-full relative top-1 "></div>
        <h4>Start pressing your keys on your keyboard</h4>
      </div>

      <div className="w-full max-w-4xl  h-auto max-h-full  my-2 px-2 flex flex-col items-center justify-center py-2 gap-3">
        {/* first row */}
        <div className="flex gap-2 items-center">
          {firstRow.map((btn, index) => (
            <button
              className={`h-6 w-10 border rounded-sm shadow-lg text-xs text-center flex justify-center items-center ${
                btn.isPressed ? activeBtn : nonActiveBtn
              }`}
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
              className={`${btn.isPressed ? activeBtn : nonActiveBtn} ${
                btn.isPressed ? activeBtn : nonActiveBtn
              } ${
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
              className={`${btn.isPressed ? activeBtn : nonActiveBtn} ${
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
              className={`${
                btn.isPressed ? activeBtn : nonActiveBtn
              } h-10 w-11 border shadow-lg ${
                index === 0 &&
                "w-20 flex rounded-sm items-center justify-center "
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
              className={`${
                btn.isPressed ? activeBtn : nonActiveBtn
              } h-10 border shadow-lg rounded-sm w-11 ${
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

        {/* start of last row */}
        <div className="flex gap-2 items-center">
          {lastRow.map((btn, index) => (
            <button
              key={index}
              className={`${
                btn.isPressed ? activeBtn : nonActiveBtn
              } h-10 w-11 rounded-sm flex justify-center shadow-lg items-center border ${
                index === 4 && "w-[315px]"
              }`}
            >
              {btn.label}
            </button>
          ))}

          {/* navigation keys.. */}

          <button
            className={`shadow-lg border rounded-sm flex justify-center items-center w-11 h-10 ${
              navigationKeys[0].isPressed ? activeBtn : nonActiveBtn
            }`}
          >
            {navigationKeys[0].label}
          </button>
          <div className="flex flex-col gap-[2px]">
            <button
              className={`h-5 w-16 shadow-lg border rounded-sm flex justify-center items-center ${
                navigationKeys[1].isPressed ? activeBtn : nonActiveBtn
              }`}
            >
              {navigationKeys[1].label}
            </button>
            <button
              className={`h-5 w-16 shadow-lg border rounded-sm flex justify-center items-center ${
                navigationKeys[2].isPressed ? activeBtn : nonActiveBtn
              }`}
            >
              {navigationKeys[2].label}
            </button>
          </div>
          <button
            className={`shadow-lg border rounded-sm flex justify-center items-center w-11 h-10 ${
              navigationKeys[3].isPressed ? activeBtn : nonActiveBtn
            }`}
          >
            {navigationKeys[3].label}
          </button>
          {/* end of navigation keys */}
        </div>
        {/* end of last row */}
      </div>
    </section>
  );
};
export default Keyboard;
