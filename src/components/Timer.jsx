import "./Timer.css"
import { useState, useEffect } from "react"

export default function Timer({ task, markAsComplete}) {

  let totalSeconds = Number(task.minutes) * 60;

  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    if (!task.isInProcess) return; 
    if (timeLeft <= 0) {
      if(task && timeLeft == 0) markAsComplete(task.id)
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
       
    return () => clearInterval(intervalId);
  }, [task.isInProcess, timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="Timer" style={{ display: task.isInProcess ? "block" : "none" }}>
      <h3>Focus Timer</h3>
      <h1 className="clock">
        {hours}:{minutes < 10 ? "0" : ""}{minutes}:{seconds < 10 ? "0" : ""}{seconds}
      </h1>
      <p>{task.isInProcess?"Focusing...": "Not Focusing"}</p>
    </div>
  );
}