import { useEffect, useState } from 'react'


function ArtistInfo( { artistId }) {
  
    const [artistInfo, setArtistInfo] = useState([]);
    console.log("artist info", artistInfo)

    useEffect(() => {
        const options = {
          method: "GET",
          headers: {
           'X-RapidAPI-Host': 'genius.p.rapidapi.com',
           'X-RapidAPI-Key': 'e0236fb4a2mshf616fc9e68f5f98p12f2d2jsna26476e4149c',
         }       
        };
          //  pink: 345'
        const baseUrl= "https://genius.p.rapidapi.com"
       fetch(`${baseUrl}${artistId}`, options)
          .then((response) => response.json())
          .then((data) => {
            return setArtistInfo(data?.response.artist)
          })
          .catch((err) => console.error(err));
         }, [artistId]);

  return (
    <div className="artist-info">
      <h2> Artist info here </h2>
      <img src={artistInfo.image_url} 
      alt="" 
      width={"450px"} 
      height={"400px"} 
      />
      <p>{artistInfo.name}</p>
    </div>
  )
}

export default ArtistInfo
