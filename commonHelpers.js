import{i as a}from"./assets/vendor-32231325.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const c="https://pixabay.com/api/",l="40884603-5ad171707053fe9611639638b",f=({searchQuery:e="",currentPage:s=1,pageSize:n=40})=>fetch(`${c}?image_type=photo&orientation=horizontal&q=${e}&page=${s}&per_page=${n}&key=${l}&safeSearch=true`).then(o=>o.ok?o.json():Promise.reject(new Error(`No response from server on request ${e}`))),m=e=>`
          <li class="gallery__item">
              <a href="${e.largeImageURL}">
                  <img 
                      src="${e.webformatURL}" 
                      alt="${e.tags}" 
                      class="gallery__image" 
                      loading="lazy"    
                  />
              </a>
              <div class="info">
                  <p class="info__item">
                      <b>Likes</b> ${e.likes}
                  </p>
                  <p class="info__item">
                      <b>Views</b> ${e.views}
                  </p>
                  <p class="info__item">
                      <b>Comments</b> ${e.comments}
                  </p>
                  <p class="info__item">
                      <b>Downloads</b> ${e.downloads}
                  </p> 
              </div>
          </li>
      `,u=e=>{const s=document.querySelector(".gallery");s.innerHTML="";const n=e.map(m).join("");s.insertAdjacentHTML("afterbegin",n)},d=function(e){a.error({title:"Error",message:e,position:"topRight"})},g=document.querySelector(".search-form");g.addEventListener("submit",async e=>{e.preventDefault();const n=new FormData(e.target).get("searchQuery");try{const o=await f({searchQuery:n});if(!o.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again.");u(o.hits)}catch(o){d(o.message)}});
//# sourceMappingURL=commonHelpers.js.map
