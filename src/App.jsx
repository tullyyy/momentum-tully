import React, { Component } from "react";
import TodoToggle from "./components/Todos/TodoToggle";
import LinkToggle from "./components/Links/LinkToggle";
import getBackgroundImageURL from "./getBackgroundImageURL";

class App extends Component {
  constructor(props) {
    super(props);

    this.backgroundImage = getBackgroundImageURL();
  }

  render() {
    return (
      <div
        style={{ backgroundImage: `url("${this.backgroundImage}")` }}
        className="main"
      >
        <LinkToggle />
        <TodoToggle />
      </div>
    );
  }
}

export default App;
