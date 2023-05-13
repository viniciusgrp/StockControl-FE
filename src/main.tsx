import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "./global.style.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
