import {useState} from 'react';
import "./Input.css"

function Input({handleAddTask}){
  let [input, setInput] = useState({task: "", minutes: ""});
  
  let handleSubmit = (e) => {
    e.preventDefault();
    setInput({task: "", minutes: ""});
    let task = {
      id: Date.now(),
      task: input.task,
      minutes: input.minutes,
      isDone: false,
      isInProcess: false
    }
    handleAddTask(task);
  }
  
  let handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInput({...input, [name]: value})
  }
  
  return (
    <div className="Input container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
             <input type="text" className="form-control" placeholder="Add your task" value={input.task} name="task" onChange={handleInput} required></input>
            </div> 
        
        <div className="col-4">
            <input type="number" className="form-control" placeholder="Minutes" value={input.minutes} name="minutes" onChange={handleInput} required></input>
        </div>    
           <button type="submit" className="btn btn-primary col-2">Add</button>
           </div>
      </form>
    </div>
    )
}

export default Input;