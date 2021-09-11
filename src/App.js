import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./parts/header";
import Contact from "./components/Contact";
import "./assets/scss/app.scss";
import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Tools from "./pages/Tools";
import Social from "./pages/Social";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
const useStyle = makeStyles((theme) => ({
  root: {
    paddingtop: theme.spacing(20),
  },
}));
const App = () => {
  const classes = useStyle();
  return (
    <div>
      <Header />
      <Grid container className={classes.root}>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={9} xs={8}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/projects" component={Projects} />
            <Route path="/tools" component={Tools} />
            <Route path="/experience" component={Experience} />
            <Route path="/certificate" component={Certificates} />
            <Redirect to="./" />
          </Switch>
        </Grid>
        <Grid item sm={1} xs={2}>
          <Social />
        </Grid>
      </Grid>
      <Contact />
    </div>
  );
};

export default App;
