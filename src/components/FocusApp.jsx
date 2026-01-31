import {useState} from 'react'
import Input from "./Input.jsx"
import Tasks from "./Tasks.jsx"
 
 function FocusApp(){
  let [tasks, useTasks] = useState([]);
  
 let handleStartTask = (taskToToggle) => {
  useTasks(prevTasks =>
    prevTasks.map(t =>
      t.id === taskToToggle.id
        ? {...t, isInProcess: !t.isInProcess}
        : {...t, isInProcess: false}
    )
  );
}
  let handleAddTask = (task) => {
    useTasks( (prevTasks) => [...prevTasks, task])
  }
  
  let deleteTask = (taskId) => {
    let Tasks = tasks.filter(t => t.id != taskId);
    useTasks(Tasks)
  }
  
  let markAsComplete = (taskId) => {
    let Tasks = tasks.map( t => {
      if(t.id === taskId){
       return ({...t, isDone: true, isInProcess: false})
      }
      return t;
    })
    useTasks(Tasks)
  }
  return(
    <>
   <h1 style={{textAlign: "center"}}>Track Your Work</h1>
   <Input handleAddTask={handleAddTask} />
   <Tasks tasks={tasks} handleStartTask={handleStartTask} deleteTask={deleteTask} markAsComplete={markAsComplete}/>
  

    </>
    )
}

export default FocusApp;