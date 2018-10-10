// @flow

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import green from "@material-ui/core/colors/green";

const styles = (theme: Object) => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  wrapper: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3,
    position: "relative"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

type Props = {
  classes: Object,
  email: string,
  password: string,
  newPassword: string,
  errors: Object,
  loading: boolean,
  handleSubmit: Function,
  handleChange: Function
};

class ChangePassword extends React.Component<Props> {
  handleSubmit = async event => {
    event.preventDefault();
  };
  render() {
    const {
      classes,
      email,
      password,
      newPassword,
      errors,
      loading,
      handleSubmit,
      handleChange
    } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Change Password</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormControl
                margin="normal"
                fullWidth
                error={errors.email !== "" && true}
                disabled
              >
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleChange}
                />
                {errors.email !== "" && (
                  <FormHelperText id="email-error-text">
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                margin="normal"
                fullWidth
                error={errors.password !== "" && true}
                disabled
              >
                <InputLabel htmlFor="password">Current Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handleChange}
                />
                {errors.password !== "" && (
                  <FormHelperText id="password-error-text">
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                margin="normal"
                fullWidth
                error={errors.newPassword !== "" && true}
              >
                <InputLabel htmlFor="newPassword">New Password</InputLabel>
                <Input
                  name="newPassword"
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={handleChange}
                />
                {errors.password !== "" && (
                  <FormHelperText id="new-password-error-text">
                    {errors.newPassword}
                  </FormHelperText>
                )}
              </FormControl>
              <div className={classes.wrapper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  Change Password
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ChangePassword);
