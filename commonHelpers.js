import{i as u,S as g}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const h="https://pixabay.com/api/",p="40884603-5ad171707053fe9611639638b",y=({searchQuery:e="",currentPage:t=1,pageSize:s=40})=>fetch(`${h}?image_type=photo&orientation=horizontal&q=${e}&page=${t}&per_page=${s}&key=${p}&safeSearch=true`).then(i=>i.ok?i.json():Promise.reject(new Error(`No response from server on request ${e}`))),c=document.querySelector(".load-more"),d=document.querySelector(".gallery");let l;const L=e=>`
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
      `,b=e=>{c.classList.contains("load-more--visible")||(c.addEventListener("click",e),c.classList.add("load-more--visible"))},m=e=>{c.removeEventListener("click",e),c.classList.remove("load-more--visible")},f=()=>{d.innerHTML=""},v=(e,t)=>{t||f();const s=e.map(L).join("");d.insertAdjacentHTML("beforeend",s)},E=e=>{u.error({title:"Error",message:e,position:"bottomRight"})},_=e=>{u.success({title:"Success",message:e,position:"bottomRight"})},$=e=>{u.info({title:"Info",message:e,position:"bottomRight"})},w=()=>{l?l.refresh():l=new g(".gallery a",{captionsData:"alt",captionDelay:250})},a={searchQuery:"",currentPage:1,pageSize:40},S=(e,t)=>e.totalHits-t.currentPage*t.pageSize<=0,P=e=>(a.searchQuery!==e&&(a.searchQuery=e,a.currentPage=1),{...a}),q=()=>{a.currentPage+=1},I=e=>{E(e.message),f()},D=e=>{m(e),$("We're sorry, but you've reached the end of search results.")},R=(e,t,s)=>{v(t.hits,e.currentPage!==1),w(),b(s),_(`Hooray! We found ${t.totalHits} images.`),q()},k=e=>{const t=async s=>{s.preventDefault(),m(t);const r=new FormData(e).get("searchQuery"),o=P(r);try{const n=await y({...o});if(!n.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again.");if(R(o,n,t),S(n,o)){D(t);return}}catch(n){console.log(n),I(n)}};e.addEventListener("submit",s=>{t(s)})},M=document.querySelector(".search-form");k(M);
//# sourceMappingURL=commonHelpers.js.map
