import { useEffect } from 'react'

function RandomArtists() {

  // useEffect(() => {
  //   const randomNumber = Math.floor(Math.random() * 1500000)
  //   console.log("the numebr",randomNumber)
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Host": "genius.p.rapidapi.com",
  //       "X-RapidAPI-Key": "e0236fb4a2mshf616fc9e68f5f98p12f2d2jsna26476e4149c",
  //     },
  //   };
  //   const baseUrlArtist = "https://genius.p.rapidapi.com/artists/"
  //   fetch(`${baseUrlArtist}${randomNumber}`, options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("random",data?.response)
  //       return data?.response
  //     })
  //     .catch((err) => console.error(err));

  //   }, []); 

  return (
    <div>
      RandomArtists here
    </div>
  )
}

export default RandomArtists
