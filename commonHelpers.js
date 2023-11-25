import{i as l}from"./assets/vendor-32231325.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const f="https://pixabay.com/api/",g="40884603-5ad171707053fe9611639638b",h=({searchQuery:e="",currentPage:t=1,pageSize:s=40})=>fetch(`${f}?image_type=photo&orientation=horizontal&q=${e}&page=${t}&per_page=${s}&key=${g}&safeSearch=true`).then(i=>i.ok?i.json():Promise.reject(new Error(`No response from server on request ${e}`))),c=document.querySelector(".load-more"),u=document.querySelector(".gallery"),p=e=>`
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
      `,y=e=>{c.classList.contains("load-more--visible")||(c.addEventListener("click",e),c.classList.add("load-more--visible"))},d=e=>{c.removeEventListener("click",e),c.classList.remove("load-more--visible")},m=()=>{u.innerHTML=""},L=(e,t)=>{t||m();const s=e.map(p).join("");u.insertAdjacentHTML("beforeend",s)},b=e=>{l.error({title:"Error",message:e,position:"bottomRight"})},v=e=>{l.success({title:"Success",message:e,position:"bottomRight"})},E=e=>{l.info({title:"Info",message:e,position:"bottomRight"})},a={searchQuery:"",currentPage:1,pageSize:40},_=(e,t)=>e.totalHits-t.currentPage*t.pageSize<=0,$=e=>(a.searchQuery!==e&&(a.searchQuery=e,a.currentPage=1),{...a}),w=()=>{a.currentPage+=1},P=e=>{b(e.message),m()},S=e=>{d(e),E("We're sorry, but you've reached the end of search results.")},q=(e,t,s)=>{L(t.hits,e.currentPage!==1),y(s),v(`Hooray! We found ${t.totalHits} images.`),w()},I=e=>{const t=async s=>{s.preventDefault(),d(t);const r=new FormData(e).get("searchQuery"),o=$(r);try{const n=await h({...o});if(!n.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again.");if(q(o,n,t),_(n,o)){S(t);return}}catch(n){console.log(n),P(n)}};e.addEventListener("submit",s=>{t(s)})},R=document.querySelector(".search-form");I(R);
//# sourceMappingURL=commonHelpers.js.map
