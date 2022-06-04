import React from "react";
import { Link } from "react-router-dom";

function SongInfo({ song, searchData , setArtistId, addToFav, removefromFav, favorites, which }) 
{
  
  if (searchData?.length === 0 && favorites?.length === 0) {
    return (<></>);
  } else if (searchData?.length === 0 && favorites?.length > 0 && which === "search") {
    return (<></>);
  } 
  switch (which) {
    case "favorite":
      return (
        <div className="artist-info">
          <div className="index">
            <h2> Song Info </h2>
          </div>
          <div className="right-photo">
            <img 
              src={favorites[song]?.result?.header_image_thumbnail_url}
              alt=""
              width={"350px"}
              height={"300px"}
            />
          </div>
          <div className="song-info">
            <div className="songinfo-left">
              <p> 
              Title : {favorites[song]?.result?.title} </p>   
              <Link
                to={"/artistinfo"}
                className="result-artist"
                onClick={() => {
                  setArtistId(
                    favorites[song]?.result?.primary_artist.api_path
                  )
                }}
              >
                By : {favorites[song]?.result?.artist_names}
              </Link>
    
              <p>
                Released on : {favorites[song]?.result.release_date_for_display}
              </p>
    
              <a href={favorites[song]?.result?.url} target="_blank">
                View full yrics on Genius (external link)
              </a>
            </div>
           
            <div className="songinfo-right">
            <svg onClick={() => {removefromFav(favorites[song])}}
              id="heart-icon-remove"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            remove form fav
            
          </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="artist-info">
          <div className="index">
            <h2> Song Info </h2>
          </div>
          <div className="right-photo">
            <img 
              src={searchData?.hits[song]?.result?.header_image_thumbnail_url}
              alt=""
              width={"350px"}
              height={"300px"}
            />
          </div>
          <div className="song-info">
            <div className="songinfo-left">
              <p> 
              Title : {searchData?.hits[song]?.result?.title} </p>
    
              <Link
                to={"/artistinfo"}
                className="result-artist"
                onClick={() => {
                  setArtistId(
                    searchData?.hits[song]?.result?.primary_artist.api_path
                  )
                }}
              >
                By : {searchData?.hits[song]?.result?.artist_names}
              </Link>
    
              <p>
                Released on :{" "}
                {searchData?.hits[song]?.result?.release_date_for_display}
              </p>
              <a href={searchData?.hits[song]?.result?.url} target="_blank">
                View full yrics on Genius (external link)
              </a>
            </div>
            {favorites.length === 0 ? ( 
            <div className="songinfo-right">
              <svg onClick={() => {
              addToFav(searchData?.hits[song]);
            }}
                id="heart-icon-add"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              add to fav
              
            </div>
            ) : 
            favorites.length > 0 && !favorites.some((m) => m.result.id === searchData?.hits[song]?.result?.id) ? 
            ( 
            <div className="songinfo-right">
              <svg onClick={() => {addToFav(searchData?.hits[song])}}
                id="heart-icon-add"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              add to fav
              
            </div>
    
      ):
            <div className="songinfo-right">
            <svg onClick={() => {removefromFav(searchData?.hits[song])}}
              id="heart-icon-remove"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            remove form fav
            
          </div>
            
            }
          </div>
        </div>
      );
  }


}
export default SongInfo;

