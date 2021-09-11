import { Fab, makeStyles } from "@material-ui/core";
import { Mail } from "@material-ui/icons";
import React from "react";

const Mailing = () => {
  window.open(
    "mailto:kumar.yash9313@gmail.com?subject=Hey Yash Messaging From Your Website"
  );
};
const useStyle = makeStyles({
  contact: {
    position: "fixed",
    bottom: "0",
    right: "0",
    margin: "20px",
  },
});
const Contact = () => {
  const classes = useStyle();
  return (
    <span onClick={Mailing}>
      <Fab
        color="primary"
        aria-label="mail"
        size="large"
        className={classes.contact}
      >
        <Mail />
      </Fab>
    </span>
  );
};

export default Contact;
