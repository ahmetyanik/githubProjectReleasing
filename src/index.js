import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Card from "./components/card/Card";
import Followers from "./components/Followers";
import Followings from "./components/Followings";
import Main from "./components/Main";
import "./index.css";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Main />
    </Route>

    <Route path="/followers/:username">
      <Followers />
    </Route>

    <Route path="/followings/:username">
      <Followings />
    </Route>

    <Route path="/info/:username">
      <Card />
    </Route>
  </Router>,
  document.getElementById("root")
);
