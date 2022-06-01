import React from 'react'

function DisplaySearchResult({searchData, inputSearch, setArtistId}) {
  if (searchData.length === 0) {
    return null
  } 
  // console.log("aaaaa", searchData)
  return (
    // <div className="search-result">
    //   <h2> search result </h2>
    //   <div className='results'>
    //   <div className='reslutPhoto'> 
    //   <img src="https://images.genius.com/f3b043444b7b500d02a7b27552ad8d61.300x300x1.jpg" alt="" width={"170px"} />
    //   </div>
    //   <div className='result-info'> 
    //   <p> Artist : aaaaa</p>
    //   <p> Song :  </p>
    //   <p> lyrics</p>
    //   </div>
    //   </div>
    //   <div className='results'>
    //   <div className='reslutPhoto'> 
    //   <img src="https://images.genius.com/f3b043444b7b500d02a7b27552ad8d61.300x300x1.jpg" alt="" width={"170px"} />
    //   </div>
    //   <div className='result-info'> 
    //   <p> Artist : aaaaa</p>
    //   <p> Song :  </p>
    //   <p> lyrics</p>
    //   </div>
    //   </div>
    //   <div className='results'>
    //   <div className='reslutPhoto'> 
    //   <img src="https://images.genius.com/f3b043444b7b500d02a7b27552ad8d61.300x300x1.jpg" alt="" width={"170px"} />
    //   </div>
    //   <div className='result-info'>  
    //   <p> Artist : aaaaa</p>
    //   <p> Song :  </p>
    //   <p> lyrics</p>
    //   </div>
    //   </div>
    // </div>
    <div className="search-result">
      <h2> Your Music </h2>
      {searchData?.hits.map((result, index) => {
        return (
      <div className='results' key={index}>
        <div className='reslutPhoto'>
        <img 
        src={result?.result?.header_image_thumbnail_url} 
        alt="" 
        width={"200px"}
        onClick={setArtistId(result?.result?.primary_artist.api_path)}
        />
        </div>
        <div className='result-info'>
        <p> Artist : {result?.result?.artist_names}</p>
        <p> Song : {result?.result?.title} </p>
        <a href={result?.result?.url} > Lyrics  </a>
        </div>
      </div>
      )}
      )}
      <div></div>
    </div>
  )
}

export default DisplaySearchResult
