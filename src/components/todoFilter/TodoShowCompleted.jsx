import React from "react";
import TodoForm from "./TodoForm";

export default function ShowCompleted({
  todos,
  handleCheckBox,
  handleDeleteItem,
}) {
  const completedTodos = todos?.filter((todo) => todo.done === true);
  return completedTodos?.map((item) => {
    return (
      <TodoForm
        key={item.id}
        item={item}
        handleCheckBox={handleCheckBox}
        handleDeleteItem={handleDeleteItem}
      />
    );
  });
}
