import React, { Component } from "react";
import "../dist/css/MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <div className="myintro">
          <div className="overlay">
            <h1>Hi, I'm Ken</h1>
            <p>Web Developer</p>
            <p>Curating elegant and simple web applications</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
