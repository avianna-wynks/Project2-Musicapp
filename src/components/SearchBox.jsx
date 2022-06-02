import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function SearchBox(props) {

  return (
    <div className="seachBox">
      <div className="input-group mb-3">
      <input type="text" 
      placeholder='type your artist/song/lyrics...' 
      aria-describedby="button-addon2"
      onChange={((event) => props.setInputSearch(event.target.value))}
      value={props.inputSearch}
      />
      {/* <Link to="searchresults"> */}
        <button className="search-btn"> 
        Search</button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default SearchBox
