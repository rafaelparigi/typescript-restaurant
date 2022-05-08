import { createContext, FunctionComponent, useState } from "react";
import storage from "local-storage-fallback";

type AdminContextProps = {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
};

const getFirstAdminStatus: any = () => {
  const savedAdminStatus = storage.getItem("isAdmin");
  return savedAdminStatus ? JSON.parse(savedAdminStatus) : "false";
};

const DEFAULT_VALUE = {
  isAdmin: false,
  setIsAdmin: () => {},
};

export const AdminContext = createContext<AdminContextProps>(DEFAULT_VALUE);

export const AdminContextProvider: FunctionComponent = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(getFirstAdminStatus);
  return <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>{children}</AdminContext.Provider>;
};
