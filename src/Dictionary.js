import React, {useState} from 'react'
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results"


const Dictionary = () => {
    let [keyword, setKeyword] = useState("");
    
    function handleResponse(response) {
        console.log(response.data[0]);
        console.log(response.data[0].meanings[0].definitions[0].definition);

    }

    function search(event){
        event.preventDefault();
        alert(`${keyword}`);
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }


    return (
        <div className="Dictionary">
         <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
           <Results/> 
         </form> 
        </div>
    )
}

export default Dictionary 