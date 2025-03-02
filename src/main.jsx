import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DataProvider from "./providers/DataProvider.jsx";
import { SnackbarProvider } from "./providers/SnackbarProvider.jsx";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import { ConfirmationProvider } from "./providers/ConfirmationProvider.jsx";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Theme>
        <DataProvider>
          <ConfirmationProvider>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </ConfirmationProvider>
        </DataProvider>
      </Theme>
    </ThemeProvider>
  </StrictMode>
);
