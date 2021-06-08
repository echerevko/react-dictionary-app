import React from 'react';

const Photos = (props) => {
    if  (props.photos) {
        return (
        <section className="Photos">
            {props.photos.map(function(photo,index) {
                return <img src={photo.src.tiny} />;
            })}
        </section>
        );
    } else {
        return null;
    }
    
}

export default Photos
