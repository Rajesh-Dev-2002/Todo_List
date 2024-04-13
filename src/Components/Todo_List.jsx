import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './Todo_List.css'
const Todo_List = () => {
  const [todo, setTodo] = useState([{ task: "Sample Task", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState();
  let addNewTask = () => {
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let onchangeHandler = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value);
  };
  let deleteTodo =(id)=>{
   let copy = todo.filter((todo)=>todo.id != id);
   setTodo(copy)

  }
  return (
    <div>
      <input 
        type="text"
        placeholder="Enter your Task"
        value={newTodo}
        onChange={onchangeHandler}
        className="input-box"
      />{" "}
      &nbsp;&nbsp;
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {todo.task}&nbsp;&nbsp; &nbsp;
            <span>
              <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo_List;
