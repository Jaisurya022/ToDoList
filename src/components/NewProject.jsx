import { useRef } from "react"
import Input from "./input"

import Modal from "./Modal";
import './CSS/NewProject.css'

export default function NewProject({onAdd, onCancel}) {
   
const modal =useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave (){
       
   const enteredTitle = title.current.value;
   const enteredDescription = description.current.value;
   const enteredDueDate = dueDate.current.value


  if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '')
  
  {

    modal.current.open();
    return;

  }

      onAdd({

      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate

   });
         

  }

   return (
<>

      <Modal ref={modal} buttonCaption="okay">

      <h2 className="modal-head">Invalid Input</h2>
     <p className="modal-para">Oops ... looks like you forget to enter a value</p>
        <p className="modal-para" >please make sure</p>         
     </Modal>

  
 
 
   
    
   <div className="new-project">


           <menu className="new-project-manu">
                <li><button  className="all-button" onClick={onCancel}>Cancel</button></li>
                <li><button  className="all-button" onClick={handleSave}>Save</button></li>

           
                </menu>
        <div>
           <Input type="text" ref={title} label="Title" />
           <Input ref={description} label="description" textarea />
           <Input type="date" ref={dueDate} label="Due Date" />
        </div>

        
   </div>

   </>
);
};



