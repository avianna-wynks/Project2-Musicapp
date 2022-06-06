import React from 'react'
import useCollapse from "react-collapsed";


function FavList( { favorites, removefromFav, setWhich, setSong} ) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    console.log(favorites)

    return (
        <div className="fav">
            <div className='fav-name'>
            <div {...getToggleProps()}>
                {isExpanded ? <p> hide your favorite songs 🙈 </p>:             
                <p> see your favorite songs💓 </p>
                
                }
            </div>
            </div>
            <div className="fav-list-all" {...getCollapseProps()}>
                { favorites.length === 0 ? ( 
                    <p> Favorite is empty </p>
                ) : favorites.map((fav, index) => (
                    <div key={index} className="fav-list" >
                    <div className='fav-left'> 
                    <img onClick={()=> {setWhich("favorite")
                    setSong(index)}}
                    src={fav.result.header_image_thumbnail_url} 
                    alt="" 
                    width={"140px"}/>
                    </div>
                    <div className='fav-right'>
                    {fav.result.title} / {fav.result.artist_names}
                     <div className="remove"
                     onClick={() => {removefromFav(fav);}}
                     >Remove</div>
                     </div>
                    </div>

                ))
                                          
                }
            </div>
        </div>
    );
    }
export default FavList
