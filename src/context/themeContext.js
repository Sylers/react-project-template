import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});



export function ThemeContextProvider({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => initializeTheme());

  function isLocalStorageEmpty() {
    return !localStorage.getItem("isDarkTheme");
  }

  function initializeTheme() {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document.querySelector("body").classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme = JSON.parse(
        localStorage.getItem("isDarkTheme")
      );
      isDarkTheme && document.querySelector("body").classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleTheme() {
    const isDarkTheme = JSON.parse(
      localStorage.getItem("isDarkTheme")
    );
    setIsDarkTheme(!isDarkTheme);
    // toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  // function toggleDarkClassToBody() {
  //   document.querySelector("body").classList.toggle("dark");
  // }

  function setValueToLocalStorage() {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
