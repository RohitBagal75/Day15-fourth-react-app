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
  
  let [todo, setTodo] = useState({Task:"",description:""});

  let handlerChangeTaskAction = (e) => {
    console.log(e.target);
    let newTodo = {...todo,task:e.target.value};
    setTodo(newTodo);

  };
  
  let handlerChangeDescriptionAction = (e) => {
    console.log(e.target);
    let newTodo = {...todo,description:e.target.value};
    setTodo(newTodo);

  };
  let addTodoAction = () => {
   console.log(todo);
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
          <textarea
            className="form-control"
            col="30"
            rows="3"
            placeholder="Enter Description"
            value={todo.description}
            onChange={handlerChangeDescriptionAction}
          ></textarea>
          <input type="button" value="Add Todo" onClick={addTodoAction} />
       
    </>
  );
}

export default App;