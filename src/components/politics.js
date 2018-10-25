// @flow

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  root: {},
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  container: {
    width: "100%",
    marginTop: theme.spacing.unit,
    overflowX: "auto",
    maxHeight: 500
  },
  table: {}
});

type Props = {
  classes: Object,
  data: Array<Object>
};

class Politics extends React.Component<Props> {
  state = {
    subsystem: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes, data } = this.props;

    return (
      <div>
        <Typography variant="headline" component="h3">
          Politica
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="subsystem-simple">Subsistema</InputLabel>
          <Select
            value={this.state.subsystem}
            onChange={this.handleChange}
            inputProps={{
              name: "subsystem",
              id: "subsystem-simple"
            }}
          >
            <MenuItem value="">
              <em>Todas</em>
            </MenuItem>
            <MenuItem value={10}>Subsistema 1</MenuItem>
            <MenuItem value={20}>Subsistema 2</MenuItem>
            <MenuItem value={30}>Subsistema 3</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.container}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Central</TableCell>
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
                      {item.central}
                    </TableCell>
                    <TableCell>{item.conf}</TableCell>
                    <TableCell numeric>{item.cmg}</TableCell>
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

export default withStyles(styles)(Politics);
