// @flow

import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Limitations from "../components/limitations";

let id = 0;
function createData(conf, cv, opState, slogan, opInstruction) {
  id += 1;
  return { id, conf, cv, opState, slogan, opInstruction };
}

const data = [
  createData("VALDIVIA_BL1_COGEN_PINO", 24, "OP", "CB", "XX"),
  createData("ATACAMA-1TG1AB_TG1A+TG1B+TV1_GNL_INFLEX", 24, "OP", "CB", "XX"),
  createData("CMPCCORDILLERA_BL1_COGEN", 24, "OP", "CB", "XX"),
  createData("KELAR-TG12_TG1+TG2+TV1_GNL_INFLEX", 24, "OP", "CB", "XX"),
  createData("NEHUENCO-2_TG1+TV1_GNL_INFLEX", 24, "OP", "CB", "XX"),
  createData("CANDELARIA-1_GNL_INFLEX", 24, "OP", "CB", "XX"),
  createData("SANISIDRO-1_TG1+TV1+FA1_GNL_INFLEX", 24, "OP", "CB", "XX"),
  createData("NEHUENCO-1_TG1_GNL_INFLEX", 24, "OP", "CB", "XX")
];

const styles = (theme: Object) => ({
  root: {}
});

type Props = {
  classes: Object
};

class LimitationsContainer extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Limitations data={data} />
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
)(withStyles(styles)(LimitationsContainer));
