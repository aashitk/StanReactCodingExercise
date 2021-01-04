import React from 'react';
import './app-subheader.css';

const AppSubHeader = (props) => {
    return (
        <div className="app-subheader">
            <div className="container-fluid d-flex align-items-center 
                justify-content-between flex-wrap flex-sm-nowrap"
            >
                <div className="d-flex align-items-center mr-2">
                    <h2>{props.subtitle}</h2>
                </div>
            </div>
        </div>
    );
}

export default AppSubHeader;
