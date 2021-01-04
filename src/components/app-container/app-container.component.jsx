import React from 'react';
import AppFooter from '../app-footer/app-footer';
import AppHeader from '../app-header/app-header';

const AppContainer = (props) => {
    return (
        <main className="app">
            <AppHeader />
                <div>
                    {props.children}
                </div>
            <AppFooter />
        </main>
    );
}

export default AppContainer;
