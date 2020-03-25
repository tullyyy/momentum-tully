import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
// import uuid from "uuid";

class TodoContainer extends React.Component {
  render() {
    const {
      todos,
      handleChange,
      deleteTodo,
      addTodoItem,
      setItemToEdit,
      itemToEdit,
      handleTextInputChange
    } = this.props;
    return (
      <div className="todo-container">
        <Header />

        <TodosList
          todos={todos}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
          setItemToEdit={setItemToEdit}
          itemToEdit={itemToEdit}
          handleTextInputChange={handleTextInputChange}
        />
        <InputTodo addTodoItem={addTodoItem} />
      </div>
    );
  }
}
export default TodoContainer;
