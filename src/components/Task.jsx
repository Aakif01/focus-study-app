import "./Task.css"

export default function Task({task, handleStartTask, taskInProcess, deleteTask}){
  let handleOnProcess = () => {
    if(!task.isInProcess){
    handleStartTask(task);
    } else{
      let stop = confirm("This will lead to delete the task permanently")
      if(stop) {
        deleteTask(task.id);
      }
    }
  }
  return(
    <div className="Task">
      <div>
      <span>{task.isInProcess?<i className="fa-solid fa-caret-down"></i>:<i className="fa-solid fa-caret-right"></i>}</span>
      <span>{task.task}</span>
      <span className="minutes"> {task.minutes} minutes</span>
      </div>
      <div>
      <span><button className={task.isInProcess?"stop": ""}onClick={handleOnProcess} disabled={taskInProcess && !task.isInProcess}>{!task.isInProcess?"start": "stop"}</button></span>
      </div>
    </div>
    )
}