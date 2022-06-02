import React from 'react'

function SongInfo( { song, setSong, searchData } ) {
    console.log("in SongInfo", song)
    
    if (searchData.length === 0) {
        return null;
      }       
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
        <div>
        <div className="song-info">
        <p> Song : {searchData?.hits[song]?.result?.title} </p>
        <p className='result-artist'
        // onClick={handleClick => {console.log(result?.result?.primary_artist.api_path)}}
        > 
        Artist : {searchData?.hits[song]?.result?.artist_names}
        </p>
        <p>
        Release Date : {searchData?.hits[song]?.result?.release_date_for_display}
        </p>
        <a href={searchData?.hits[song]?.result?.url} target="_blank" > 
        View full yrics on Genius 
        </a>
        </div>
        </div>
    </div>
  )
}
export default SongInfo;
