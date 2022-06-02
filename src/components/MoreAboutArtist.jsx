import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar'

function MoreAboutArtist() {
    // const [id, setId] = useState('');
    const artID = useParams();
    console.log("今のID",artID.id)
    
  useEffect(() => {
//     if (!artistId) {
//       return;
//     }
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Host": "genius.p.rapidapi.com",
//         "X-RapidAPI-Key": "e0236fb4a2mshf616fc9e68f5f98p12f2d2jsna26476e4149c",
//       },
//     };
//     const baseUrlArtist = "https://genius.p.rapidapi.com";
//     fetch(`${baseUrlArtist}${artistId}`, options)
//       .then((response) => response.json())
//       .then((data) => {
//         return setArtistInfo(data?.response.artist);
//       })
//       .catch((err) => console.error(err));
    fetch(`https://musicbrainz.org/ws/2/artist/${artID.id}?inc=aliases&fmt=json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); 
        // setMusicBrainzData(data?.artists[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
    
  return (
    <div>
      More about the artist
    </div>
  )
}

export default MoreAboutArtist
