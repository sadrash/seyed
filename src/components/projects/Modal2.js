import React from "react";
import Video from '../../assets/22.mp4'
import './modal.css';



const Modal2 = ({open, onClose}) => {
    if(!open) return null
    return (
      <div onClick={onClose} className='overley'>
        <div onClick={(e)=>
        e.stopPropagation()} className="modal-container">
          <video src={Video} controls></video>
          <div className="modalRight">
            <p onClick={onClose} className="closebtn">x</p>
            <div className="content">
              <h2>Vidar </h2>
              <p>36 instruction include : Gym, Mall, Hotel and 30 suites. A line of water for boats and a wonderful view of Caspiam Sea. Vidar is our second project and on of the biggest projects in the city</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default Modal2;