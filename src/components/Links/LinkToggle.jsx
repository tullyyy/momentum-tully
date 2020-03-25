import React, { Component } from "react";
import LinkContainer from "./LinkContainer";

class LinkToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLinkMenu: false
    };
  }

  handleClick = () => {
    console.log("click");

    this.setState(prevState => {
      return {
        showLinkMenu: !prevState.showLinkMenu
      };
    });
  };

  render() {
    return (
      <div className="link-toggle-wrapper">
        <div className="link-toggle-container">
          {this.state.showLinkMenu && <LinkContainer />}

          <span onClick={this.handleClick} className="link-toggle">
            Links
          </span>
        </div>
      </div>
    );
  }
}

export default LinkToggle;
