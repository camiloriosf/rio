import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TimelineIcon from "@material-ui/icons/Timeline";
import logo from "../_assets/logoCoordinador.svg";

const drawerWidth = 240;

const MyLink = props => <Link to={props.to} {...props} />;

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  gutters: {
    paddingRight: 0
  },
  selected: {
    backgroundColor: theme.palette.primary.main
  },
  selectedIcon: {
    color: theme.palette.primary.contrastText
  },
  selectedText: {
    color: theme.palette.primary.contrastText
  }
});

type Props = {
  classes: Object,
  children: Object,
  open: boolean,
  path: string,
  handleDrawerOpen: Function,
  handleDrawerClose: Function,
  handleLogOut: Function
};

type State = {
  anchorEl?: string,
  mobileMoreAnchorEl?: string
};

class Header extends React.Component<Props, State> {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const {
      classes,
      children,
      open,
      path,
      handleDrawerOpen,
      handleDrawerClose,
      handleLogOut
    } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClose}>
          <FormattedMessage id="header:myAccount" defaultMessage="Account" />
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <FormattedMessage id="header:logout" defaultMessage="Log Out" />
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleClose}>
          <FormattedMessage id="header:myAccount" defaultMessage="Account" />
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <FormattedMessage id="header:logout" defaultMessage="Log Out" />
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          color="default"
          className={classNames(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar
            disableGutters={!open}
            classes={{ gutters: classes.gutters }}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Coordinador Electrico Nacional" />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !open && classes.drawerPaperClose
            )
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              component={MyLink}
              to="/"
              className={classNames(path === "/" && classes.selected)}
            >
              <ListItemIcon>
                <DashboardIcon
                  className={classNames(path === "/" && classes.selectedIcon)}
                />
              </ListItemIcon>
              <ListItemText
                primary="Resúmen"
                primaryTypographyProps={{ color: "inherit" }}
                className={classNames(path === "/" && classes.selectedText)}
              />
            </ListItem>
            <ListItem
              button
              component={MyLink}
              to="/registro"
              className={classNames(path === "/registro" && classes.selected)}
            >
              <ListItemIcon>
                <ListIcon
                  className={classNames(
                    path === "/registro" && classes.selectedIcon
                  )}
                />
              </ListItemIcon>
              <ListItemText
                primary="Registro"
                primaryTypographyProps={{ color: "inherit" }}
                className={classNames(
                  path === "/registro" && classes.selectedText
                )}
              />
            </ListItem>
            <ListItem
              button
              component={MyLink}
              to="/politica"
              className={classNames(path === "/politica" && classes.selected)}
            >
              <ListItemIcon>
                <AssignmentIcon
                  className={classNames(
                    path === "/politica" && classes.selectedIcon
                  )}
                />
              </ListItemIcon>
              <ListItemText
                primary="Política"
                primaryTypographyProps={{ color: "inherit" }}
                className={classNames(
                  path === "/politica" && classes.selectedText
                )}
              />
            </ListItem>
            <ListItem
              button
              component={MyLink}
              to="/analisis"
              className={classNames(path === "/analisis" && classes.selected)}
            >
              <ListItemIcon>
                <TimelineIcon
                  className={classNames(
                    path === "/analisis" && classes.selectedIcon
                  )}
                />
              </ListItemIcon>
              <ListItemText
                primary="Análisis"
                primaryTypographyProps={{ color: "inherit" }}
                className={classNames(
                  path === "/analisis" && classes.selectedText
                )}
              />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
