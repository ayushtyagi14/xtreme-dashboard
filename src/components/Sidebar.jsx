import React from "react";
import { useState, useEffect } from "react";

const Sidebar = ({ onTabClick }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [mobileView, setMobileView] = useState(null);

  const handleDropdownClick = () => {
    setIsDropDown(!isDropDown);
  };

  const handleTabClick = (tab) => {
    console.log("Clicked on tab:", tab);
    onTabClick(tab);
  };

  const [width, setWidth] = useState(null);

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

  if (mobile) {
    return (
      <>
        <img
          src="https://img.icons8.com/ios-glyphs/20/null/menu-rounded.png"
          className="mr-3"
          onClick={() => setMobileView(!mobileView)}
        />
        {mobileView && (
          <div className="bg-[#EDF5FD] py-2 text-[#0b3966] h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            <div
              className="flex flex-row justify-between px-3 py-2 mt-2 border-y w-full cursor-pointer hover:bg-[#DAEBFB]"
              onClick={handleDropdownClick}
            >
              <div className="text-[14px]">Sales</div>
              {!isDropDown ? (
                <img src="https://img.icons8.com/external-regular-kawalan-studio/24/0b3966/external-chevron-down-user-interface-regular-kawalan-studio.png" />
              ) : (
                <img src="https://img.icons8.com/external-thin-kawalan-studio/24/0b3966/external-chevron-up-user-interface-thin-kawalan-studio.png" />
              )}
            </div>
            {isDropDown && (
              <>
                <button
                  className="flex flex-row justify-between px-3 py-2 bg-white border-y w-full cursor-pointer hover:bg-gray-100 text-[12px]"
                  onClick={() => handleTabClick("Customer")}
                >
                  Customer
                </button>
                <button
                  className="flex flex-row justify-between px-3 py-2 bg-white border-y w-full cursor-pointer hover:bg-gray-100 text-[12px]"
                  onClick={() => handleTabClick("Quotation")}
                >
                  Quotation
                </button>
                <button
                  className="flex flex-row justify-between px-3 py-2 bg-white border-y w-full cursor-pointer hover:bg-gray-100 text-[12px]"
                  onClick={() => handleTabClick("Invoices")}
                >
                  Invoices
                </button>
              </>
            )}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="bg-[#EDF5FD] py-2 text-[#0b3966] h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        <div
          className="flex flex-row justify-between px-3 py-2 mt-2 border-y w-full cursor-pointer hover:bg-[#DAEBFB]"
          onClick={handleDropdownClick}
        >
          <div className="text-[14px]">Sales</div>
          {!isDropDown ? (
            <img src="https://img.icons8.com/external-regular-kawalan-studio/24/0b3966/external-chevron-down-user-interface-regular-kawalan-studio.png" />
          ) : (
            <img src="https://img.icons8.com/external-thin-kawalan-studio/24/0b3966/external-chevron-up-user-interface-thin-kawalan-studio.png" />
          )}
        </div>
        {isDropDown && (
          <>
            <button
              className="flex flex-row justify-between px-3 py-2 bg-white border-y w-full cursor-pointer hover:bg-gray-100 text-[12px]"
              onClick={() => handleTabClick("Customer")}
            >
              Customer
            </button>
            <button
              className="flex flex-row justify-between px-3 py-2 bg-white border-y w-full cursor-pointer hover:bg-gray-100 text-[12px]"
              onClick={() => handleTabClick("Quotation")}
            >
              Quotation
            </button>
            <button
              className="flex flex-row justify-between px-3 py-2 bg-white border-y w-full cursor-pointer hover:bg-gray-100 text-[12px]"
              onClick={() => handleTabClick("Invoices")}
            >
              Invoices
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
