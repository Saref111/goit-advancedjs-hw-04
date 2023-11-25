import{i as f}from"./assets/vendor-32231325.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const g="https://pixabay.com/api/",p="40884603-5ad171707053fe9611639638b",h=({searchQuery:e="",currentPage:s=1,pageSize:n=40})=>fetch(`${g}?image_type=photo&orientation=horizontal&q=${e}&page=${s}&per_page=${n}&key=${p}&safeSearch=true`).then(o=>o.ok?o.json():Promise.reject(new Error(`No response from server on request ${e}`))),i=document.querySelector(".load-more"),u=document.querySelector(".gallery"),y=e=>`
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
      `,L=e=>{i.classList.contains("load-more--visible")||(i.addEventListener("click",e),i.classList.add("load-more--visible"))},b=e=>{i.removeEventListener("click",e),i.classList.remove("load-more--visible")},d=()=>{u.innerHTML=""},_=(e,s)=>{s||d();const n=e.map(y).join("");u.insertAdjacentHTML("beforeend",n)},v=e=>{f.error({title:"Error",message:e,position:"topRight"})},m=document.querySelector(".search-form"),a={q:"",currentPage:1,pageSize:40},l=async e=>{e.preventDefault(),b(l);const n=new FormData(m).get("searchQuery");a.searchQuery!==n&&(a.searchQuery=n,a.currentPage=1);try{const o=await h({...a});if(!o.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again.");_(o.hits,a.currentPage!==1),L(l),a.currentPage+=1}catch(o){v(o.message),d()}};m.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers.js.map
