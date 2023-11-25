(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const i="https://pixabay.com/api/",c="40884603-5ad171707053fe9611639638b",l=({searchQuery:e="",currentPage:s=1,pageSize:n=40})=>fetch(`${i}?image_type=photo&orientation=horizontal&q=${e}&page=${s}&per_page=${n}&key=${c}&safeSearch=true`).then(o=>o.ok?o.json():Promise.reject(new Error(`No response from server on request ${e}`))),f=e=>`
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
      `,m=e=>{const s=document.querySelector(".gallery");s.innerHTML="";const n=e.map(f).join("");s.insertAdjacentHTML("afterbegin",n)},u=document.querySelector(".search-form");u.addEventListener("submit",async e=>{e.preventDefault();const n=new FormData(e.target).get("searchQuery");try{const o=await l({searchQuery:n});if(!o.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again.");m(o.hits)}catch(o){console.error(o)}});
//# sourceMappingURL=commonHelpers.js.map
