import React from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import useCollapse from "react-collapsed";
import DisplayFav from './DisplayFav';




function FavList( { favorites, removefromFav, setWhich, setSong} ) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    console.log(favorites)

    return (
        <div>
            <div className='fav-name'>
            <p {...getToggleProps()}>
                {isExpanded ? 'hide your favorite songs 🙈' : 'see your favorite songs  '}
            </p>
            </div>
            <div className="fav-list-all" {...getCollapseProps()}>
                { favorites.length === 0 ? ( 
                    <p> Favorite is empty </p>
                ) : favorites.map((fav, index) => (
                    <div key={index} className="fav-list" >
                    <div> 
                    <img onClick={()=> {setWhich("favorite")
                    setSong(index)}}
                    src={fav.result.header_image_thumbnail_url} 
                    alt="" 
                    width={"140px"}/>
                    </div>
                    <div>
                    {fav.result.title} <br/>
                     /{fav.result.artist_names}
                     <p className="icon"
                     onClick={() => {removefromFav(fav);}}
                     >Remove</p>
                     </div>
                     {/* <Routes>
                    <Route path="/favorite" element={<DisplayFav />}  />
                    </Routes> */}
                    </div>

                ))
                                          
                }
            </div>
        </div>
    );
    }
export default FavList
