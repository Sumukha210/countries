import React from "react";
import ReactDOM from "react-dom";
import { compose, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import App from "./App";
import rootReducer from "./Redux/Reducer";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
