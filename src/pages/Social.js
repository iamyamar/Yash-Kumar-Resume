import { makeStyles, Typography } from "@material-ui/core";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import "../assets/scss/app.scss";
const useStyle = makeStyles((theme) => ({
  container: {
    position: "fixed",
    right: 0,
  },
  item: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(3),
      marginRight: theme.spacing(0),
      cursor: "pointer",
      color: "white",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      color: "white",
    },
  },
}));
const Social = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <a
        href="https://www.linkedin.com/in/yash-kumar-a238bb183/"
        target="_blank"
        rel="noreferrer"
        className={classes.item}
        style={{ backgroundColor: "#0077B5" }}
      >
        <LinkedIn className={classes.icon} />
        <Typography className={classes.text}>LinkdIn</Typography>
      </a>
      <a
        href="https://github.com/iamyamar"
        target="_blank"
        rel="noreferrer"
        className={classes.item}
        style={{ backgroundColor: "#24292e" }}
      >
        <GitHub className={classes.icon} />
        <Typography className={classes.text}>Github</Typography>
      </a>
      <a
        href="https://www.instagram.com/yash_kumar8178/"
        target="_blank"
        rel="noreferrer"
        style={{ backgroundColor: "#DD2A7B" }}
        className={classes.item}
      >
        <Instagram className={classes.icon} />
        <Typography className={classes.text}>Instagram</Typography>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100044494637165"
        target="_blank"
        rel="noreferrer"
        className={classes.item}
        style={{ backgroundColor: "#3B5998" }}
      >
        <Facebook className={classes.icon} />
        <Typography className={classes.text}>Facebook</Typography>
      </a>
      <a
        href="https://twitter.com/iamyamar"
        target="_blank"
        rel="noreferrer"
        className={classes.item}
        style={{ backgroundColor: "#08A09E" }}
      >
        <Twitter className={classes.icon} />
        <Typography className={classes.text}>Twitter</Typography>
      </a>
    </div>
  );
};

export default Social;
