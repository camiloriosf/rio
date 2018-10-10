// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import ChangePasswordContainer from "../containers/change-password";

const styles = (theme: Object) => ({
  root: {}
});

type Props = {
  classes: Object
};

class ChangePassword extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ChangePasswordContainer />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(ChangePassword));
