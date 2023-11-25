import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'izitoast/dist/css/iziToast.min.css';
import "simplelightbox/dist/simple-lightbox.min.css";

const loadMoreButtonElement = document.querySelector('.load-more');
const imagesList = document.querySelector('.gallery');
let lightbox;

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
    position: 'bottomRight',
  });
};

export const renderNotification = message => {
  iziToast.success({
    title: 'Success',
    message,
    position: 'bottomRight',
  });
};

export const renderInfo = message => {
  iziToast.info({
    title: 'Info',
    message,
    position: 'bottomRight',
  });
};

export const setSimpleLightbox = () => {
    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    } else {
        lightbox.refresh();
    }
};
