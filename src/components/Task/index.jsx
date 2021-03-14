import React from 'react';
import styles from './Task.module.scss'

const Task = (props) => {
  const {taskObj: {taskId, taskText, isDone}} = props;
  return (
    <div>
      <p>{taskText}</p>
    </div>
  );
}

export default Task;
