// @flow

import { AppContainer } from "react-hot-loader";
import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import App from "./App";
import rootReducer from "./_reducers";
import { awsConstants } from "./_constants";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: awsConstants.cognito.REGION,
    userPoolId: awsConstants.cognito.USER_POOL_ID,
    userPoolWebClientId: awsConstants.cognito.APP_CLIENT_ID
  }
});

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunkMiddleware))
);
// $FlowIgnore
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById("react-root")
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./App", () => {
    render();
  });

  // Reload reducers
  module.hot.accept("./_reducers", () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}
