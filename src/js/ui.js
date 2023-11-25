import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const loadMoreButtonElement = document.querySelector('.load-more');
const imagesList = document.querySelector('.gallery');

const renderImagesListItem = item => {
  return `
          <li class="gallery__item">
              <a href="${item.largeImageURL}">
                  <img 
                      src="${item.webformatURL}" 
                      alt="${item.tags}" 
                      class="gallery__image" 
                      loading="lazy"    
                  />
              </a>
              <div class="info">
                  <p class="info__item">
                      <b>Likes</b> ${item.likes}
                  </p>
                  <p class="info__item">
                      <b>Views</b> ${item.views}
                  </p>
                  <p class="info__item">
                      <b>Comments</b> ${item.comments}
                  </p>
                  <p class="info__item">
                      <b>Downloads</b> ${item.downloads}
                  </p> 
              </div>
          </li>
      `;
};

export const showLoadMoreButton = cb => {
  if (loadMoreButtonElement.classList.contains('load-more--visible')) return;

  loadMoreButtonElement.addEventListener('click', cb);
  loadMoreButtonElement.classList.add('load-more--visible');
};

export const hideLoadMoreButton = cb => {
  loadMoreButtonElement.removeEventListener('click', cb);
  loadMoreButtonElement.classList.remove('load-more--visible');
};

export const clearList = () => {
  imagesList.innerHTML = '';
};

export const renderImagesList = (list, isPaginated) => {
  if (!isPaginated) {
    clearList();
  }

  const imageElements = list.map(renderImagesListItem).join('');

  imagesList.insertAdjacentHTML('beforeend', imageElements);
};

export const renderError = message => {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
};
