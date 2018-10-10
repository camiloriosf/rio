import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Route } from "react-router";
import { connect } from "react-redux";
import Loader from "../components/loader";
import type { AuthState } from "../_reducers";
import { authActions } from "../_actions";

type Props = {
  auth: AuthState,
  checkUser: Function
};

class PrivateRoute extends React.Component<Props> {
  componentDidMount() {
    this.props.checkUser();
    this.unlisten = this.props.history.listen(() => {
      this.props.checkUser();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { component: Component, auth, ...rest } = this.props;
    const { authenticated, checked } = auth;
    if (!checked) return <Loader />;
    return (
      <Route
        {...rest}
        render={props => {
          return authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        }}
      />
    );
  }
}

const mapDispatchToProps = {
  checkUser: authActions.checkUser
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PrivateRoute));
