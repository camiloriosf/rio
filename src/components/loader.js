// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme: Object) => ({
  root: {
    width: "100%",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

type Props = {
  classes: Object
};

class Loader extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CircularProgress size={50} />
      </div>
    );
  }
}

export default withStyles(styles)(Loader);
