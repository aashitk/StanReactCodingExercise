import React from 'react';
import placeholder from '../../assets/placeholder.png';
import './card-placeholder.css';

const CardPlaceholder = (props) => {
    return (
        <div className="card-placeholder mr-4">
            <div 
                className="d-flex align-items-center justify-content-center card"
                style={{
                    backgroundImage: `url("${placeholder}")`, 
                }}
            >
                <span className="banner">{props.banner}</span>
            </div>
            <p className="title my-2">{props.title}</p>
        </div>
    );
}

export default CardPlaceholder;
