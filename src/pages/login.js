// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import LoginContainer from "../containers/login";

const styles = (theme: Object) => ({
  root: {}
});

type Props = {
  classes: Object
};

class Login extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LoginContainer />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Login));
