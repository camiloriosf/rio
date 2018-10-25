// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

type Props = {
  classes: Object
};

class OperationalLogHeader extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>header</div>;
  }
}

export default withStyles(styles)(OperationalLogHeader);
