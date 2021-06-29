import React from 'react'
import './Header.css'

const Header=({headerExpanded})=> {
    const add = "https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"; 
    return (
        <div className="head-container">
            <img className={`head-img ${headerExpanded ? 'head-img-expanded' : 'head-img-contracted' }`} src={add} alt="Header" />
            <h1 className="head-text">Name It!</h1>
            
        </div>
    )
}
export default Header;