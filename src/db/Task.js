class Task {
  constructor (taskId, taskText){
    this.taskId = taskId
    this.taskText = taskText
    this.isDone = false
    this.createdAt = new Date()
  }
}

export default Task