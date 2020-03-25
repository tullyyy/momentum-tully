import React, { Component } from "react";
import TodoContainer from "./TodoContainer";
import { v4 as uuid } from "uuid";

class TodoToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      itemToEdit: null,
      todos: []
    };
  }

  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  handleTextInputChange = e => {
    console.log("eeee", e.target.id);
    const id = e.target.id;
    const value = e.target.value;
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.title = value;
        }
        return todo;
      });
      return {
        ...prevState,
        todos: updatedTodos
      };
    });
    // I need to know the ID of the field of the todo that I'm editing,
    // then, I need to find that item in my todos array, then I need to change the title & reset the state.
  };

  // With the filter() method, we are saying that for each of the todos data that we are looping through, we want to retain the once whose id is not equal to the id passed in.

  editTodo = id => {
    this.setState({});
  };

  setItemToEdit = id => {
    // console.log("id", id);
    this.setState({
      itemToEdit: id
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };
  // Please note the spread operator (…) in the code. It allows us to grab the current todos item(s) at every point. As this is necessary for the code to work.

  addTodoItem = title => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    };
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newTodo]
      };
    });
  };

  handleClick = () => {
    console.log("click");

    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };

  render() {
    return (
      <div className="todo-toggle-wrapper">
        <div className="todo-toggle-container">
          {this.state.showMenu && (
            <TodoContainer
              todos={this.state.todos}
              handleChange={this.handleChange}
              deleteTodo={this.deleteTodo}
              setItemToEdit={this.setItemToEdit}
              addTodoItem={this.addTodoItem}
              itemToEdit={this.state.itemToEdit}
              handleTextInputChange={this.handleTextInputChange}
            />
          )}

          <span onClick={this.handleClick} className="todo-toggle">
            Todo
          </span>
        </div>
      </div>
    );
  }
}

export default TodoToggle;
