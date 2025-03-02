/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getInfoLink } from "@/api/api";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("links");
    if (localData) {
      const datas = JSON.parse(localData);
      const list = datas.map(async (link) => {
        return await getInfoLink(link?.alias);
      });

      Promise.all(list).then((res) => {
        const newData = res.map((val) => {
          delete val.data["user"];
          return val.data;
        });
        updateLinks(newData);
      });
    }
  }, []);

  const updateLinks = (data) => {
    setLinks(data);
    localStorage.setItem("links", JSON.stringify(data));
  };

  const contextValue = { API_URL, API_KEY, links, updateLinks };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.any,
};

export default DataProvider;
