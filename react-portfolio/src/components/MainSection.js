import React from "react";
import "../App.css";
import "./MainSection.css";

// Main Section of the website with video and intro
function MainSection() {
  return (
    <div className="main-container" id="Main">
      <video src="/videos/mainsectionvid.mp4" autoPlay loop muted></video>
      <h1>ARNOLDO MARIN</h1>
      <p>Junior Web developer/UI Designer</p>
      <div className="main-btn">
        <button className="large-btn">Learn More</button>
        <button className="large-btn">Contact Me</button>
      </div>
    </div>
  );
}

export default MainSection;
