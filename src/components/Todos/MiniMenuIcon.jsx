import React, { Component } from "react";
import TodoMiniMenu from "./TodoMiniMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

class MiniMenuIcon extends Component {
  render() {
    // console.log("logging", this.props);
    const {
      handleClick,
      showMiniMenu,
      id,
      deleteTodo,
      setItemToEdit
    } = this.props;
    return (
      <div onClick={handleClick}>
        <FontAwesomeIcon icon={faEllipsisH} className="icon" />
        {showMiniMenu && (
          <TodoMiniMenu
            id={id}
            deleteTodo={deleteTodo}
            setItemToEdit={setItemToEdit}
          />
        )}
      </div>
    );
  }
}

export default MiniMenuIcon;
