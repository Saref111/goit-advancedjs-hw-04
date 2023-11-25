import{i as l}from"./assets/vendor-32231325.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const f="https://pixabay.com/api/",g="40884603-5ad171707053fe9611639638b",p=({searchQuery:e="",currentPage:t=1,pageSize:s=40})=>fetch(`${f}?image_type=photo&orientation=horizontal&q=${e}&page=${t}&per_page=${s}&key=${g}&safeSearch=true`).then(i=>i.ok?i.json():Promise.reject(new Error(`No response from server on request ${e}`))),a=document.querySelector(".load-more"),d=document.querySelector(".gallery"),h=e=>`
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
      `,y=e=>{a.classList.contains("load-more--visible")||(a.addEventListener("click",e),a.classList.add("load-more--visible"))},u=e=>{a.removeEventListener("click",e),a.classList.remove("load-more--visible")},m=()=>{d.innerHTML=""},L=(e,t)=>{t||m();const s=e.map(h).join("");d.insertAdjacentHTML("beforeend",s)},b=e=>{l.error({title:"Error",message:e,position:"bottomRight"})},v=e=>{l.success({title:"Success",message:e,position:"bottomRight"})},_=e=>{l.info({title:"Info",message:e,position:"bottomRight"})},c={q:"",currentPage:1,pageSize:40},E=(e,t)=>e.totalHits-t.currentPage*t.pageSize<=0,$=e=>(c.q!==e&&(c.q=e,c.currentPage=1),c),w=e=>{b(e.message),m()},q=e=>{u(e),_("We're sorry, but you've reached the end of search results.")},P=(e,t,s)=>{L(t.hits,e.currentPage!==1),y(s),v(`Hooray! We found ${t.totalHits} images.`),e.currentPage+=1},S=e=>{const t=async s=>{s.preventDefault(),u(t);const o=new FormData(e).get("searchQuery"),r=$(o);try{const n=await p({...r});if(!n.hits.length)throw new Error("Sorry, there are no images matching your search query. Please try again.");if(P(r,n,t),E(n,r)){q(t);return}}catch(n){console.log(n),w(n)}};e.addEventListener("submit",s=>{t(s)})},I=document.querySelector(".search-form");S(I);
//# sourceMappingURL=commonHelpers.js.map
