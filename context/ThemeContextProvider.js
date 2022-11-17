/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// function setCookie(name, value, days) {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }
// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(";");
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == " ") c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

function ThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => {
    initializeTheme();
  }, []);

  const isLocalStorageEmpty = () => {
    return JSON.parse(localStorage.getItem("isDarkTheme"));
  };

  const initializeTheme = () => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document.querySelector("body").classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
      isDarkTheme && document.querySelector("body").classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  };
  function toggleThemeHandler() {
    const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody() {
    document.querySelector("body").classList.toggle("dark");
  }

  function setValueToLocalStorage() {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
