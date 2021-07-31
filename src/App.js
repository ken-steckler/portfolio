import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import ScrollButton from "./Components/ScrollButton";
import { Content } from "./Components/Styles";
import "./App.css";

import MainPage from "./Components/MainPage";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Technology from "./Components/Technology";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainPage />
        <div>
          <About />
          <Technology />
          <Works />
          <Contact />
        </div>
        <Fragment>
          <Content />
          <ScrollButton />
        </Fragment>
      </div>
    </Router>
  );
}

export default App;
