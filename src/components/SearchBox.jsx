import React from "react";
import { useNavigate } from "react-router-dom";

//<article onClick={() => {nav(`/details/${props.item.id}`)}}>
function SearchBox(props) {
  const nav = useNavigate();

  return (
    <div className="seachBox">
      <div>
        <input
          type="text"
          placeholder="type your artist/song/lyrics..."
          aria-describedby="button-addon2"
          onChange={(event) => props.setInputSearch(event.target.value)}
          value={props.inputSearch}
        />
        <button
          onClick={() => {
            nav("/searchresults");
            props.setWhich("search");
          }}
          className="search-btn"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
