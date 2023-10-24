import React, { useState } from "react";
// import "../ComponentsCSS/TodoList.css";
import "../Components/TodoList.css";

export default function TodoList() {
  const [Task, setTask] = useState([]);
  const [NewTask, setNewTask] = useState("");

  const addTask = () => {
    setTask([...Task, NewTask]); // Here Expand Stratgy of Spread Oprator is Used which means first create shallow copy of Task array and then add Element of NewTask 
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = [...Task];
    updatedTasks.splice(index, 1);
    setTask(updatedTasks);
  };

  // C:\Users\kulde\Desktop\React-Ful-Project\To-Do List\to-do_list
  return (
    <>
      <div className="container">
        <div className="upperSection">
          <span className="inputFeild">
            <input
              type="text"
              placeholder="Enter Your Task"
              value={NewTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </span>
          <span className="addBtn">
            <button onClick={addTask}>Add</button>
          </span>
        </div>

        <div className="lowerSection">
          {Task.length === 0 ? (
            <p>Currently List is empty</p>
          ) : (
            <ul>
              {Task.map((task, index) => (
                <li key={index} className="ListItems">
                  <span>{task}</span>
                  <span className="deleteBtn">
                    <button onClick={deleteTask}>Delete</button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
