import Tasks from "./Tasks.jsx";
import './CSS/SelectedProject.css';





export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}){


    const formattedDate = new Date (project.dueDate).toLocaleDateString('en-US', {

         year:'numeric',
         month: 'short',
         day:'numeric'


    });

return(
 
    <div className="selected-project">
        
        <header className="select-head">

            <div className="select-div">
            <h1 className="select-h">{project.title}</h1>
            <button  className="all-button" onClick={onDelete}>Delete</button>
            </div>
            <p className="select-p">{formattedDate}</p>
            <p className="select-p">{project.description}</p>
        </header>
        <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
     

);



}