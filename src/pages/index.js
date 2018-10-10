// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Header from "../containers/header";

const styles = (theme: Object) => ({
  root: {}
});

type Props = {
  classes: Object
};

class Index extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Header>
        <div className={classes.root}>Home</div>
      </Header>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
