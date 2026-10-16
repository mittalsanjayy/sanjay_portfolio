import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { links } from "./config/site";
import { isPlaceholderEmail, isValidUrl } from "./utils/links";
import "./styles/global.css";

// Development-only reminder so placeholders are not shipped by accident.
if (import.meta.env.DEV) {
  const todo = [];
  if (!isValidUrl(links.github)) todo.push("GitHub URL");
  if (!isValidUrl(links.linkedin)) todo.push("LinkedIn URL");
  if (isPlaceholderEmail(links.email)) todo.push("email address");
  if (todo.length) {
    console.warn(`[portfolio] Still using placeholders in src/config/site.js: ${todo.join(", ")}.`);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
