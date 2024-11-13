`use strict`

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form-search");
const list = document.querySelector('.gallery-markup');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.js-load-more')
// console.log(loadMore);

import { fetchData } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

form.addEventListener("submit", handleSearch);

let page = 1;
let perPage = 15;
let nameSearch = '';

export { page, perPage, nameSearch };
    
const instanse = new SimpleLightbox('.gallery-markup a', {
  captionData: 'alt',
  captionDelay: 250,
});

export function handleSearch(event) {
    event.preventDefault();
    
    const list = document.querySelector('.gallery-markup');
    nameSearch = event.currentTarget.elements.title.value.toLowerCase().trim();
    // console.log(nameSearch);

    if (nameSearch==="") {
       return
    }
    
    resetMarkup();
    showLoader();
    

    fetchData(nameSearch)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.error({
                    position: 'center',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                });
                hideLoader();
                return;
            }
            // console.log("then", data);
            list.innerHTML = createMarkup(data.hits);

            if (data.hits.length !== 0 && page * perPage < data.totalHits) {
                loadMore.classList.replace("load-more-hidden", "load-more")
            };
            
            const images = list.querySelectorAll("img");
            const promises = Array.from(images).map(img => {
                return new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            return Promise.all(promises).then(() => {
                instanse.refresh('show.simplelightbox'); 
                hideLoader(); 
            });


        })
        .catch(error => {
        console.log("catch", error);
        })
        .finally(() => {
            hideLoader();
            form.reset();
        })
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}



async function onLoadMore() {
    page += 1;

    try {
        const data = await fetchData(nameSearch, page, perPage);
        list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
        instanse.refresh('show.simplelightbox'); 

        const cardSize = list.lastElementChild.getBoundingClientRect();
        window.scrollBy({
        top: cardSize.top + cardSize.height * 1.5,
        behavior: 'smooth',
        });

        if (page * perPage >= data.totalHits) {
            loadMore.classList.replace("load-more", "load-more-hidden");
            iziToast.show({
            class: 'toast',
            position: 'topRight',
            message: `We're sorry, but you've reached the end of search results.`,
        })
        };
        
        
        
    } catch (error) {
        console.log(error.message);
        iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        timeout: 2500,
        closeOnClick: true,
        });
    }
}

loadMore.addEventListener("click", onLoadMore);

function resetMarkup() {
  list.innerHTML = '';
}

const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


