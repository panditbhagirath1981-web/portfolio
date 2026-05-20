import React from 'react'
import { Link } from 'react-router-dom';
import anjani from '../assets/anjani.jpeg';

const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="nav-left">
            <img src={anjani}  className="head"/>
            <span className="logo">Anjani</span>
          </div>
            <ul className="body">
                <li className="active"><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/skill">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
    <div className="nav-right">
    <span><i class="ri-github-fill"></i></span>
    <span><i class="ri-linkedin-box-line"></i></span>
   <span><i class="ri-dribbble-line"></i></span>        
  </div>

        </nav>
    );
};





export default Navbar;