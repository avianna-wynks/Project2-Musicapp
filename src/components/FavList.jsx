import React from 'react'
import useCollapse from "react-collapsed";


function FavList( { favorites, removefromFav, setWhich, setSong} ) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    console.log(favorites)

    return (
        <div className="fav">
            <div className='fav-name'>
            <p {...getToggleProps()}>
                {isExpanded ? <p> hide your favorite songs 🙈 </p>:             
                <p> see your favorite songs💓 </p>
                
                }
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
                     <p className="remove"
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
