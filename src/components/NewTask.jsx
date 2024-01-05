import { useState } from "react";
import './CSS/NewTask.css';



export default function NewTask({onAdd}) {


    const [enteredTask, setEnteredTask] = useState ('');

    function handleChange(event) {
 
        setEnteredTask(event.target.value);

    }

    function handleClick() {
        if (enteredTask.trim() === ''){
          
            return;
           

        }
        onAdd(enteredTask);
        setEnteredTask ('');

    }
  

return (

 <div className="task">
    <input  className="task-input" type="text"  onChange={handleChange} value={enteredTask}/>
    <button  className="all-button" onClick={handleClick}>Add Task</button>
 </div>
 
);

}