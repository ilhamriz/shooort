/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("links");
    if (localData) {
      setLinks(JSON.parse(localData) || []);
    }
  }, []);

  const contextValue = { API_URL, API_KEY, links, setLinks };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.any,
};

export default DataProvider;
