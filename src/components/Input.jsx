import { forwardRef } from "react";
import './CSS/Input.css';


const Input= forwardRef ( function Input ( { label, textarea, ...props}, ref) {

 
      return (
              <p className="para-1">
                 <label className="input-lable">{label}</label>


                {textarea ? ( <textarea className="text-area" ref={ref} {...props} /> ):
                
                ( <input className="inpu-t" ref={ref} {...props}/>  )}
              </p>


              );
});

export default Input;