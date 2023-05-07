import React from 'react'
import Video1 from '../../assets/11.mp4'
import './modal.css'

const Modal1 = ({open, onClose}) => {
  if(!open) return null
  return (
    <div onClick={onClose} className='overley'>
      <div onClick={(e)=>
      e.stopPropagation()} className="modal-container">
        <video src={Video1} controls></video>
        <div className="modalRight">
          <p onClick={onClose} className="closebtn">x</p>
          <div className="content">
            <h2>Aqushe darya</h2>
            <p>The first Project of our company was Aqushe Darya. We start our jurney with this town and we used a loxury design for both architecture and furniture. The success of this project was the reason we made all the other projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal1;


