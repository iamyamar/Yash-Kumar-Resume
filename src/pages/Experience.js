import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(8),
  },
  heading: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontSize: "18px",
  },
}));

const Experience = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <h6 className={classes.heading}>Experience</h6>
      </div>
    </div>
  );
};

export default Experience;
