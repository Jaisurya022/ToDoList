
import Button from "./Button"
import'./CSS/NoProjectSelected.css'

export default function NoProjectSelected ({onStartAddProject}){

    return (
        <div className="no-project">
            <div>
            <img src="" alt="" />
            <h2>No project Selected</h2>
            <p>Select a project or get started with a new one</p>
            </div>
            <p>
                <Button  className="all-button" onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    )
}