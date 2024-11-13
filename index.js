/* empty css                      */import{a as b,S as v,i as c}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const E="https://pixabay.com/api/",P="46816604-07077c66f94f9cd22bbea8735";async function f(r=""){const o=new URLSearchParams({key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:m}),{data:t}=await b(`${E}?${o}`);return t}function g(r){return r.map(({webformatURL:o,largeImageURL:t,tags:l,likes:e,views:s,comments:i,downloads:S})=>`
        <li class= "gallery-item" >
            <a class="gallery-item-link" href="${t}">
                <img
                class="item-img"
                src="${o}" 
                data-source="${t}" 
                alt="${l}" />
            </a>
            <ul class="item-stat-list">
                <li class="item-stat">
                    <h2 class="item-stat-name">Likes</h2>
                    <p class="item-stat-amount">${e}</p>
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Views</h2>
                    <p class="item-stat-amount">${s}</p>
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Comments</h2>
                    <p class="item-stat-amount">${i}</p>        
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Downloads</h2>
                    <p class="item-stat-amount">${S}</p>
                </li>
            </ul>
        </li>
    `).join("")}const y=document.querySelector(".form-search"),u=document.querySelector(".gallery-markup"),L=document.querySelector(".loader"),p=document.querySelector(".js-load-more");y.addEventListener("submit",$);let a=1,m=15,n="";const w=new v(".gallery-markup a",{captionData:"alt",captionDelay:250});function $(r){r.preventDefault(),a=1;const o=document.querySelector(".gallery-markup");n=r.currentTarget.elements.title.value.toLowerCase().trim(),n!==""&&(O(),q(),f(n).then(t=>{if(t.hits.length===0){c.error({position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}o.innerHTML=g(t.hits),t.hits.length!==0&&a*m<t.totalHits&&p.classList.replace("load-more-hidden","load-more"),w.refresh(),d()}).catch(t=>{console.log("catch",t),c.error({title:"Error",message:"Failed to fetch images. Please try again later.",timeout:2500,closeOnClick:!0})}).finally(()=>{d(),y.reset()}))}function q(){L.classList.remove("hidden")}function d(){L.classList.add("hidden")}async function M(){a+=1;try{const r=await f(n,a,m);u.insertAdjacentHTML("beforeend",g(r.hits)),w.refresh();const o=u.lastElementChild.getBoundingClientRect();console.log(o),window.scrollBy({top:o.height*2,behavior:"smooth"}),a*m>=r.totalHits&&(p.classList.replace("load-more","load-more-hidden"),c.show({class:"toast",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.log(r.message),c.error({title:"Error",message:"Failed to fetch images. Please try again later.",timeout:2500,closeOnClick:!0})}}p.addEventListener("click",M);function O(){u.innerHTML=""}const h=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{window.scrollY>300?h.classList.remove("hidden"):h.classList.add("hidden")});h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
