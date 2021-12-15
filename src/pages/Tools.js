import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Toolcard from "../components/Toolcard";
import Data from "../assets/data/ToolsAPI";

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

const Tools = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <h6 className={classes.heading}>Tools & Technologies</h6>
      </div>

      <div>
        <Toolcard data={Data} />
      </div>
    </div>
  );
};

export default Tools;
