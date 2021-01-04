import React from 'react';
import AppSubHeader from '../app-subheader/app-subheader';
import './app-page-container.css'

const AppPageContainer = (props) => {
    return (
        <div className="main-page">
            <AppSubHeader subtitle={props.subtitle} />
            <div className="container-fluid d-flex align-items-center flex-wrap main-container">
                {props.children}
            </div>
        </div>
    );
}

export default AppPageContainer;
