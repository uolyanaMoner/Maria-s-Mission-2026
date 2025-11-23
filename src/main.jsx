import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";  // ← لازم يكون موجود

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Maria-s-Mission-2026">
    <App />
  </BrowserRouter>
);
