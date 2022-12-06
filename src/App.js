import React from "react";
import TodoList from "./components/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <TodoList />
    </DarkModeProvider>
  );
}

export default App;

// 투두앱 만들기
// 1. 전체 리스트 보여주기 ✅
// 2. 아이템 체크박스 ✅
// 3. 아이템 삭제하기 ✅
// 4. 아이템 추가하기 ✅
// 5. 아이템 필터링하기 ✅
// 6. 다크모드 지원하기 ✅
// 7. 로컬 스토리지에 저장 ✅
