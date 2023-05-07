import React,{useState} from "react";
import {Link} from 'react-scroll'
import {BiMenuAltLeft} from 'react-icons/bi';
import './NavbarStyles.css';
import {FaInstagram,FaTelegram,FaWhatsapp} from 'react-icons/fa';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div className= {nav ? " navbar navbar-bg" : " navbar" } >
      <div className="logo">
        <h2>
          <Link to="home"spy={true} smooth={true} offset={0} duration={900}>seyedpour <span>enterprise</span></Link>
        </h2>
      </div>
      <ul className="nav-menu">
        <li><Link to="home" spy={true} smooth={true} offset={0} duration={900}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-50} duration={900}>about</Link></li>
        <li><Link to="Projects" spy={true} smooth={true} offset={-50} duration={900}>projects</Link></li>
       
        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={900}>contact</Link></li>
       
      </ul>
      <Link to="contact" id="cta" spy={true} smooth={true} offset={0} duration={900} >Start Your Dream TODAY!</Link>
      <div className="hamburgur" onClick={handleNav}>
        <BiMenuAltLeft className="icon"/>
      </div>
      <div className = {nav ? "mobile-menu active" : "mobile-menu"} >
        <ul className="mobile-nav">
          <li><Link to="home" spy={true} smooth={true} offset={0} duration={900}>Home</Link></li>
          <li><Link to="about" spy={true} smooth={true} offset={-50} duration={900}>about</Link></li>
        <li><Link to="Projects" spy={true} smooth={true} offset={-50} duration={900}>projects</Link></li>

        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={900}>contact</Link></li>
        </ul>
        <div className="social-icons">
           <a href="https://www.instagram.com/seyedpour.holding/"><FaInstagram className="icon"/></a>
           <a href=""><FaTelegram className="icon"/></a>
           <a href="https://wa.me/09113679057"><FaWhatsapp className="icon"/></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
