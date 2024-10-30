/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const initialState = {
  resultURL: "",
  file: undefined,
  isLoading: false,
};

const HomepageContext = createContext(initialState);

const useHomepageContext = () => {
  const context = useContext(HomepageContext);
  if (!context) {
    throw new Error(
      "useHomepageContext must be used within a HomepageProvider"
    );
  }
  return context;
};

const HomepageProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <HomepageContext.Provider value={{ state, setState }}>
      {children}
    </HomepageContext.Provider>
  );
};

export { HomepageProvider, useHomepageContext };
