import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import styles from "../Todo.module.css";

export default function TodoForm({ item, handleCheckBox, handleDeleteItem }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ul
      key={item.id}
      className={item.done ? styles.list_item_done : styles.list_item}
    >
      <div
        className={item.done ? styles.list_content_done : styles.list_content}
        onClick={() => {
          handleCheckBox(item.id);
        }}
      >
        <input
          key={item.id}
          onChange={() => handleCheckBox(item.id)}
          className={styles.checkbox}
          type="checkbox"
          checked={item.done === true ? true : false}
        />
        <p>{item.todo}</p>
      </div>
      <div
        className={styles.trashcan_icon_wrapper}
        onClick={() => {
          handleDeleteItem(item.id);
        }}
      >
        <i
          className="fa-regular fa-trash-can fa-sm"
          style={
            darkMode
              ? item.done
                ? { color: "grey" }
                : { color: "white" }
              : item.done
              ? { color: "#b3b3b3" }
              : { color: "black" }
          }
        ></i>
      </div>
    </ul>
  );
}
