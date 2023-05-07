import React from "react";
import "./HeroStyles.css";
import {Link} from 'react-scroll'
import Video from "../../assets/video.mp4";

function Hero() {
  return (
    <div className="hero" id="home">
      <video autoPlay muted loop id="video">
        <source src={Video} type="video/mp4"></source>
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>
          Live Your <span>DREAM</span> Life
        </h1>
        <h3>A Magical Water Town </h3>
        <p>
          We are glad to proudly present the greatest project in Iran. 
        </p>
        <div className="btn">
          <Link to="projects" spy={true} smooth={true} offset={-50} duration={900}><button className="icon">Explore</button></Link>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
