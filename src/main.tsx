import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Providers from "./components/providers";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <StrictMode>
      <App />
    </StrictMode>
  </Providers>
);
