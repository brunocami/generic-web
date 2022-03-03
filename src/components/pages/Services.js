import React from 'react'
import '../../App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Services() {

    const toastId = React.useRef(null);
  
    const notify = () => {
      if(! toast.isActive(toastId.current)) {
        toastId.current = toast("I cannot be duplicated!");
      }
    }
    
    return (
    <>
        <h1 className='services'>SERVICES</h1>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </>
    )
    
}