import React from 'react';
import './style.css';
function Film ({name,genre,poster,year}){
    return(
        <div className='Film'>
            <img src={'../../images/$.jpg'}></img>
            <h5>{genre}</h5>
            <h5>{year}</h5>
            <h2>{name}</h2>
        </div>
    )
}
export default Film;