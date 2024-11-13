`use strict`

export function createMarkup(arr) {
    const list = document.querySelector('.gallery-markup');
    
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class= "gallery-item" >
            <a class="gallery-item-link" href="${largeImageURL}">
                <img
                class="item-img"
                src="${webformatURL}" 
                data-source="${largeImageURL}" 
                alt="${tags}" />
            </a>
            <ul class="item-stat-list">
                <li class="item-stat">
                    <h2 class="item-stat-name">Likes</h2>
                    <p class="item-stat-amount">${likes}</p>
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Views</h2>
                    <p class="item-stat-amount">${views}</p>
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Comments</h2>
                    <p class="item-stat-amount">${comments}</p>        
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Downloads</h2>
                    <p class="item-stat-amount">${downloads}</p>
                </li>
            </ul>
        </li>
    `).join("")
}


