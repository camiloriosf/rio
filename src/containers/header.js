// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Header from "../components/header";
import { authActions } from "../_actions";

const styles = (theme: Object) => ({});

type Props = {
  classes: Object,
  children: Object,
  logoutUser: Function
};

class HeaderContainer extends React.Component<Props> {
  handleLogOut = () => {
    this.props.logoutUser();
  };
  render() {
    const { children } = this.props;
    return <Header handleLogOut={this.handleLogOut}>{children}</Header>;
  }
}

const mapDispatchToProps = {
  logoutUser: authActions.logoutUser
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(HeaderContainer));
