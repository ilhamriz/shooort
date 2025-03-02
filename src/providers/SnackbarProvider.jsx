/* eslint-disable react-refresh/only-export-components */
import { AnimatePresence, motion } from "motion/react";
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { IconClose } from "../components/Icons";
import { twMerge } from "tailwind-merge";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "success",
    message: "",
  });
  const snackbarContext = {
    setSnackbar: (message, type = "success") => {
      if (message)
        setSnackbar((state) => ({ ...state, message, type, open: true }));
    },
  };

  function handleClose() {
    setSnackbar((state) => ({ ...state, open: false }));
  }

  return (
    <SnackbarContext.Provider value={snackbarContext}>
      <AnimatePresence>
        {snackbar.open ? (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: -24 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={twMerge(
              "fixed bottom-0 left-[50%] -translate-x-[50%] min-w-[200px] p-4 rounded-lg flex justify-between items-center gap-4  text-white",
              snackbar.type === "success" ? "bg-emerald-500" : "bg-rose-500"
            )}
          >
            <div className="capitalize">{snackbar.message}</div>
            <button
              type="button"
              onClick={handleClose}
              className="cursor-pointer"
            >
              <IconClose className="fill-white" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </SnackbarContext.Provider>
  );
};
SnackbarProvider.propTypes = {
  children: PropTypes.any,
};
