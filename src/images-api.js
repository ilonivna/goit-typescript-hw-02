import axios from 'axios';

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (imageQuery, currentPage) => {
    const response = await axios.get("/search/photos", {
        params: {
            client_id: "B-nNHBf4hvBVg3Ze--L4Yo5oZR5azJSE-iFpxNZh-P4",
            query: imageQuery,
            page: currentPage,
            per_page: 12,
        }
    });
    return response.data;
}