import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todoslist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentID: null
    };
  }

  // setCurrentID = id => {
  //   this.setState({
  //     currentID: id
  //   });
  // };

  setCurrentID = id => {
    const makeState = prevState => {
      console.log("prevstate", prevState);
      return {
        currentID: prevState.currentID === id ? null : id
      };
    };
    this.setState(makeState);
  };

  //  make it to where if the prevstate ID is equal to the current ID, then this.state.currentID = null

  render() {
    console.log("todolist props", this.props);
    return (
      <div className="todo-list">
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            currentID={this.state.currentID}
            setCurrentID={this.setCurrentID}
            handleChange={this.props.handleChange}
            deleteTodo={this.props.deleteTodo}
            setItemToEdit={this.props.setItemToEdit}
            itemToEdit={this.props.itemToEdit}
            handleTextInputChange={this.props.handleTextInputChange}
          />
        ))}
      </div>
    );
  }
}

export default Todoslist;
