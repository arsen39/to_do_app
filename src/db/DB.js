import Task from './Task'

class DB {
  constructor() {
    this.map = new Map();
  }

  newTask (taskText) {
    this.map.set(this.map.size, new Task(this.map.size, taskText));
  }

  deleteTask (taskId) {
    this.map.delete(taskId);
  }

  changeTaskDone (taskId) {
    const oldTask = this.map.get(taskId);
    oldTask.isDone = !oldTask.isDone;
    this.map.set(taskId, oldTask);
  }
}

export default DB