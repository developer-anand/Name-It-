import React,{useState} from 'react'
import './app.css'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
 
const App = ()=>{

    const [headerExpanded, setheaderExpanded] = useState(true);

    const heading = "Search Names For Your Apps/Project/StartUp..!!!"
    const handleInputChange = (inputText) =>{
        setheaderExpanded(!inputText)
        console.log(inputText)
    }
    return( 
    <div>
        <Header headerExpanded= {headerExpanded}/>
        <h3 className="head-title">{heading}</h3>
        <SearchBar onInputChange ={handleInputChange} />
    </div>
    )
}

export default App;