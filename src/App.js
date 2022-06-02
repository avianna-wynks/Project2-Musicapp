import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home';
import MoreAboutArtist from "./components/MoreAboutArtist";
import NavBar from "./components/NavBar";
import DisplaySearchResult from "./components/DisplaySearchResult";


function App() {

  return (
    <div className="container">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />    
      {/* <Route path="searchresults" component={<DisplaySearchResult />} /> */}
      <Route path="/artistinfo/:id" element={<MoreAboutArtist />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


