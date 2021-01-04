import React, { useEffect, useState } from 'react';
import AppErrorHandle from '../../components/app-error-handle/app-error-handle.component';
import AppLoader from '../../components/app-loader/app-loader.component';
import AppPageContainer from '../../components/app-page-container/app-page-container.component';
import CardContent from '../../components/card-content/card-content.component';
import { PROGRAM_TYPE } from '../../utils/constants/common.constants';
import { feedsRESTUtil } from '../../utils/rest/feeds-rest.util';
import { strSort } from '../../utils/utils';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        feedsRESTUtil.getFeeds()
        .then((data) => {
            const movs = data.entries.filter((item) => {
                return item.programType === PROGRAM_TYPE.Movies &&
                    item.releaseYear >= 2010;
            }).sort((m1, m2) => {
                return strSort(m1.title, m2.title);
            });
            movs.splice(21);
            setMovies(movs);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setError(true);
        })
    }, []);

    if (loading) {
        return (
            <AppPageContainer subtitle="Popular Movies">
                <AppLoader />
            </AppPageContainer>
        );
    }
    else if (error) {
        return (
            <AppPageContainer subtitle="Popular Movies">
                <AppErrorHandle />
            </AppPageContainer>
        );
    }

    return (
        <AppPageContainer subtitle="Popular Movies">
            <div className="d-flex align-items-center flex-wrap justify-content-around-md">
                {movies.map((mov, i) => {
                    return <CardContent 
                        imgUrl={mov.images["Poster Art"].url} 
                        key={i}
                        title={mov.title}
                    />
                })}
            </div>
        </AppPageContainer>
    );
}

export default MoviesPage;
