import React from 'react'

const Synonyms = (props) => {
    console.log(props)
   if (props.synonyms) {
        return (
            <ul className="Synonym">
             {props.synonyms.map(function(synonym, index){
                 return (
                     <li key={index}>
                     {synonym}
                     </li>
                 )
             })}
             </ul>
        );
    } else {
        return null;
    }
}

export default Synonyms
