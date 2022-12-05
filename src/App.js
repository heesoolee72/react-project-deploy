import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";

const initialTodoList = [
  { id: 1, todo: "한강 러닝 30분", done: true },
  { id: 2, todo: "리트리버 동네 산책 시키기", done: true },
  { id: 3, todo: "반신욕 하기", done: true },
  { id: 4, todo: "드림코딩 강의 듣기", done: true },
  { id: 5, todo: "저녁 설거지 하기", done: false },
  { id: 6, todo: "자기 전 요가하기", done: false },
];

function App() {
  const [newTodoInput, setNewTodoInput] = useState("");
  const [todoList, setTodoList] = useState(
    (localStorage.getItem("todoList") !== "[]" &&
      JSON.parse(localStorage.getItem("todoList"))) ||
      initialTodoList
  );

  const scrollRef = useRef();
  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [newTodoInput, todoList]);

  const handleCheckBox = (id) => {
    setTodoList(
      todoList.map((item) => {
        return id === item.id ? { ...item, done: !item.done } : item;
      })
    );
  };

  const handleAddTodoInput = (e) => {
    setNewTodoInput(e.target.value);
  };

  const handleAddBtnClick = () => {
    if (newTodoInput.length > 0) {
      setTodoList((list) => {
        return [
          ...list,
          { id: todoList.length + 1, todo: newTodoInput, done: false },
        ];
      });
      setNewTodoInput("");
      scrollToBottom();
    }
  };

  const handleOnEnterPress = (e) => {
    if (e.key === "Enter") {
      handleAddBtnClick();
    }
  };

  const handleDeleteItem = (itemToDelete) => {
    setTodoList((list) => {
      return list.filter((item) => itemToDelete !== item.id);
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box_container}>
        <header className={styles.header}>
          <span className={styles.lightmode}>Dark mode</span>
          <div className={styles.filter_option}>
            <div>
              All <hr />
            </div>
            <div>
              Active <hr />
            </div>
            <div>
              Completed <hr />
            </div>
          </div>
        </header>
        <div className={styles.list_container}>
          <li className={styles.list}>
            {todoList?.map((item) => {
              return (
                <ul
                  key={item.id}
                  className={
                    item.done ? styles.list_item_done : styles.list_item
                  }
                >
                  <div
                    className={
                      item.done ? styles.list_content_done : styles.list_content
                    }
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
                        item.done
                          ? { color: "rgba(245, 245, 245, 0.377)" }
                          : { color: "white" }
                      }
                    ></i>
                  </div>
                </ul>
              );
            })}
          </li>
          <div ref={scrollRef} style={{ marginTop: "54px" }}></div>
        </div>
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
      </div>
    </div>
  );
}

export default App;

// 투두앱 만들기
// 1. 전체 리스트 보여주기 ✅
// 2. 아이템 체크박스 ✅
// 3. 아이템 삭제하기 ✅
// 4. 아이템 추가하기 ✅
// 5. 아이템 필터링하기 ✅
// 6. 다크모드 지원하기
// 7. 로컬 스토리지에 저장 ✅
