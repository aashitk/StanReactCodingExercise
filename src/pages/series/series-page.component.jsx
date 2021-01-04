import React, { useEffect, useState } from 'react';
import AppErrorHandle from '../../components/app-error-handle/app-error-handle.component';
import AppLoader from '../../components/app-loader/app-loader.component';
import AppPageContainer from '../../components/app-page-container/app-page-container.component';
import CardContent from '../../components/card-content/card-content.component';
import { PROGRAM_TYPE } from '../../utils/constants/common.constants';
import { feedsRESTUtil } from '../../utils/rest/feeds-rest.util';
import { strSort } from '../../utils/utils';

const SeriesPage = () => {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        feedsRESTUtil.getFeeds()
        .then((data) => {
            const sers = data.entries.filter((item) => {
                return item.programType === PROGRAM_TYPE.Series &&
                    item.releaseYear >= 2010;
            }).sort((m1, m2) => {
                return strSort(m1.title, m2.title);
            });
            sers.splice(21);
            setSeries(sers);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setError(true);
        })
    }, []);

    if (loading) {
        return (
            <AppPageContainer subtitle="Popular Series">
                <AppLoader />
            </AppPageContainer>
        );
    }
    else if (error) {
        return (
            <AppPageContainer subtitle="Popular Series">
                <AppErrorHandle />
            </AppPageContainer>
        );
    }

    return (
        <AppPageContainer subtitle="Popular Series">
            <div className="d-flex align-items-center flex-wrap justify-content-around-md">
                {series.map((mov, i) => {
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

export default SeriesPage;
