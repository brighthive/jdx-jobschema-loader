import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./App.css";
import Loader from "./components/Loader/Loader";
import Job from "./components/Job/Job";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand href="/">JDX JobSchema Loader</Navbar.Brand>
        </Navbar>
        <Container className="App">
          <Route path="/" exact component={Loader} />
          <Route path="/readable" exact component={Job} />
        </Container>
      </div>
    );
  }
}

export default App;
