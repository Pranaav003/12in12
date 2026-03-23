import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "12in12-theme";

const ThemeContext = createContext(null);

function readStoredTheme() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === "dark";
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
