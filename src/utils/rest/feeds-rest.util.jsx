import axios from 'axios';

const URLS = {
    feeds: "feed/sample.json",
}

export const feedsRESTUtil = {
    getFeeds: async () => {
        const response = await axios.get(URLS.feeds);

        return response.data;
    }
}