/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import darkMode from "../assets/darkmode.svg";
import lightMode from "../assets/lightmode.svg";
function Toggle() {
  const themeCtx = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        themeCtx.toggleThemeHandler();
      }}
      className=" w-[50px]  cursor-pointer"
    >
      {themeCtx.isDarkTheme ? (
        <img className="h-100 w-100" src={lightMode.src} alt="light mode" />
      ) : (
        <img className="h-100 w-100" src={darkMode.src} alt="dark mode" />
      )}
    </div>
  );
}

export default Toggle;
