import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import  Router from '../App';
import MoreAboutArtist from "./MoreAboutArtist";

function ArtistInfo({ artistId, artistName }) {
  const [artistInfo, setArtistInfo] = useState([]);
  const [musicbrainzData, setMusicBrainzData] = useState([]);
//   const [IdForMusicBrainz, setIdForMusicBrainz] = useState("")

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
    fetch(`https://musicbrainz.org/ws/2/artist/?query=${artistName}&fmt=json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("in artist info", data); 
        setMusicBrainzData(data?.artists[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [artistId]);

const IdForMusicBrainz = musicbrainzData?.id
if (artistId) {

  return (
    <div className="artist-info">
      <div className="index">
      <h2> Song Info</h2>
      </div>
      <div className="artist-photos">
        <img
          src={artistInfo?.image_url}
          alt=""
          width={"350px"}
          height={"300px"}
        />
      </div>
      <p>Artist: {artistInfo?.name}</p>
      <p>Genre: {musicbrainzData ? 
       (musicbrainzData?.tags?.map((genre, index) => {
          return (
            <span key={index}> {genre?.name},</span>          
          )
      })) : "N/A"}
      </p>
      <p>Country: {musicbrainzData ? (
          musicbrainzData?.area?.name) : "N/A" } </p>
      <p>Find more about 
        <Link to={`/artistinfo/${IdForMusicBrainz}`} 
      component={<MoreAboutArtist IdForMusicBrainz={IdForMusicBrainz} />}>{artistInfo?.name}
      </Link>
      </p>  

      
    </div>
  )};
}
//{musicbrainzData?.tags[0].name}
export default ArtistInfo;
