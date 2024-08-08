// Imports

// 1. Pre-existing Libraries
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

// 2. User-defined imports
import App from "./App";
import './globals.css';

// Initialising ReactDOM
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)