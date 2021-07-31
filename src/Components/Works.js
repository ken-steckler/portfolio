import React from "react";
import "../dist/css/Work.css";
import photography from "./images/photography.png";
import weatherly from "./images/weatherly.png";
import Kohee from "./images/Kohee.png";

function Works(props) {
  return (
    <div className="wrapper-2">
      <div className="container-2">
        <div id="anchor-works" className="title-works">
          Works
        </div>
        <div className="work-cards">
          <div className="work-card">
            <h2>Kohee Coffee e-Commerce Site</h2>
            <p>Technology: REACT, CSS/SASS</p>
            <p>Work in progress</p>
            <img src={Kohee}></img>
          </div>
          <div className="work-card">
            <h2>Weatherly: Simply a weather app</h2>
            <p>Technology: REACT, NODE, API, JSON</p>
            <a href="https://ken-steckler.github.io/weatherly/">Link</a>
            <img src={weatherly}></img>
          </div>
          <div className="work-card">
            <h2>Photography Portfolio</h2>
            <p>Technology: Squarespace</p>
            <a href="https://www.kenstecklerphotography.com">Link</a>
            <img src={photography}></img>
          </div>
          <div className="work-card">
            <h2>Vaccine Scheduler</h2>
            <p>Technology: HTML, CSS/SASS, NODE, API</p>
            <p>Work in progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
