// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import OperationalLogHeader from "../components/operational-log-header";

const styles = (theme: Object) => ({
  root: {}
});

type Props = {
  classes: Object
};

class OperationalLogHeaderContainer extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <OperationalLogHeader />
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
)(withStyles(styles)(OperationalLogHeaderContainer));
