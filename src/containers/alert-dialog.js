// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import AlertDialog from "../components/alert-dialog";
import type { DialogState } from "../_reducers/dialog.reducers";
import { dialogActions } from "../_actions";

const styles = (theme: Object) => ({
  root: {}
});

type Props = {
  classes: Object,
  dialog: DialogState
};

class AlertDialogContainer extends React.Component<Props> {
  handleClose = () => {
    this.props.showDialog({});
  };
  render() {
    const { classes, dialog } = this.props;
    return (
      <div className={classes.root}>
        <AlertDialog {...dialog} handleClose={this.handleClose} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  showDialog: dialogActions.showDialog
};

const mapStateToProps = state => {
  return {
    dialog: state.dialog
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AlertDialogContainer));
