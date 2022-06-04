import { useState, useEffect } from 'react';
import '../App.css';
import SearchBox from './SearchBox';
import DisplaySearchResult from './DisplaySearchResult';
import SongInfo from './SongInfo';
import FavList from './FavList';

function Home( { searchData, setSearchData, artistId, setArtistId } ) {
    const [inputSearch, setInputSearch] = useState("");
    const [searchText, setSearchText] = useState("");
    const [favorites, setFavorites] = useState([])
    const [song, setSong] = useState(0);
    const [which, setWhich] = useState("search")
    
    useEffect(() => {
     const options = {
       method: "GET",
       headers: {
        'X-RapidAPI-Host': 'genius.p.rapidapi.com',
        'X-RapidAPI-Key': 'e0236fb4a2mshf616fc9e68f5f98p12f2d2jsna26476e4149c',
      }
      
     };
     if (!searchText) 
     return
       //  fetch('https://genius.p.rapidapi.com/songs/5516074', options)
     const baseUrl= "https://genius.p.rapidapi.com/search?q="
    fetch(`${baseUrl}${searchText}?&per_page=15`, options)
       .then((response) => response.json())
       .then((data) => {
        setArtistId(data?.response.hits[0]?.result?.primary_artist?.api_path)
         return setSearchData(data?.response)
       })
       .catch((err) => console.error(err));  
      }, [searchText]);

      useEffect(()=> {
        const FavoriteSongs = JSON.parse(
          localStorage.getItem("favorites-songs")
          );
          if (!FavoriteSongs) return;
          else setFavorites(FavoriteSongs);
      }, [])
  
      
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!inputSearch) {
        console.log("empty search")
      } else {
      setSearchText(inputSearch);
      setInputSearch("");
      setSong(0);
      }
    }

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favorites-songs", JSON.stringify(items))
  } 

    const addToFav = (music) => {
        if (favorites.length < 20) {
        const newFavoriteList = [...favorites, music]
        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
        } else { 
            window.alert("You can have up to 20 songs in your favorites")}
    }

    const removefromFav = (music) => {
        const newFavoriteList = favorites.filter((m) => m.result.id !== music.result.id)
        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
      }



  return (
        <div className="container">
      <form className="form" onSubmit={handleSubmit}>
      <SearchBox 
      setInputSearch={setInputSearch} 
      inputSearch={inputSearch}
      setWhich={setWhich}
      />
      </form>
      <FavList favorites={favorites} 
      removefromFav={removefromFav} 
      setSong={setSong}
      setWhich={setWhich} />
      <div className="main-display">    
      <DisplaySearchResult 
      searchData={searchData}
      setSong={setSong}
      which={which}
      setWhich={setWhich}
      setArtistId={setArtistId}
      inputSearch={inputSearch}
      favorites={favorites} 
      />
      <SongInfo song={song} 
      searchData={searchData}
      setArtistId={setArtistId}
      inputSearch={inputSearch} 
      which={which}
      favorites={favorites}
      addToFav={addToFav}
      removefromFav={removefromFav}
    //   artistName={artistName}
      />
      </div>

    </div>

  )
}

export default Home
