// @flow

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ChangePassword from "../components/change-password";
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

class ChangePasswordContainer extends React.Component<Props, State> {
  state = {
    errors: {
      email: "",
      password: "",
      newPassword: ""
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    const { auth, changePassword } = this.props;
    const { email, password, newPassword } = auth;
    const errors = { email: "", password: "", newPassword: "" };
    errors.email = authHelpers.validateEmail(email);
    errors.password = authHelpers.validatePassword(password);
    errors.newPassword = authHelpers.validatePassword(newPassword);
    if (
      errors.email === "" &&
      errors.password === "" &&
      errors.newPassword === ""
    )
      changePassword({ email, password, newPassword });
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
    const {
      email,
      password,
      newPassword,
      loading,
      reset,
      authenticated
    } = auth;
    const { errors } = this.state;
    return (
      <div className={classes.root}>
        <ChangePassword
          email={email}
          password={password}
          newPassword={newPassword}
          errors={errors}
          loading={loading}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {!reset && (
          <Redirect
            to={{
              pathname: "/login",
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
  changePassword: authActions.changePassword
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ChangePasswordContainer));
