import { createContext, FunctionComponent, useState } from "react";

type AdminContextProps = {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
};

const DEFAULT_VALUE = {
  isAdmin: false,
  setIsAdmin: () => {},
};

export const AdminContext = createContext<AdminContextProps>(DEFAULT_VALUE);

export const AdminContextProvider: FunctionComponent = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  return <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>{children}</AdminContext.Provider>;
};
