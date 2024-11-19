import React from "react";
import ReactDOM from "react-dom";
import FetchCSVData from "./components/FetchCSVData";
import Header from "./components/Header";
import Body from "./components/Body";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const rootReact = createRoot(document.getElementById("root"));

const AppRoot = () => (
  <div className="app-root">
    <Header />
    <Body />
    <Footer />
  </div>
);

rootReact.render(<AppRoot />);
