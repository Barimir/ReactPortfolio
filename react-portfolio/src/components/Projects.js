import React from "react";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <div className="cards" id="Projects">
      <h1>Projects</h1>
      {/* Cards Container which will have all the things in Card.js */}
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <Card
              src="/images/construction.png"
              text="A responsive web application that simplifies the home-building process"
              label="ManageMyBuild"
              path="/"
            ></Card>
            <Card
              src="/images/mobile-game.png"
              text="A family puzzle game that requires team work and strategy in order to win!"
              label="GrowthFactor"
              path="/"
            ></Card>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
