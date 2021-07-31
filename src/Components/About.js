import React from "react";
import "../dist/css/About.css";

function About(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div id="anchor-about" className="title-about">
          About Me
        </div>
        <p>
          Hey! My name is Ken and I'm an aspiring web developer with a passion
          for frontend development and design. My workflow focuses on efficiency
          and elegance, while keeping it simple and getting the worke done. I
          have been learning to develop web sites for over a year now, learning
          something new everyday to create beautiful and engaging web
          experiences.
        </p>
        <p>
          Interesting facts: I am also a pharmacist! I graduated from the
          University of Washington School of Pharmacy in 2020. I also like
          photography (both digital and film), hiking and traveling.
        </p>
      </div>
    </div>
  );
}

export default About;
