
import React from 'react'
import './navbar.css'

 
export default function Navbar() {

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Company</h2>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Jobs</a>
          </li>
          <li className="link">
            <a href="#">About</a> </li>
          <li className="link">
            <a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
};