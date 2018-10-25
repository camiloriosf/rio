// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import yellow from "@material-ui/core/colors/yellow";
import DescriptionIcon from "@material-ui/icons/Comment";

const styles = theme => ({
  root: {},
  container: {
    width: "100%",
    marginTop: theme.spacing.unit,
    overflowX: "auto",
    maxHeight: 400
  },
  table: {},
  yellowIcon: {
    color: yellow[700]
  }
});

type Props = {
  classes: Object,
  data: Array<Object>
};

class SubSystems extends React.Component<Props> {
  render() {
    const { classes, data } = this.props;

    return (
      <div>
        <Typography variant="headline" component="h3">
          Subsistemas
        </Typography>
        <div className={classes.container}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Subsistema</TableCell>
                <TableCell>Donde</TableCell>
                <TableCell>Central Cmg</TableCell>
                <TableCell numeric>Cmg</TableCell>
                <TableCell>Comentarios</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(item => {
                return (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell>{item.line}</TableCell>
                    <TableCell>{item.central}</TableCell>
                    <TableCell numeric>{item.cmg}</TableCell>
                    <TableCell numeric>
                      <DescriptionIcon className={classes.yellowIcon} />
                    </TableCell>
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

export default withStyles(styles)(SubSystems);
