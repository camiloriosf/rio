// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridPaperItem from "../components/grid-paper-item";
import SubSystems from "./sub-systems";
import Instructions from "./instructions";
import Limitations from "./limitations";
import Politics from "./politics";

const styles = (theme: Object) => ({
  root: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  item: {
    display: "flex"
  }
});

type Props = {
  classes: Object
};

class SummaryContainer extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify="space-between">
          <Grid item xs={6} className={classes.item}>
            <GridPaperItem>
              <SubSystems />
            </GridPaperItem>
          </Grid>
          <Grid item xs={6} container>
            <Grid item xs={12} className={classes.item}>
              <GridPaperItem>
                <Instructions />
              </GridPaperItem>
            </Grid>
            <Grid item xs={12} className={classes.item}>
              <GridPaperItem>
                <Limitations />
              </GridPaperItem>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            <GridPaperItem>
              <Politics />
            </GridPaperItem>
          </Grid>
        </Grid>
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
)(withStyles(styles)(SummaryContainer));
