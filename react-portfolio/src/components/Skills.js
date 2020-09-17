import React from "react";
import "./Skills.css";

// Function set to display images of skills - Bug when screen gets smaller
function Skills() {
  return (
    <div className="skills" id="Skills">
      <h1 className="skills-heading">Skills</h1>
      {/* Cards Container which will have all the things in Card.js */}
      <div className="skills-container">
        <div className="skills-wrapper">
          <ul className="skills-items">
            <img
              className="skill-image"
              src="/images/html.png"
              alt="something"
            ></img>
            <img
              className="skill-image"
              src="/images/css.png"
              alt="something"
            ></img>
            <img
              className="skill-image"
              src="/images/javascript.png"
              alt="something"
            ></img>
            <img
              className="skill-image"
              src="/images/react.png"
              alt="something"
            ></img>
          </ul>
          <ul className="skills-items">
            <img
              className="skill-image"
              src="/images/sql.png"
              alt="something"
            ></img>
            <img
              className="skill-image"
              src="/images/csharp.png"
              alt="something"
            ></img>
            <img
              className="skill-image"
              src="/images/bootstrap.png"
              alt="something"
            ></img>
            <img
              className="skill-image"
              src="/images/net.png"
              alt="something"
            ></img>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
