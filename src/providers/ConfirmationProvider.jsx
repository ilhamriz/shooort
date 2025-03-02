import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { createContext, useState } from "react";

export const ConfirmationContext = createContext();

export const ConfirmationProvider = ({ children }) => {
  const [confirmation, setConfirmation] = useState({
    open: false,
    title: "",
    caption: "",
    buttonText: ["Cancel", "Continue"],
    confirmCallback: null,
    cancelCallback: null,
    backdropClick: true,
  });

  const confirmationContext = {
    setConfirmation: (state) => setConfirmation(state),
  };

  function handleClose(_, reason) {
    if (reason === "backdropClick" && !confirmation?.backdropClick) return;
    setConfirmation((state) => ({ ...state, open: false }));
  }

  return (
    <ConfirmationContext.Provider value={confirmationContext}>
      <AlertDialog open={confirmation?.open}>
        <AlertDialogContent>
          <AlertDialogHeader className="font-jakarta">
            <AlertDialogTitle>{confirmation?.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {confirmation?.caption}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="font-jakarta">
            <AlertDialogCancel
              onClick={
                confirmation?.cancelCallback
                  ? confirmation?.cancelCallback
                  : handleClose
              }
              className="cursor-pointer hover:bg-action-hover"
            >
              {confirmation?.buttonText[0]}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => confirmation?.confirmCallback()}
              className="cursor-pointer text-white bg-red-600 hover:bg-red-700"
            >
              {confirmation?.buttonText[1]}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {children}
    </ConfirmationContext.Provider>
  );
};
