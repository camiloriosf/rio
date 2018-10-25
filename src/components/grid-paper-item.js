// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    margin: theme.spacing.unit
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: "100%"
  }
});

type Props = {};

class GridPaperItem extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
          {this.props.children}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(GridPaperItem);
