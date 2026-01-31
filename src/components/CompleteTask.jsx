import "./Tasks.jsx"

export default function CompleteTask({task}){
  return(
    <div className="Task">
      <div>
      <span style={{color: "green"}}><i class="fa-solid fa-circle-check"></i></span>
      <span>{task.task}</span>
      <span className="minutes"> {task.minutes} minutes</span>
      </div>

    </div>
    )
}