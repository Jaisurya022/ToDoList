import Button from "./Button";
import './CSS/ProjectsSidebar.css'

export default function ProjectSidebar({onStartAddProject, projects, onSelectProject}) {

    return( <aside className="side-bar">
           
            <h2>Your Projects</h2>

            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>

            <div>
            <ul>{projects.map( (project) => ( <li key={project.id}> 
            
                <button  className="all-button" onClick={() => onSelectProject(project.id)}>{project.title}</button>
            
            </li>
            
            
            ))}

                 

            </ul>
            
            </div>
           
    </aside>
 
 );
    

}