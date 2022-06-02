import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home';
import MoreAboutArtist from "./components/MoreAboutArtist";
import NavBar from "./components/NavBar";


function App() {

  return (
    <div className="container">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/artistinfo" element={<MoreAboutArtist />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"></Route>
      <Route path="/artistinfo" element={<MoreAboutArtist />} />
      {/* <Route path="/about" element={<About />} ></Route> */}     
    </Routes>
    </BrowserRouter>
  )
}

