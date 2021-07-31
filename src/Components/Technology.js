import React from "react";
import "../dist/css/Technology.css";

function Technology(props) {
  return (
    <div className="wrapper-accent1">
      <div className="container-1">
        <div id="anchor-technologies" className="title-tech">
          Technologies
        </div>
        <div className="tech-container">
          <div className="tech-card">
            <h2>Frontend</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="tech-card">
            <h2>Backend</h2>
            <ul>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>CRUD</li>
            </ul>
          </div>
          <div className="tech-card">
            <h2>Others</h2>
            <ul>
              <li>Adobe Creative Suite</li>
              <li>Squarespace</li>
              <li>Figma</li>
              <li>VS Code</li>
              <li>Git Version Control</li>
              <li>Linux/MacOS/Terminal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
