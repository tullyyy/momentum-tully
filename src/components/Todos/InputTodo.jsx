import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: ""
  };
  handleTextInputChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("inputprops", this.props);
    this.props.addTodoItem(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="New Todo"
          className="input-text"
          value={this.state.title}
          onChange={this.handleTextInputChange}
        />{" "}
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    );
  }
}
export default InputTodo;
