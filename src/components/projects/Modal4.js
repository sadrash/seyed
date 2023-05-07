import React from "react";
import Video from '../../assets/1.mp4'
import './modal.css';



const Modal4= ({open, onClose}) => {
    if(!open) return null
    return (
      <div onClick={onClose} className='overley'>
        <div onClick={(e)=>
        e.stopPropagation()} className="modal-container">
          <video src={Video} controls></video>
          <div className="modalRight">
            <p onClick={onClose} className="closebtn">x</p>
            <div className="content">
              <h2>Sea Side </h2>
              <p>This project contains 8 hotel-apartmant in front and back, The design idea is taken from Exlore Yacht whit a 360 degree view of sea and nature around. Inbetween these hotels we will have 200 suite with the same architecture </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default Modal4;