import{i as d,S as g}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const h="https://pixabay.com/api/",p="40884603-5ad171707053fe9611639638b",y=({searchQuery:e="",currentPage:t=1,pageSize:s=40})=>fetch(`${h}?image_type=photo&orientation=horizontal&q=${e}&page=${t}&per_page=${s}&key=${p}&safeSearch=true`).then(i=>i.ok?i.json():Promise.reject(new Error(`No response from server on request ${e}`))),c=document.querySelector(".load-more"),u=document.querySelector(".gallery");let l;const L=e=>`
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
      `,b=e=>{c.classList.contains("load-more--visible")||(c.addEventListener("click",e),c.classList.add("load-more--visible"))},m=e=>{c.removeEventListener("click",e),c.classList.remove("load-more--visible")},f=()=>{u.innerHTML=""},v=(e,t)=>{t||f();const s=e.map(L).join("");u.insertAdjacentHTML("beforeend",s)},w=e=>{d.error({title:"Error",message:e,position:"bottomRight"})},E=e=>{d.success({title:"Success",message:e,position:"bottomRight"})},_=e=>{d.info({title:"Info",message:e,position:"bottomRight"})},$=()=>{l?l.refresh():l=new g(".gallery a",{captionsData:"alt",captionDelay:250})},S=()=>{const{height:e}=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})},a={searchQuery:"",currentPage:1,pageSize:40},P=(e,t)=>e.totalHits-t.currentPage*t.pageSize<=0,q=e=>(a.searchQuery!==e&&(a.searchQuery=e,a.currentPage=1),{...a}),D=()=>{a.currentPage+=1},I=e=>{w(e.message),f()},R=e=>{m(e),_("We're sorry, but you've reached the end of search results.")},k=(e,t,s)=>{const i=e.currentPage!==1;v(t.hits,i),$(),b(s),E(`Hooray! We found ${t.totalHits} images.`),D(),i&&S()},B=e=>{const t=async s=>{s.preventDefault(),m(t);const o=new FormData(e).get("searchQuery"),r=q(o);try{const n=await y({...r});if(!n.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again.");if(k(r,n,t),P(n,r)){R(t);return}}catch(n){console.log(n),I(n)}};e.addEventListener("submit",s=>{t(s)})},H=document.querySelector(".search-form");B(H);
//# sourceMappingURL=commonHelpers.js.map
