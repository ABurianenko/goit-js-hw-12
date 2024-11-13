`use strict`

import axios from 'axios';



import { page, perPage } from '../main';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46816604-07077c66f94f9cd22bbea8735"

export async function fetchData (nameSearch="") {
    const params = new URLSearchParams({
        key: API_KEY,
        q: nameSearch,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: perPage
    })
    
    const { data } = await axios(`${BASE_URL}?${params}`);
    
    return data;

    // return fetch(`${BASE_URL}?${params}`)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(response.statusText)
    //         }

    //         return response.json();
    //     })
}


