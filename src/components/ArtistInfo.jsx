import { useEffect, useState } from "react";

function ArtistInfo({ artistId }) {

  const [artistInfo, setArtistInfo] = useState([]);
  const [musicbrainzData, setMusicBrainzData] = useState([]);
  console.log(artistInfo?.name)

  useEffect(() => {
    if (!artistId) {
      return;
    }
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "genius.p.rapidapi.com",
        "X-RapidAPI-Key": "e0236fb4a2mshf616fc9e68f5f98p12f2d2jsna26476e4149c",
      },
    };
    const baseUrlArtist = "https://genius.p.rapidapi.com";
    fetch(`${baseUrlArtist}${artistId}`, options)
      .then((response) => response.json())
      .then((data) => {
        return setArtistInfo(data?.response.artist);
        
      })
      .catch((err) => console.error(err));
  }, [artistId])
  
  useEffect(() => {
    fetch(`https://musicbrainz.org/ws/2/artist/?query=${artistInfo?.name}&fmt=json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("data",data)
        setMusicBrainzData(data?.artists[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [artistInfo] );

// const IdForMusicBrainz = musicbrainzData?.id
if (artistId) {

  return (
    <div className="artist-details">
      <div className="artist">
      <h1>{artistInfo?.name}</h1>
      </div>
      <div className="photo">
        <img
          src={artistInfo?.image_url}
          alt=""
          width={"350px"}
          height={"300px"}
        />
      </div>
      <div className="info">
      <p>Type: {musicbrainzData?.disambiguation}</p>
      <p>Genre: {musicbrainzData ? 
       (musicbrainzData?.tags?.map((genre, index) => {
          return (
            <span key={index}> {genre?.name},</span>          
          )
      })) : "N/A"}
      </p>
      <p>Country: {musicbrainzData ? (
          musicbrainzData?.area?.name) : "N/A" } </p>
    </div>
      
    </div>
  )};
}
//{musicbrainzData?.tags[0].name}
export default ArtistInfo;

//       <Link to={`/artistinfo/${IdForMusicBrainz}`} 
// component={<MoreAboutArtist IdForMusicBrainz={IdForMusicBrainz} />}>
