import React from "react";
import "../dist/css/Work.css";

function Works(props) {
  return (
    <div className="wrapper-2">
      <div className="container-2">
        <div id="anchor-works" className="title-works">
          Works
        </div>
        <div className="work-cards">
          <div className="work-card">
            <h2>Giftxchange</h2>
            <p>Technology: EJS, JavaScript, Express, Bootstrap</p>
            <p>Work in progress</p>
          </div>
          <div className="work-card">
            <h2>Weatherly: Simply a weather app</h2>
            <p>Technology: ReactJS, NodeJS, API, JSON</p>
            <a href="https://ken-steckler.github.io/weatherly/">Link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
