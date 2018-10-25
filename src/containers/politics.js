// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Politics from "../components/politics";

let id = 0;
function createData(central, conf, cmg, opState, slogan, opInstruction) {
  id += 1;
  return { id, central, conf, cmg, opState, slogan, opInstruction };
}

const data = [
  createData("Licanten", "LICANTEN_1", 24, "OP", "CB", "XX"),
  createData("Licanten", "LICANTEN_1", 24, "OP", "CB", "XX"),
  createData("Licanten", "LICANTEN_1", 24, "OP", "CB", "XX"),
  createData("Licanten", "LICANTEN_1", 24, "OP", "CB", "XX"),
  createData("Licanten", "LICANTEN_1", 24, "OP", "CB", "XX"),
  createData("Licanten", "LICANTEN_1", 24, "OP", "CB", "XX"),
  createData("Licanten", "LICANTEN_1", 24, "OP", "CB", "XX"),
  createData("Licanten", "LICANTEN_1", 24, "OP", "CB", "XX")
];

const styles = (theme: Object) => ({
  root: {}
});

type Props = {
  classes: Object
};

class PoliticsContainer extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Politics data={data} />
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
)(withStyles(styles)(PoliticsContainer));
