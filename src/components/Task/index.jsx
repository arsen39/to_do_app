import React, {useContext} from 'react';
import TasksContext from "../../contexts/TasksContext";
import styles from './Task.module.scss';
import cx from 'classnames';
import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js';
import _ from "lodash";

const Task = (props) => {
  const {taskObj: {taskId, taskText, isDone}} = props;
  const [tasks, setTasks] = useContext(TasksContext);
  
  const textStyle = cx (styles.taskText, {[styles.doneTaskText]: isDone});

  const isDoneChangeHandlr = () => {
    const newTasks = _.cloneDeep(tasks);
    newTasks.changeTaskDone(taskId);
    setTasks(newTasks);
  }

  const deleteTaskHandlr = () => {
    const newTasks = _.cloneDeep(tasks);
    newTasks.deleteTask(taskId);
    setTasks(newTasks);
  }

  return (
    <div className={styles.taskWrapper}>
      <p className={styles.rbtn} onClick={isDoneChangeHandlr}>{isDone ? '●' : '○'}</p>
      <p className={textStyle}>{taskText}</p>
      <Icon path={mdiDelete}
      onClick={deleteTaskHandlr}
        title="Delete task"
        size={1}
        color="red"
        className={styles.trashIcon}/>
    </div>
  );
}

export default Task;
