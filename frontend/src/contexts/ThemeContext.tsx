import { createContext, FunctionComponent, useState } from "react";

type ThemeContextProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

//needs to change to storage
const DEFAULT_VALUE = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(DEFAULT_VALUE);

export const ThemeContextProvider: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
