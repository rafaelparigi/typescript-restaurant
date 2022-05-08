import { createContext, FunctionComponent, useState } from "react";
import storage from "local-storage-fallback";

type ThemeContextProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const getFirstTheme: any = () => {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : "light";
};

const DEFAULT_VALUE = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(DEFAULT_VALUE);

export const ThemeContextProvider: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState(getFirstTheme);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
