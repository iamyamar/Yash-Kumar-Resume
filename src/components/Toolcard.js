import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: 350,
    height: 120,
  },
}));
const Toolcard = (props) => {
  const classes = useStyle();
  console.log(props.data);
  return (
    <div>
      {props.data.map((elem) => {
        return (
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img src={elem.image} alt="logo" height="60px" width="60px"></img>

            <h3>{elem.name}</h3>

            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Toolcard;
