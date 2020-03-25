import React, { Component } from "react";
import TodoMiniMenu from "./TodoMiniMenu";
import MiniMenuIcon from "./MiniMenuIcon";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    // this.edit = React.createRef();

    this.state = {
      menuDisplay: "none"
    };
  }

  showMiniMenu = () => {
    return this.props.currentID === this.props.todo.id;
  };

  handleClick = () => {
    this.props.setCurrentID(this.props.todo.id);
  };

  handleMouseEnter = e => {
    e.stopPropagation();
    this.setState({
      menuDisplay: "inline-block"
    });
  };

  handleMouseOut = e => {
    e.stopPropagation();
    if (!this.showMiniMenu()) {
      this.setState({
        menuDisplay: "none"
      });
    }
  };

  componentDidMount() {}

  render() {
    const { completed, id, title } = this.props.todo;
    const completedStyle = {
      opacity: ".625",
      textDecoration: "line-through"
    };
    const isReadOnly = id !== this.props.itemToEdit;
    console.log("isreadonly", isReadOnly);

    return (
      <div
        className="todo-item-wrapper"
        onMouseOut={this.handleMouseOut}
        onMouseEnter={this.handleMouseEnter}
      >
        <li
          className="todo-item"
          onMouseOut={this.handleMouseOut}
          onMouseEnter={this.handleMouseEnter}
        >
          <div
            className="todo-left"
            onMouseOut={this.handleMouseOut}
            onMouseEnter={this.handleMouseEnter}
          >
            <input
              type="checkbox"
              checked={completed}
              onChange={() => this.props.handleChange(id)}
              onMouseOut={this.handleMouseOut}
              onMouseEnter={this.handleMouseEnter}
            />

            <input
              // ref={this.edit}
              className="todo-item-title"
              readOnly={isReadOnly}
              id={id}
              type="text"
              value={title}
              style={completed ? completedStyle : null}
              onMouseOut={this.handleMouseOut}
              onMouseEnter={this.handleMouseEnter}
              onChange={this.props.handleTextInputChange}
            />
          </div>
          <span
            className="mini-menu-button"
            style={{ display: this.state.menuDisplay }}
            onMouseOut={this.handleMouseOut}
            onMouseEnter={this.handleMouseEnter}
          >
            <MiniMenuIcon
              id={id}
              deleteTodo={this.props.deleteTodo}
              setItemToEdit={this.props.setItemToEdit}
              showMiniMenu={this.showMiniMenu()}
              handleClick={this.handleClick}
            />
          </span>
        </li>
      </div>
    );
  }
}

export default TodoItem;

// functional version
// import React from "react"

// function TodoItem(props) {
//   return <li>{props.todo.title}</li>
// }

// export default TodoItem
