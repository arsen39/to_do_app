import Task from './Task'

class DB {
  constructor() {
    this.map = new Map();
    this.idCounter = 0;
  }

  newTask (taskText) {
    this.map.set(this.idCounter, new Task(this.idCounter, taskText));
    this.idCounter++;
  }

  deleteTask (taskId) {
    this.map.delete(taskId);
  }

  changeTaskDone (taskId) {
    const oldTask = this.map.get(taskId);
    oldTask.isDone = !oldTask.isDone;
    this.map.set(taskId, oldTask);
  }

  isEmpty () {
    return this.map.size === 0;
  }
}

export default DB