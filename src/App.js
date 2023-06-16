import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
    </>
  );
}

function MyTodo() {
  let inputRef = useRef();
  let [todo, setTodo] = useState({Task:""});

  let handlerChangeTaskAction = (e) => {
    console.log(e.target);
    let newTodo = {...todo,task:e.target.value};
    setTodo(newTodo);

  };
  let addTodoAction = () => {
    alert(todo.task);
  };

  return (
    <>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Task"
            value={todo.task}
            onChange={handlerChangeTaskAction}
          />
          <input type="button" value="Add Todo" onClick={addTodoAction} />
       
    </>
  );
}

export default App;