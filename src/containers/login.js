// @flow

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Login from "../components/login";
import { authActions } from "../_actions";
import { authHelpers } from "../_helpers";
import type { AuthState } from "../_reducers";

const styles = (theme: Object) => ({});

type Props = {
  classes: Object,
  auth: AuthState
};

type State = {
  errors: Object
};

class LoginContainer extends React.Component<Props, State> {
  state = {
    errors: {
      email: "",
      password: ""
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    const { auth, loginUser } = this.props;
    const { email, password } = auth;
    const errors = { email: "", password: "" };
    errors.email = authHelpers.validateEmail(email);
    errors.password = authHelpers.validatePassword(password);
    if (errors.email === "" && errors.password === "")
      loginUser({ email, password });
    this.setState({ errors });
  };
  handleChange = event => {
    this.props.changeAuthField({
      name: event.target.name,
      value: event.target.value
    });
  };
  render() {
    const { classes, auth, location } = this.props;
    const { email, password, loading, reset, authenticated } = auth;
    const { errors } = this.state;

    return (
      <div className={classes.root}>
        <Login
          email={email}
          password={password}
          errors={errors}
          loading={loading}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {reset && (
          <Redirect
            to={{
              pathname: "/change-password",
              state: { from: location }
            }}
          />
        )}
        {authenticated && (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeAuthField: authActions.changeAuthField,
  loginUser: authActions.loginUser
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginContainer));
