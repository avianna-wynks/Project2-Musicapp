
function DisplaySearchResult({searchData, favorites, setSong, setWhich , which }) {
  console.log(favorites?.length)

  if (searchData?.length === 0 && favorites?.length === 0) {
    return (<></>);
  } else if (searchData?.length === 0 && favorites?.length > 0 && which === "search") {
    return (<></>);
  } else if (searchData?.length === 0 && favorites?.length > 0 && which === "favorite") {
  return (
    <div className="search-result">
      <div className="index">
      <h2> Your favorite </h2>
      </div>
       {favorites?.map((result, index) => {
        return (
      <div className='results' key={index}>
        <div className='reslutPhoto'>
        <img onClick={handleClick => 
        {setSong(index)
          setWhich("favorite")
        }}
        src={result?.result?.header_image_thumbnail_url} 
        alt="" 
        width={"170px"}
        />
        </div>
        <div className='result-info'>
        <p> Song : {result?.result?.title} </p>
        <p>
        Artist : {result?.result?.artist_names}
        </p>

        </div>
      </div>
      )}
      )}
    </div>
  )}
  else 
  return (
    
    <div className="search-result">
      <div className="index">
      <h2> Matched Songs </h2>
      </div>
       {searchData?.hits.map((result, index) => {
        return (
      <div className='results' key={index}>
        <div className='reslutPhoto'>
        <img onClick={handleClick => 
        {setSong(index)
          setWhich("search")
        }}
        src={result?.result?.header_image_thumbnail_url} 
        alt="" 
        width={"170px"}
        />
        </div>
        <div className='result-info'>
        <p> Song : {result?.result?.title} </p>
        <p>
        Artist : {result?.result?.artist_names}
        </p>

        </div>
      </div>
      )}
      )}
    </div>
  )}

export default DisplaySearchResult;

//  <a href={result?.result?.url} target="_blank" > View full yrics on Genius </a>
