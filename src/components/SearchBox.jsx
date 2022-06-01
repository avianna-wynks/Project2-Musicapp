import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

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
      <button 
      className="search-btn">
        Search</button>
      </div>
    </div>
  )
}

export default SearchBox
