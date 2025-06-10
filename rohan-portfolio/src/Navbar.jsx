import { useState } from 'react'
import './Navbar.css'

function Navbar() {
/**
 * Description:
 * Component for the navbar.
 */

  return (
  <div id="navbar">
    <div id="navbar-items">
        <span className="text">Home</span>
        <span>
            <span className="text">Projects</span>
            <span className="text">Experience</span>
        </span>
    </div>
    
  </div>
  )
}

export default Navbar