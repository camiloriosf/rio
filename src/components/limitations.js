// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  root: {},
  container: {
    width: "100%",
    marginTop: theme.spacing.unit,
    overflowX: "auto",
    maxHeight: 200
  }
});

type Props = {
  classes: Object,
  data: Array<Object>
};

class Limitations extends React.Component<Props> {
  render() {
    const { classes, data } = this.props;

    return (
      <div>
        <Typography variant="headline" component="h3">
          Limitaciones
        </Typography>
        <div className={classes.container}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Configuracion</TableCell>
                <TableCell>CMg</TableCell>
                <TableCell>Estado Operacional</TableCell>
                <TableCell>Consigna</TableCell>
                <TableCell>Instrucción Operacional</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(item => {
                return (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.conf}
                    </TableCell>
                    <TableCell numeric>{item.cv}</TableCell>
                    <TableCell>{item.opState}</TableCell>
                    <TableCell>{item.slogan}</TableCell>
                    <TableCell>{item.opInstruction}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Limitations);
