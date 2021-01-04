import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/home-page.component';
import MoviesPage from '../pages/movies/movies-page.component';
import SeriesPage from '../pages/series/series-page.component';
import { ROUTES } from './routes.util';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME}>
                <HomePage />
            </Route>
            <Route exact path={ROUTES.MOVIES}>
                <MoviesPage />
            </Route>
            <Route exact path={ROUTES.SERIES}>
                <SeriesPage />
            </Route>
        </Switch>
    );
}

export default AppRouter;
