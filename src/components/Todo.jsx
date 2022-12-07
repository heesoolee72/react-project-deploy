import React from "react";
import { useRef } from "react";
import AddTodo from "./AddTodo";
import TodoShowAll from "./todoFilter/TodoShowAll";
import TodoShowActive from "./todoFilter/TodoShowActive";
import TodoShowCompleted from "./todoFilter/TodoShowCompleted";
import styles from "./Todo.module.css";

export default function Todo({
  todoFilter,
  todos,
  setTodos,
  newTodoInput,
  setNewTodoInput,
}) {
  const handleCheckBox = (id) => {
    setTodos(
      todos.map((item) => {
        return id === item.id ? { ...item, done: !item.done } : item;
      })
    );
  };

  const handleDeleteItem = (itemToDelete) => {
    setTodos((list) => {
      return list.filter((item) => itemToDelete !== item.id);
    });
  };

  const scrollRef = useRef();
  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAddBtnClick = () => {
    if (newTodoInput.length > 0) {
      setTodos((list) => {
        return [...list, { id: new Date(), todo: newTodoInput, done: false }];
      });
      setNewTodoInput("");
      scrollToBottom();
    }
  };

  return (
    <>
      <div className={styles.list_container}>
        <li className={styles.list}>
          {todoFilter === "showAll" && (
            <TodoShowAll
              todos={todos}
              handleCheckBox={handleCheckBox}
              handleDeleteItem={handleDeleteItem}
            />
          )}
          {todoFilter === "showActive" && (
            <TodoShowActive
              todos={todos}
              handleCheckBox={handleCheckBox}
              handleDeleteItem={handleDeleteItem}
            />
          )}
          {todoFilter === "showCompleted" && (
            <TodoShowCompleted
              todos={todos}
              handleCheckBox={handleCheckBox}
              handleDeleteItem={handleDeleteItem}
            />
          )}
        </li>
        <div ref={scrollRef} style={{ marginTop: "54px" }}></div>
      </div>
      <AddTodo
        newTodoInput={newTodoInput}
        setNewTodoInput={setNewTodoInput}
        handleAddBtnClick={handleAddBtnClick}
      />
    </>
  );
}
