import React from "react";
import { makeStyles } from "@material-ui/core";
import Image from "../assets/yash.jpg";

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
  image: {
    padding: theme.spacing(2),
    borderRadius: "500px",
  },
  imgcont: {
    display: "flex",
    justifyContent: "center",
  },
  para: {
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <h6 className={classes.heading}>Home page</h6>
      </div>
      <div className={classes.imgcont}>
        <img
          src={Image}
          className={classes.image}
          alt="logo"
          height="200px"
          width="200px"
        ></img>
      </div>
      <div className={classes.data}>
        <p className={classes.para}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Home;
