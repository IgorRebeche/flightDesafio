import React from "react";
//import Root from './roots/roots'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import reducers from "./reducers/#Root";
import {init} from "./actions/#Root"
import {ThemeProvider} from '@material-ui/styles'
import {createMuiTheme} from '@material-ui/core/styles'
import { deepPurple, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: {
      main: orange[500],
    },
  },
});
const middleware = [ thunk ];
const store = createStore(reducers, applyMiddleware(...middleware));
store.dispatch(init());
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ThemeProvider>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
