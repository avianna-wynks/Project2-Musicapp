import React from 'react'
import { Link } from "react-router-dom";


function NavBar( {setSearchData} )  {
  return (
    
    <nav className="pagetitle">
      <div className="logo">
      <Link to="/." 
      onClick={handleClick=> {setSearchData([])}}
      style={{ textDecoration: 'none'}}> 
      <b>b<span>an</span>gy<span>a</span>l</b>
      </Link>
      </div>
      </nav>
  )
}

export default NavBar
