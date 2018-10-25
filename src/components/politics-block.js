// @flow

import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 600
  },
  item: {
    backgroundColor: theme.palette.primary.main
  },
  value: {
    textAlign: "right"
  }
});

type Props = {
  classes: Object,
  title: string,
  politics: Array<Object>,
  handleMouseEnter: Function,
  handleMouseLeave: Function
};

class PoliticsBlock extends React.Component<Props> {
  render() {
    const {
      classes,
      title,
      politics,
      id,
      handleMouseEnter,
      handleMouseLeave
    } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            {title}
          </Typography>
          <List>
            {politics.map(politic => (
              <ListItem
                key={politic.id}
                button
                onMouseEnter={handleMouseEnter({ id: politic.id })}
                onMouseLeave={handleMouseLeave}
                className={classNames(id === politic.id && classes.item)}
              >
                <ListItemText primary={politic.name} />
                <ListItemText
                  primary={politic.value}
                  classes={{ primary: classes.value }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(PoliticsBlock);
