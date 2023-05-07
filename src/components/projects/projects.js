import React, {useState} from 'react'
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Modal4 from './Modal4'
import pic1 from '../../assets/1.jpg'
import pic2 from '../../assets/3.jpg'
import pic3 from '../../assets/4.jpg'
import pic4 from '../../assets/5.jpg'
import './project.css'
function Projects() {

  const [openModal, setOpenModal] = useState(false) 
  const [openModal2, setOpenModal2] = useState(false) 
  const [openModal3, setOpenModal3] = useState(false) 
  const [openModal4, setOpenModal4] = useState(false) 

  return (
    <div className='projects' id='Projects'>
      <h1 id='header'>Projects</h1>
      <div className="Modal-1">
        <img src={pic2} alt="" />
        <div className="text">
        <h3>aghushe darya</h3>
        <p>The first Project of our company was Aqushe Darya. We start our jurney with this town and we used a loxury design for both architecture and furniture...</p>
         <button onClick={() => setOpenModal(true)}> see more </button>
         
         </div>
         <Modal1 open={openModal} onClose={()=> setOpenModal(false)}/>
      </div>
      <div className="Modal-1">
        <img src={pic3} alt="" />
        <div className="text">
        <h3>vidar</h3>
        <p>36 instruction include : Gym, Mall, Hotel and 30 suites. A line of water for boats and a wonderful view of Caspiam Sea. Vidar is our second project ...</p>
         <button onClick={() => setOpenModal2(true)} className='btn'>see more</button>
          <Modal2 open={openModal2} onClose={()=> setOpenModal2(false)}/>
          </div>
      </div>
     
      <div className="Modal-1">
        <img src={pic1} alt="1" />
        <div className="text">
        <h3>Maze Islands</h3>
        <p>Islands, canals all over the town, boats, unique architecture, tourism potential and a lot of wonderful options, all the things you need for a dream life... </p>
          <button onClick={() => setOpenModal3(true)} className='btn'>see more</button>
          <Modal3 open={openModal3} onClose={()=> setOpenModal3(false)}/>
          </div>
          </div>
      <div className="Modal-1">
        <img src={pic4} alt="" />
        <div className="text">
        <h3>Sea side</h3>
        <p>This project contains 8 hotel-apartmant in front and back, The design idea is taken from Exlore Yacht whit a 360 degree view of sea and nature around... </p>
        <button onClick={() => setOpenModal4(true)} className='btn'>see more</button>
          <Modal4 open={openModal4} onClose={()=> setOpenModal4(false)}/>
          </div>
      </div>
      
    
    </div>
    
  )
}

export default Projects;