import React from "react";
//import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);