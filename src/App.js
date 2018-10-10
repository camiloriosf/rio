//@flow

import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { IntlProvider } from "react-intl";
import routes from "./routes";

const App = ({ history }) => {
  return (
    <IntlProvider locale="en">
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </IntlProvider>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
