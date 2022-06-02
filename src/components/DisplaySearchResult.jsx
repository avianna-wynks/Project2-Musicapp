import React, { useState } from 'react'
import ArtistInfo from './ArtistInfo';


function DisplaySearchResult({searchData, setArtistId, song, setSong}) {
  console.log("in display search result",song)

  if (searchData.length === 0) {
    return null;
  } 

  return (
    <div className="search-result">
      <div className="index">
      <h2> Matched Songs </h2>
      </div>
       {searchData?.hits.map((result, index) => {
        return (
      <div className='results' key={index}>
        <div className='reslutPhoto'>
        <img onClick={handleClick => {setSong(index)}}
        src={result?.result?.header_image_thumbnail_url} 
        alt="" 
        width={"170px"}
        />
        </div>
        <div className='result-info'>
        <p> Song : {result?.result?.title} </p>
        <p className='result-artist'
        > 
        Artist : {result?.result?.artist_names}</p>
        <p>add to favorite</p>
       {/* <a href={result?.result?.url} target="_blank" > View full yrics on Genius </a> */}
        </div>
      </div>
      )}
      )}
    </div>
  )}

export default DisplaySearchResult;
