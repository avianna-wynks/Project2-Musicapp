import React from 'react'
import useCollapse from "react-collapsed";


function FavList( { favorites, removefromFav } ) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    console.log(favorites)
    return (
        <div>
            <div className='fav-name'>
            <p {...getToggleProps()}>
                {isExpanded ? 'hide your favorite songs 🙈' : 'see your favorite songs  '}
            </p>
            </div>
            <section className="fav-list-all" {...getCollapseProps()}>
                { favorites.length === 0 ? ( 
                    <p> Favorite is empty </p>
                ) : favorites.map((fav, index) => (
                    <div key={index} className="fav-list" >
                    <div> 
                    <img src={fav.result.header_image_thumbnail_url} 
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
                    </div>

                ))
                
                
                
                
                
                }
            </section>
        </div>
    );
    }
export default FavList
