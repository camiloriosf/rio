// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import OperationalLogHeader from "./operational-log-header";

const styles = (theme: Object) => ({
  root: {},
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

type Props = {
  classes: Object
};

class OperationalLogContainer extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
          <OperationalLogHeader />
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(OperationalLogContainer));
