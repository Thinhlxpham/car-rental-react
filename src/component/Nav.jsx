import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavLogo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav>
     
      <div className="nav_container">
        <a href="" className="nav_image_wrapper">
          <img src={NavLogo} alt="" className="nav_image" />
        </a>
        <div className="nav_links">
          <a href="#" className="nav_link">
            Home
          </a>
          <a href="#" className="nav_link">
            Vehicle Model
          </a>
          <a href="#" className="nav_link disable">
            Testimonial
          </a>
          <a href="#" className="nav_link disable">
            Our Team
          </a>
          <a href="#" className="nav_link disable">
            Contact
          </a>
        </div>
        <div className="nav_btns">
          <a href="" className="nav_link disable">
            Sign In
          </a>
          <button className="nav_btns_register disable">
            Register
          </button>
        </div>
        <button className="nav_menu">
          <FontAwesomeIcon icon={faBars}/>
        </button>
      </div>
  
    </nav>
  
  );
};
export default Nav;