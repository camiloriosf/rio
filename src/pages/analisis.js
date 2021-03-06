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
    const { classes, match } = this.props;
    const { path } = match;
    return (
      <Header path={path}>
        <div className={classes.root}>Analisis</div>
      </Header>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
