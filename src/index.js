import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Arquivo de estilos globais
import SurveyComponent from "./SurveyComponent";

const container = document.getElementById("surveyElement");
const root = createRoot(container);

root.render(<SurveyComponent />);

// Inicia o service worker para permitir funcionamento offline
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/serviceWorker.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
