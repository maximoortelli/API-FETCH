import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Fetch from "./Fetch.jsx";
import App from "./App.jsx";
import Mejor from "./Mejor.jsx";
import Axios from "./axios/Axios.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*PRIMERA FORMA*/}
    <Fetch />

    {/*SEGUNDA FORMA UN POCO MAS LIMPIA*/}
    <App />

    {/*TERCERA FORMA LAS MAS LIMPIA DE TODAS*/}
    <Mejor />

    {/*CUARTA FORMA AXIOS*/}
    <Axios/>
  </React.StrictMode>
);
