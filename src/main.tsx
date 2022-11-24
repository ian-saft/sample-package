import React from "react";
import ReactDOM from "react-dom/client";
import SampleComponent from "../package/SampleComponent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SampleComponent />
  </React.StrictMode>
);
