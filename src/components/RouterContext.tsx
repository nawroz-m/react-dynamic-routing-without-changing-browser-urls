import React, { createContext, useContext, useState, ReactNode } from "react";

interface RouterContextType {
  currentRoute: string;
  navigate: (path: string) => void;
}

const defaultContextValue: RouterContextType = {
  currentRoute: "/",
  navigate: () => {},
};

const RouterContext = createContext<RouterContextType>(defaultContextValue);

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState("/");

  const navigate = (path: string) => {
    setCurrentRoute(path);
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
