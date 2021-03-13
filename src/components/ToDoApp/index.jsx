import React, { useState } from "react";
import styles from "./ToDoApp.module.scss";
import DB from "../../db/DB";
import ToDoInput from "../ToDoInput";
import ToDoList from "../ToDoList";
import TasksContext from "../../contexts/TasksContext";

const ToDoApp = () => {
  const [tasks, setTasks] = useState(new DB());

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      <div className={styles.appWrapper}>
        <div className={styles.appInnerWrapper}>
          <ToDoInput/> 
          <ToDoList/>
        </div>
      </div>
    </TasksContext.Provider>
  );
};

export default ToDoApp;
