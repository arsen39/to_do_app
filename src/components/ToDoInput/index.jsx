import React, {useState, useContext} from 'react';
import styles from './ToDoInput.module.scss';
import TasksContext from "../../contexts/TasksContext";

// import DB from "../../db/DB";
// const db = new DB();

const ToDoInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useContext(TasksContext)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(tasks);
  }

  const handleIBtnClick = () => {
    setTasks(tasks.newTask(inputValue));
    console.log(tasks);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange}/>
      <button onClick={handleIBtnClick}>+</button>
    </div>
  );
}

export default ToDoInput;
