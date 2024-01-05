import { useState } from 'react';
import './App.css'
import NoProjectSelected from './components/NoprojectSelected';
import ProjectSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import SelectedProject from './components/SelectedProject';



function App() {
  
  const [projectsState, setProjectsState] = useState({

    selectedProjectId: undefined,
    projects: [],
    tasks: []

  });
    
   function handleAddTask(text) {

    setProjectsState ((prevState) => {
       
      const taskId =  Math.random();
      const newTask = {
      text: text,
      projectId: prevState.selectedProjectId,
      id: taskId,
    
    };
   
    return {
             ...prevState,
              tasks: [ newTask, ...prevState.tasks]
        
            }
     });

   }


   function handleDeleteTask (id) {

    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),

      };
     });


 }


  function handleSelectProject(id){

      setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
        
      };
     });


  }

  function handleStartAddProject(){
 
     setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      };
     });

  }


  function handleCancelAddProject(){

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,

      };
     });


  }

   function handleAddProject (projectDate){

     setProjectsState ((prevState) => {
       
      const projectId =  Math.random();
      const newProject = {
      ...projectDate,
      id: projectId,
    
    };



      return {
             ...prevState,
             selectedProjectId: undefined,
             projects: [...prevState.projects, newProject]
        
            }
     });

   }


   function handleDeleteProject(){

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),

      };
     });

  }


    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = (<SelectedProject project={selectedProject} onDelete={handleDeleteProject}  onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/> 
  );
  if(projectsState.selectedProjectId === null) {
        
       content= <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {

    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
   


  return (
    <main className='projectSidebar'>
   
    <ProjectSidebar  onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId} />
    {content}
    
    </main>
  );
}

export default App;