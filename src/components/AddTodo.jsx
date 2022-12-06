import React from "react";
import styles from "./AddTodo.module.css";

export default function AddTodo({
  newTodoInput,
  setNewTodoInput,
  handleAddBtnClick,
}) {
  const handleAddTodoInput = (e) => {
    setNewTodoInput(e.target.value);
  };

  const handleOnEnterPress = (e) => {
    if (e.key === "Enter") {
      handleAddBtnClick();
    }
  };

  return (
    <div className={styles.add_todo_container}>
      <div className={styles.add_todo_content}>
        <input
          type="text"
          placeholder="Add Todo"
          className={styles.add_input}
          value={newTodoInput}
          onChange={handleAddTodoInput}
          onKeyPress={handleOnEnterPress}
        ></input>
        <button onClick={handleAddBtnClick} className={styles.add_button}>
          Add
        </button>
      </div>
    </div>
  );
}
