// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import SubSystems from "../components/sub-systems";

let id = 0;
function createData(name, line, central, cmg) {
  id += 1;
  return { id, name, line, central, cmg };
}

const data = [
  createData("Zona 1", "linea 1, linea 2", "Taltal", 24),
  createData("Zona 1", "linea 1, linea 2", "Taltal", 24),
  createData("Zona 1", "linea 1, linea 2", "Taltal", 24),
  createData("Zona 1", "linea 1, linea 2", "Taltal", 24),
  createData("Zona 1", "linea 1, linea 2", "Taltal", 24)
];

const styles = (theme: Object) => ({
  root: {}
});

type Props = {
  classes: Object
};

class SubSystemsContainer extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SubSystems data={data} />
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
)(withStyles(styles)(SubSystemsContainer));
