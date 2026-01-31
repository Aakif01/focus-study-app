import "./Stats.css"

export default function Stats({completedTasks}){
   let completedCount = completedTasks.length;
   let minutesFocused = 0;
   completedTasks.forEach(t => {
     minutesFocused += Number(t.minutes);
   })
  return (
    <div className="Stats">
      <span><b>Stats:</b> {completedCount} task done | {minutesFocused} minutes focused</span>
    </div>
    )
}