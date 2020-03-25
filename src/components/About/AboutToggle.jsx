import React, { Component } from "react";
import AboutContainer from "./AboutContainer";

class AboutToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAboutMenu: false
    };
  }

  handleClick = () => {
    console.log("click");

    this.setState(prevState => {
      return {
        showAboutMenu: !prevState.showAboutMenu
      };
    });
  };

  render() {
    return (
      <div className="about-toggle-wrapper">
        <div className="about-toggle-container">
          {this.state.showAboutMenu && <AboutContainer />}

          <span onClick={this.handleClick} className="about-toggle">
            About
          </span>
        </div>
      </div>
    );
  }
}

export default AboutToggle;
