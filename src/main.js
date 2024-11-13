`use strict`

import { handleSearch } from "./js/pixabay-api";


export const form = document.querySelector(".form-search");
export const list = document.querySelector('.gallery-markup');
export const loader = document.querySelector('.loader');
export const loadMore = document.querySelector('.js-load-more')
// console.log(list);

form.addEventListener("submit", handleSearch);



