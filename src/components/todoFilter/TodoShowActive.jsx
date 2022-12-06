import React from "react";
import TodoForm from "./TodoForm";

export default function ShowActive({
  todos,
  handleCheckBox,
  handleDeleteItem,
  darkMode,
}) {
  const activeTodos = todos?.filter((todo) => todo.done === false);
  return activeTodos?.map((item) => {
    return (
      <TodoForm
        key={item.id}
        item={item}
        handleCheckBox={handleCheckBox}
        handleDeleteItem={handleDeleteItem}
        darkMode={darkMode}
      />
    );
  });
}
