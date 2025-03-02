import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DataProvider from "./providers/DataProvider.jsx";
import { SnackbarProvider } from "./providers/SnackbarProvider.jsx";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import { ConfirmationProvider } from "./providers/ConfirmationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <DataProvider>
        <ConfirmationProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ConfirmationProvider>
      </DataProvider>
    </ThemeProvider>
  </StrictMode>
);
