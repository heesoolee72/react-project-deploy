import React from "react";
import TodoForm from "./TodoForm";

export default function ShowAll({
  todos,
  handleCheckBox,
  handleDeleteItem,
  darkMode,
}) {
  return todos?.map((item) => {
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
