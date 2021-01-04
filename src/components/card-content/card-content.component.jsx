import React from 'react';
import './card-content.css';

const CardContent = (props) => {
    return (
        <div className="card-content-holder mr-4">
            <div 
                className="d-flex align-items-center justify-content-center card"
                style={{
                    backgroundImage: `url("${props.imgUrl}")`, 
                }}
            >
            </div>
            <p className="title my-2">{props.title}</p>
        </div>
    );
}

export default CardContent;
