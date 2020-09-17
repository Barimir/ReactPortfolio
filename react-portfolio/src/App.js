import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      {/* will contain all pages and paths  */}
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;