import { AdminContextProvider } from "./AdminContext";
import { ThemeContextProvider } from "./ThemeContext";
import { FunctionComponent } from "react";

export const GlobalContext: FunctionComponent = ({ children }) => {
  return (
    <ThemeContextProvider>
      <AdminContextProvider>{children}</AdminContextProvider>
    </ThemeContextProvider>
  );
};
