import React from 'react';

const Results = (props) => {
    if (props.results) {
        return (
        <div className="Results">
            <h2> {props.results.word}</h2>
            {props.results.meanings.map(function(meaning,index) {
                return meaning.definitions[0].definition;
            })}
        </div>
        )
    } else {
        return null;
   }
       
}

export default Results;
