import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home';


function App() {

  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

  // const getData = () => {
  //     fetch(`${baseUrl}${inputSearch}&fmt=json`)
  //   //  fetch(" https://musicbrainz.org/ws/2/artist/?query=pink&fmt=json")
  //     .then(response => {
  //        if (!response.ok) {
  //          throw new Error(`Error status: ${response.status}`);  
  //       }
  //     return response.json();
  // })
  //     .then(data => {
  //        console.log(data)
  //         setSearchData(data)
  //       console.log("artist name", data.artists[0].name)
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
      
  // };

