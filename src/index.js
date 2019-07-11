import React from "react";
import Root from './components/Root'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import reducers from "./reducers/#Root";
import {init} from "./actions/#Root"

const middleware = [ thunk ];
const store = createStore(reducers, applyMiddleware(...middleware));
store.dispatch(init());
ReactDOM.render(
  <Root store={store} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
