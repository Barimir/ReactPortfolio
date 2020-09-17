import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

// Footer composed of links to social media
function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link
              className="social-icon-link linkedIn"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <img src="/images/linkedin.png" alt="Linkedin"></img>
            </Link>
            <Link
              className="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <img src="/images/github.png" alt="Github"></img>
            </Link>
            <Link
              className="social-icon-link gmail"
              to="/Home"
              target="_blank"
              aria-label="Gmail"
            >
              <img src="/images/gmail.png" alt="Gmail"></img>
            </Link>
          </div>
        </div>
      </section>
      <h5 className="footer-rights">Arnoldo Marin © 2020</h5>
    </div>
  );
}

export default Footer;
