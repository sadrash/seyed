import React from "react";
import Video from '../../assets/33.mp4'
import './modal.css';



const Modal3 = ({open, onClose}) => {
    if(!open) return null
    return (
      <div onClick={onClose} className='overley'>
        <div onClick={(e)=>
        e.stopPropagation()} className="modal-container">
          <video src={Video} controls></video>
          <div className="modalRight">
            <p onClick={onClose} className="closebtn">x</p>
            <div className="content">
              <h2>Maze Islands </h2>
              <p>Islands, canals all over the town, boats, unique architecture, tourism potential and a lot of wonderful options, all the things you need for a dream life, in Maze Islands. The most beautiful project that you would see</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default Modal3;