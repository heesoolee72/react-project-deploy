import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [newTodoInput, setNewTodoInput] = useState("");
  const [todos, setTodos] = useState(
    (localStorage.getItem("todoList") !== "[]" &&
      JSON.parse(localStorage.getItem("todoList"))) ||
      initialTodoList
  );
  const [todoFilter, setTodoFilter] = useState("showAll");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [newTodoInput, todos]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box_container}>
        <header className={styles.header}>
          <span
            className={styles.darkmode}
            onClick={() => {
              toggleDarkMode();
            }}
          >
            {darkMode ? "Light Mode" : "Dark mode"}
          </span>
          <div className={styles.filter_option}>
            <p
              onClick={() => {
                setTodoFilter("showAll");
              }}
              className={
                todoFilter === "showAll"
                  ? styles.filter_text
                  : styles.filter_text_inactive
              }
            >
              All
              <hr
                className={
                  todoFilter === "showAll"
                    ? styles.filter_hr
                    : styles.filter_hr_inactive
                }
              />
            </p>
            <p
              onClick={() => {
                setTodoFilter("showActive");
              }}
              className={
                todoFilter === "showActive"
                  ? styles.filter_text
                  : styles.filter_text_inactive
              }
            >
              Active
              <hr
                className={
                  todoFilter === "showActive"
                    ? styles.filter_hr
                    : styles.filter_hr_inactive
                }
              />
            </p>
            <p
              onClick={() => {
                setTodoFilter("showCompleted");
              }}
              className={
                todoFilter === "showCompleted"
                  ? styles.filter_text
                  : styles.filter_text_inactive
              }
            >
              Completed
              <hr
                className={
                  todoFilter === "showCompleted"
                    ? styles.filter_hr
                    : styles.filter_hr_inactive
                }
              />
            </p>
          </div>
        </header>
        <Todo
          todoFilter={todoFilter}
          setTodoFilter={setTodoFilter}
          todos={todos}
          setTodos={setTodos}
          newTodoInput={newTodoInput}
          setNewTodoInput={setNewTodoInput}
        />
      </div>
    </div>
  );
}

const initialTodoList = [
  { id: 1, todo: "공복에 물 한 잔 마시기", done: true },
  { id: 2, todo: "신웅이 회사 근처에서 돈까스 먹기", done: true },
  { id: 3, todo: "삼성역에서 <별의 커비> 당근 거래하기", done: true },
  { id: 4, todo: "르뱅룰즈에서 소금빵 사기", done: false },
  { id: 5, todo: "댕댕이랑 한강 산책하기", done: false },
  { id: 6, todo: "러쉬 입욕제로 뜨끈하게 반신욕하기", done: false },
  { id: 7, todo: "엘리쌤 유튜브 영상 정주행하기", done: false },
];
