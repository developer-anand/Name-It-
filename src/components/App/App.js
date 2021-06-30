import React,{useState} from 'react'
import './app.css'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import ResultContainer from '../ResultContainer/ResultContainer'
 
const App = ()=>{

    const name = require("@rstacruz/startup-name-generator")
    const [headerExpanded, setheaderExpanded] = useState(true);
    const [suggestedNames, setsuggestedNames] = useState([])
    const heading = "Search Names For Your Apps/Project/StartUp..!!!"

    const handleInputChange = (inputText) =>{
       
        setheaderExpanded(!inputText)
        setsuggestedNames(inputText ? name(inputText) : []);
    }
    return( 
    <div>
        <Header headerExpanded= {headerExpanded}/>
        <h3 className={`head-title ${
                    headerExpanded
                        ? 'head-title-expanded'
                        : 'head-title-contracted'
                }`}>{heading}</h3>
        <SearchBar onInputChange ={handleInputChange} />
        <ResultContainer suggestedNames={suggestedNames} />
    </div>
    )
}

export default App;