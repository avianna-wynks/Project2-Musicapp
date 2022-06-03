import React from 'react'
import { Link } from "react-router-dom";


function NavBar( {setSearchData} )  {
  return (
    
    <nav className="pagetitle">
      <Link to="/." 
      onClick={handleClick=> {setSearchData([])}}
      style={{ textDecoration: 'none', color: '#EF0888' }}> 
      BANGYAL ! </Link>
      </nav>
  )
}

export default NavBar
