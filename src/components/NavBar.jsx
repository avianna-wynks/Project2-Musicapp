import React from 'react'
import { Link } from "react-router-dom";


function NavBar() {
  return (
    
    <nav className="pagetitle">
      <Link to="/." 
      style={{ textDecoration: 'none', color: '#EF0888' }}> 
      BANGYAL ! </Link>
      </nav>
  )
}

export default NavBar
