import React from 'react';
import "./Phonetic.css";

const Phonetic = (props) => {
    return (
        <div className="Phonetic">
            <a href={props.meaning.audio} target="_blank" rel="noreferrer">
                Listen 
            </a>
            <span className="text">{props.meaning.text}</span>
        </div>
    )
}

export default Phonetic;
