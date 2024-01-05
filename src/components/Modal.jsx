import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import './CSS/Modal.css';




const Modal = forwardRef ( function Modal({children, buttonCaption}, ref) {
 
    const dialog =useRef();

    useImperativeHandle( ref, () => {
  
        return {
       
             open() {
                dialog.current.showModal();
            }

        };
    });

  return createPortal(
  
      <dialog ref={dialog} className="modal-dialog">
       
        {children}
         <form method="dialog" className="modal-form">
            <button className="all-button">{buttonCaption}</button>
         </form>
  </dialog>,(document.getElementById('modal'))

  
  );}
);


export default Modal;