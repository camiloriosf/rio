// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PoliticsBlock from "../components/politics-block";

const politicsA = [
  { id: 1, name: "Politica 1", value: 5 },
  { id: 2, name: "Politica 2", value: 10 },
  { id: 3, name: "Politica 3", value: 20 }
];
const politicsB = [
  { id: 2, name: "Politica 2", value: 10 },
  { id: 1, name: "Politica 1", value: 20 },
  { id: 3, name: "Politica 3", value: 35 }
];

const styles = (theme: Object) => ({
  root: { margin: theme.spacing.unit }
});

type Props = {
  classes: Object
};

class ComparePoliticsContainer extends React.Component<Props> {
  state = {
    id: -1
  };
  handleMouseEnter = ({ id }) => () => {
    this.setState({ id });
  };
  handleMouseLeave = () => {
    this.setState({ id: -1 });
  };
  render() {
    const { classes } = this.props;
    const { id } = this.state;
    return (
      <div className={classes.root}>
        <Grid container spacing={40} justify="space-evenly">
          <Grid item xs={4}>
            <PoliticsBlock
              title="Bloque A"
              politics={politicsA}
              id={id}
              handleMouseEnter={this.handleMouseEnter}
              handleMouseLeave={this.handleMouseLeave}
            />
          </Grid>
          <Grid item xs={4}>
            <PoliticsBlock
              title="Bloque B"
              politics={politicsB}
              id={id}
              handleMouseEnter={this.handleMouseEnter}
              handleMouseLeave={this.handleMouseLeave}
            />
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
)(withStyles(styles)(ComparePoliticsContainer));
