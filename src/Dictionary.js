import React, {useState} from 'react'
import "./Dictionary.css"

const Dictionary = () => {
    let [keyword, setKeyword] = useState("");
    function search(event){
        event.preventDefault();
        alert(`${keyword}`)
    }

    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
         <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
         </form> 
        </div>
    )
}

export default Dictionary 