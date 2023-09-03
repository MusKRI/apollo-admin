// **** Library Imports ****
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// **** Local Imports ****
import App from "./App.tsx";
import "./styles/index.css";

const container = document.getElementById("root") as HTMLDivElement;

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
