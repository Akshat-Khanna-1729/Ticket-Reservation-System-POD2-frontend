import React from 'react'
import logo from '../../Assets/logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {



  return (
    <div className = "navbar-wrapper">
      <div className= "navbar">
        <ul>
          <li>
            <div className="Logo">
              <img src= {logo} alt="Logo" />
            </div>
            
          </li>
          <div className="listitems">

            <Link className="listtext" to="/home">
              <li>Home</li>
            </Link>

            <Link className="listtext" to="/profile">
              <li>Profile</li>
            </Link>

            <Link className="listtext" to="/mybookings">
              <li>My Bookings</li>
            </Link>

            <Link className="listtext" to="/contactus">
              <li>Contact Us</li>
            </Link>            
            
            <li>Log Out</li>
          </div>
        </ul>
      </div>
    </div>
  )
}


export default Navbar