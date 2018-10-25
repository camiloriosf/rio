// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Header from "../components/header";
import type { HeaderState } from "../_reducers/header.reducers";
import { authActions, headerActions } from "../_actions";

const styles = (theme: Object) => ({});

type Props = {
  classes: Object,
  header: HeaderState,
  children: Object,
  path: string,
  logoutUser: Function,
  openDrawer: Function,
  closeDrawer: Function
};

class HeaderContainer extends React.Component<Props> {
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handleLogOut = () => {
    this.props.logoutUser();
  };
  render() {
    const { children, header, path, openDrawer, closeDrawer } = this.props;
    const { open } = header;
    return (
      <Header
        open={open}
        path={path}
        handleDrawerOpen={openDrawer}
        handleDrawerClose={closeDrawer}
        handleLogOut={this.handleLogOut}
      >
        {children}
      </Header>
    );
  }
}

const mapDispatchToProps = {
  logoutUser: authActions.logoutUser,
  openDrawer: headerActions.openDrawer,
  closeDrawer: headerActions.closeDrawer
};

const mapStateToProps = state => {
  return {
    header: state.header
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HeaderContainer));
