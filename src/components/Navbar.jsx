import React from "react";
import { useEffect, useState } from "react";

const Navbar = ({ activeTab, onCloseTab }) => {
  const [width, setWidth] = useState(null);

  const storedTabs = Object.keys(localStorage);

  let mobile = false;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  if (width < 1000) {
    mobile = true;
  } else {
    mobile = false;
  }

  return (
    <>
      <div className="bg-[#0b3966] text-white py-1 px-2 flex flex-row items-center">
        <h1 className="mr-20">Navbar Title</h1>
        {!mobile &&
          storedTabs.map((tab, index) => (
            <div
              className="border px-2 rounded-md text-[14px] mr-2"
              key={index}
            >
              {activeTab}
              <span
                className="ml-2 cursor-pointer"
                onClick={() => onCloseTab(tab)}
              >
                x
              </span>
            </div>
          ))}
      </div>
    </>
  );
};

export default Navbar;
