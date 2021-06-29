import React from 'react'
import './SearchBar.css'

const SearchBar = ({onInputChange}) =>{

    return(
        <div className="search-container">
            <input className="search-input" onChange={(event)=> onInputChange(event.target.value)}  />
        </div>
    )
}

export default SearchBar;