import "./App.css";
import { Provider } from "react-redux";
import { store } from "./features/store";

import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import TotalCompleteItems from "./components/Todos/TotalCompleteTodo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodoForm/>
        <TodoList/>
        <TotalCompleteItems/>
      </div>
    </Provider>
  );
}

export default App;
