import React from 'react'
import './cardStyle.css'
import yek from '../../assets/1.jpg'
import dow from '../../assets/2.jpg'
import se from '../../assets/3.jpg'
import char from '../../assets/4.jpg'
import panj from '../../assets/5.jpg'


function Card() {
  return (
    <div className="cards">
        <div className="container">
            <h1>The Paradise </h1>
            <p>In The Most Beautiful Part Of Iran</p>
            <div className="img-container">
            <img className='span-3 img-grid-row-2' src={yek} alt="Yek" />
            <img src={dow} alt="dow" />
            <img src={se} alt="se" />
            <img src={char} alt="char" />
            <img src={panj} alt="panj" />
            </div>

        </div>
        
    </div>
  )
}

export default Card;