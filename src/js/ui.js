import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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

export const renderImagesList = list => {
  const imagesList = document.querySelector('.gallery');

  imagesList.innerHTML = '';

  const imageElements = list.map(renderImagesListItem).join('');

  imagesList.insertAdjacentHTML('afterbegin', imageElements);
};

export const renderError = function(message) {
    iziToast.error({
        title: 'Error',
        message,
        position: 'topRight',
    });
}
