import React, { Component } from "react";
import Oana from "./images/Oana.png";
import Tully from "./images/Tully.jpg";
class AboutContainer extends Component {
  render() {
    return (
      <div className="about-container">
        <section>
          <h1>Momentum Clone</h1>
          <h2>Who Built This?</h2>
          <p>
            This app was built by two Coding Bootcamp Praha developers: Oana and
            Tully. It is a productivity app and was their final project for the
            12-week course.
          </p>
          <div className="about-thumbnails">
            <div className="about-thumbnails-card">
              <img src={Oana} alt="oanas-thumbanil" />
              <h3>Oana</h3>
            </div>
            <div className="about-thumbnails-card">
              <img src={Tully} alt="tullys-thumbanil" />
              <h3>Tully</h3>
            </div>
          </div>
          <h2>Tech Stack:</h2>
          <p>HTML, CSS, ReactJS, & Laravel</p>
          <div className="about-links">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Our Github
            </a>
          </div>
          <h4>
            Made with <span className="heart">♥</span> from quaratine in
            gorgeous Prague, Czech Republic.
          </h4>
        </section>
      </div>
    );
  }
}
export default AboutContainer;
