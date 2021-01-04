import React from 'react';
import './app-header.css';

const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="container-fluid d-flex align-items-center 
                justify-content-between flex-wrap flex-sm-nowrap py-2"
            >
                <div className="d-flex align-items-center mr-2">
                    <h1 className="my-2">DEMO Streaming</h1>
                </div>
                <div className="d-flex align-items-center">
                    <div className="mr-4">
                        <button className="btn btn-link">Log in</button>
                    </div>
                    <div className="ml-4">
                        <button className="btn btn-dark rad-0">Start your free trial</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
