import{a as h,i as d,S as p}from"./assets/vendor-f67ecabd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const y="https://pixabay.com/api/",b="40884603-5ad171707053fe9611639638b",L=({searchQuery:e="",currentPage:t=1,pageSize:s=40})=>h(`${y}?image_type=photo&orientation=horizontal&q=${e}&page=${t}&per_page=${s}&key=${b}&safeSearch=true`);document.querySelector(".load-more");const u=document.querySelector(".gallery");let c;const w=e=>`
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
      `,f=()=>{u.innerHTML=""},E=(e,t)=>{t||f();const s=e.map(w).join("");u.insertAdjacentHTML("beforeend",s)},g=e=>{d.error({title:"Error",message:e,position:"bottomRight"})},S=e=>{d.success({title:"Success",message:e,position:"bottomRight"})},_=e=>{d.info({title:"Info",message:e,position:"bottomRight"})},$=()=>{c?c.refresh():c=new p(".gallery a",{captionsData:"alt",captionDelay:250})},v=()=>{const{height:e}=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})},a={searchQuery:"",currentPage:1,pageSize:40},P=(e,t)=>e.totalHits-t.currentPage*t.pageSize<=0,q=(e,t)=>((a.searchQuery!==e||t.tagName==="FORM")&&(a.searchQuery=e,a.currentPage=1),{...a}),D=()=>{a.currentPage+=1};let l=[];const I=e=>{const t=s=>{window.innerHeight+window.scrollY>=document.body.offsetHeight&&e(s)};l.push(t),window.addEventListener("scroll",t)},m=()=>{l.forEach(e=>{window.removeEventListener("scroll",e)}),l=[]},R=e=>{g(e.message),f()},H=e=>{m(),_("We're sorry, but you've reached the end of search results.")},O=(e,t,s)=>{const i=e.currentPage!==1;E(t.hits,i),$(),I(s),D(),i?v():S(`Hooray! We found ${t.totalHits} images.`)},k=e=>{const t=async s=>{s.preventDefault(),m();const o=new FormData(e).get("searchQuery");if(!o.trim())return g("The query string is empty.");const r=q(o,s.target);try{const{data:n}=await L({...r});if(!n.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again.");if(O(r,n,t),P(n,r)){H(t);return}}catch(n){console.log(n),R(n)}};e.addEventListener("submit",s=>{t(s)})},x=document.querySelector(".search-form");k(x);
//# sourceMappingURL=commonHelpers.js.map
