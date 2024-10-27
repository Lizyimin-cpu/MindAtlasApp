import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container); // 使用 React 18 的 createRoot

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
