import React, { Component } from "react";

class TodoMiniMenu extends Component {
  delete = () => {
    this.props.deleteTodo(this.props.id);
  };

  edit = () => {
    this.props.setItemToEdit(this.props.id);
  };

  render() {
    return (
      <ul className="mini-menu">
        <li
          className="edit"
          onClick={this.edit}
          // onClick={e => this.edit.current.focus()}
        >
          <button>Edit</button>
        </li>
        <hr />
        <li className="move-inbox">
          <button>Move To Inbox</button>
        </li>
        <li className="move-unknown">
          <button>Move To...</button>
        </li>
        <hr />
        <li className="delete" onClick={this.delete}>
          <button>Delete</button>
        </li>
      </ul>
    );
  }
}

export default TodoMiniMenu;

// functional version
// import React from "react"

// function TodoItem(props) {
//   return <li>{props.todo.title}</li>
// }

// export default TodoItem
