import React from 'react';
import { useHistory } from "react-router-dom";
import AppPageContainer from '../../components/app-page-container/app-page-container.component';
import CardPlaceholder from '../../components/card-placeholder/card-placeholder.component';
import { ROUTES } from '../../routers/routes.util';

const HomePage = () => {
    const history = useHistory();
    
    return (
        <AppPageContainer subtitle="Popular Titles">
            <div onClick={() => history.push(ROUTES.SERIES)}>
                <CardPlaceholder banner="SERIES" title="Popular Series" />
            </div>
            <div onClick={() => history.push(ROUTES.MOVIES)}>
                <CardPlaceholder banner="MOVIES" title="Popular Movies" />
            </div>
        </AppPageContainer>
    );
}

export default HomePage;
