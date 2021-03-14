import React, { useContext, useEffect } from "react";
import TasksContext from "../../contexts/TasksContext";
import Task from "../Task";
import styles from './ToDoList.module.scss'

const ToDoList = () => {
  const [tasks, setTasks] = useContext(TasksContext);

  const listMaker = () => {
    const tasksArr = [...tasks.map.values()];
    return tasksArr.map((taskObj)=><Task key={taskObj.taskId} taskObj={taskObj}/>)
  }

  return (
    <div>
      {listMaker()}
    </div>
  );
  
}

export default ToDoList;
