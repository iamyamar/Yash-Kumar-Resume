import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  appbar: {
    boxShadow: "10",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  account: {
    color: "white",
  },
}));

const Navbar = () => {
  const classes = useStyle();
  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography varient="h6" component="h2">
            Yash Kumar Resume
          </Typography>

          <Button className={classes.account}>
            <AccountCircle />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
