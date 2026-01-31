
import {useState} from 'react';
import Task from "./Task.jsx"
import Timer from './Timer';
import "./Tasks.css"
import CompleteTask from "./CompleteTask.jsx"
import Stats from "./Stats.jsx"

export default function Tasks({tasks, handleStartTask, deleteTask, markAsComplete}){
  let taskInProcess = tasks.some( t => t.isInProcess==true)
  let dueTasks = tasks.filter(t => !t.isDone)
  let completedTasks = tasks.filter(t => t.isDone);
  return (
    <div className="Tasks">
      <div className="today-task">
      <h3>Today's Focus:</h3>
      {dueTasks.length>0? dueTasks.map( (t, i) => <><Task task={t} key={t.id} taskInProcess={taskInProcess} handleStartTask={handleStartTask} deleteTask={deleteTask}/><Timer task={t} markAsComplete={markAsComplete}/></>): <p className="empty-msg" >No Tasks for today</p>}
     </div>
     <div>
       <h3>Completed Tasks:</h3>
       {
         completedTasks.length>0?completedTasks.map((t, i) => <CompleteTask task={t}/>): <p>(no tasks completed)</p>
       }
     </div>
     <Stats completedTasks={completedTasks}/>
 

    </div>
    )
}