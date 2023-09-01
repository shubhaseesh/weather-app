import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App.jsx";
import "./index.css";
import rootSaga from "./sagas/index.js";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
