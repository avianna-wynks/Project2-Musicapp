import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home';
// import MoreAboutArtist from "./components/MoreAboutArtist";
import NavBar from "./components/NavBar";
import DisplaySearchResult from "./components/DisplaySearchResult";
import { useState } from 'react';
import ArtistInfo from "./components/ArtistInfo";



function App() {
  const [searchData, setSearchData] = useState([]);
  const [artistId, setArtistId] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar 
      setSearchData={searchData} />
      <Routes>
        <Route path="/" 
        element=
        {<Home 
        searchData={searchData} 
        setSearchData={setSearchData}
        artistId={artistId} 
        setArtistId={setArtistId}/>} 
        >    
      <Route 
      path="searchresults" 
      element={<DisplaySearchResult 
      />} 
      />
      </Route>
      <Route 
      path="/artistinfo" 
      element={<ArtistInfo 
        artistId={artistId} 
        setArtistId={setArtistId}/>} 
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



