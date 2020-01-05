import React from "react";
import LandingPage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import About from "./aboutme";
import Projects from "./projects";
import Resume from "./resume";
import Contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
