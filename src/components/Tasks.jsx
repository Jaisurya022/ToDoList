import NewTask from "./NewTask";
import './CSS/Tasks.css';


export default function Tasks({tasks, onAdd, onDelete}) {

   
    return (

        <section>
         
        <h2>Tasks</h2>
         <NewTask onAdd={onAdd} />
           
        {tasks.length === 0 && ( <p>This project dose not have any tasks yet.</p>
)}
     {tasks.length > 0 && ( <ul className="tasks-ul">

        {tasks.map ((task) => (
            <li key={task.id} className="tasks-li">
              <span>{task.text}</span>
              <button  className="all-button" onClick={ () => onDelete (task.id)}>clear</button>

            </li>
        ))}
     </ul>
     
    )
     }
        
        </section>
         


    );



}




