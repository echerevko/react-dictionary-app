import React, {useState} from 'react'
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results"
import Photos from "./Photos"

const Dictionary = (props) => {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = `563492ad6f917000010000012d70564070c6449aa059c75616bb5bdd`;
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`}
        axios
            .get(pexelsApiUrl, {headers: headers})
            .then(handlePexelsResponse);

    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
      return (
        <div className="Dictionary">
            <section>
                <h3>What word do you want to look up?</h3>
                <form onSubmit={handleSubmit}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}/>   
                </form> 
         </section>
         <Results results={results}/> 
        <Photos photos={photos}/> 

        </div>
     )  
    } else {
        load();
        return "Loading";
    }
    
}

export default Dictionary 