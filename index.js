/* empty css                      */import{a as b,S as v,i as u}from"./assets/vendor-D73Uttp0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const P="https://pixabay.com/api/",q="46816604-07077c66f94f9cd22bbea8735";async function g(r=""){const s=new URLSearchParams({key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:c}),{data:o}=await b(`${P}?${s}`);return o}function y(r){return r.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:m})=>`
        <li class= "gallery-item" >
            <a class="gallery-item-link" href="${o}">
                <img
                class="item-img"
                src="${s}" 
                data-source="${o}" 
                alt="${i}" />
            </a>
            <ul class="item-stat-list">
                <li class="item-stat">
                    <h2 class="item-stat-name">Likes</h2>
                    <p class="item-stat-amount">${e}</p>
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Views</h2>
                    <p class="item-stat-amount">${t}</p>
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Comments</h2>
                    <p class="item-stat-amount">${a}</p>        
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Downloads</h2>
                    <p class="item-stat-amount">${m}</p>
                </li>
            </ul>
        </li>
    `).join("")}const L=document.querySelector(".form-search"),h=document.querySelector(".gallery-markup"),w=document.querySelector(".loader"),f=document.querySelector(".js-load-more");L.addEventListener("submit",$);let n=1,c=15,l="";const S=new v(".gallery-markup a",{captionData:"alt",captionDelay:250});function $(r){r.preventDefault(),n=1;const s=document.querySelector(".gallery-markup");l=r.currentTarget.elements.title.value.toLowerCase().trim(),l!==""&&(T(),E(),g(l).then(o=>{if(o.hits.length===0){u.error({position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}s.innerHTML=y(o.hits),o.hits.length!==0&&n*c<o.totalHits&&f.classList.replace("load-more-hidden","load-more");const i=s.querySelectorAll("img"),e=Array.from(i).map(t=>new Promise((a,m)=>{t.onload=a,t.onerror=m}));return Promise.all(e).then(()=>{S.refresh("show.simplelightbox"),d()})}).catch(o=>{console.log("catch",o)}).finally(()=>{d(),L.reset()}))}function E(){w.classList.remove("hidden")}function d(){w.classList.add("hidden")}async function M(){n+=1;try{const r=await g(l,n,c);h.insertAdjacentHTML("beforeend",y(r.hits)),S.refresh("show.simplelightbox");const s=h.lastElementChild.getBoundingClientRect();window.scrollBy({top:s.top+s.height*1.5,behavior:"smooth"}),n*c>=r.totalHits&&(f.classList.replace("load-more","load-more-hidden"),u.show({class:"toast",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.log(r.message),u.error({title:"Error",message:"Failed to fetch images. Please try again later.",timeout:2500,closeOnClick:!0})}}f.addEventListener("click",M);function T(){h.innerHTML=""}const p=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{window.scrollY>300?p.classList.remove("hidden"):p.classList.add("hidden")});p.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
