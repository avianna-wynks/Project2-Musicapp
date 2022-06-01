import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../App.css';
import SearchBox from './SearchBox';
import DisplaySearchResult from './DisplaySearchResult';
import RandomArtists from './RandomArtists';
import ArtistInfo from './ArtistInfo';

function Home() {
    const [searchData, setSearchData] = useState([]);
    const [inputSearch, setInputSearch] = useState("");
    const [searchText, setSearchText] = useState("");
    const [artistId, setArtistId] = useState("")
    
    useEffect(() => {
     const options = {
       method: "GET",
       headers: {
        'X-RapidAPI-Host': 'genius.p.rapidapi.com',
        'X-RapidAPI-Key': 'e0236fb4a2mshf616fc9e68f5f98p12f2d2jsna26476e4149c',
      }
      
     };
       //  fetch('https://genius.p.rapidapi.com/artists/16775', options)
     const baseUrl= "https://genius.p.rapidapi.com/search?q="
    fetch(`${baseUrl}${searchText}`, options)
       .then((response) => response.json())
       .then((data) => {
        setArtistId(data?.response.hits[0].result.primary_artist.api_path)
         return setSearchData(data?.response)
       })
       .catch((err) => console.error(err));  
      }, [searchText]);
  
      
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!inputSearch) {
        console.log("empty search")
      } else {
      // getData()
      setSearchText(inputSearch);
      setInputSearch("");
      }
    }


  return (
        <div className="container">
      <div className="pagetitle">
      <h1> Bangya! </h1>
      </div >
      <form className="form" onSubmit={handleSubmit}>
      <SearchBox 
      setInputSearch={setInputSearch} inputSearch={inputSearch}
      />
      <RandomArtists />
      </form>
      <div className="main-display">
      <DisplaySearchResult 
      searchData={searchData}
      setArtistId={setArtistId}
      inputSearch={inputSearch} 
      />
      <ArtistInfo artistId={artistId} />
      </div>

    </div>

  )
}

export default Home
