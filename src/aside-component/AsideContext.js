import React, { useState, useContext } from "react";

const AsideContext = React.createContext();

export const AsideProvider = ({ children }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  return (
    <AsideContext.Provider value={{ isAsideOpen, setIsAsideOpen }}>
      {children}
    </AsideContext.Provider>
  );
};

export const useAside = () => useContext(AsideContext);
