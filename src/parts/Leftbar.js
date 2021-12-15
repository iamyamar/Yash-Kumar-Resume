import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Build,
  Description,
  Filter,
  Home,
  MenuBook,
  Receipt,
} from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
  },
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
  },
  item: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  text: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    color: "white",
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
}));
const Leftbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <NavLink to="/" className={classes.item}>
          <Home className={classes.icon} />
          <Typography className={classes.text}>Homepage</Typography>
        </NavLink>
        <NavLink to="/education" className={classes.item}>
          <Receipt className={classes.icon} />
          <Typography className={classes.text}>Education</Typography>
        </NavLink>
        <NavLink to="./tools" className={classes.item}>
          <Build className={classes.icon} />
          <Typography className={classes.text}>Technologies</Typography>
        </NavLink>
        <NavLink to="./projects" className={classes.item}>
          <MenuBook className={classes.icon} />
          <Typography className={classes.text}>Projects</Typography>
        </NavLink>
        <NavLink to="./experience" className={classes.item}>
          <Description className={classes.icon} />
          <Typography className={classes.text}>Experience</Typography>
        </NavLink>
        <NavLink to="./certificate" className={classes.item}>
          <Filter className={classes.icon} />
          <Typography className={classes.text}>Certificates</Typography>
        </NavLink>
      </Container>
    </div>
  );
};

export default Leftbar;
