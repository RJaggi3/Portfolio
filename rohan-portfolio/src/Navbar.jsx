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
        <span id="text">Home</span>
        <span>
            <span id="text">Projects</span>
            <span id="text">Experience</span>
        </span>
    </div>
    
  </div>
  )
}

export default Navbar