export const renderImagesList = list => {
  const imagesList = document.querySelector('.gallery');

  imagesList.innerHTML = '';

  const imageElements = list
    .map(item => {
      const img = document.createElement('img');
      img.src = item.webformatURL;
      img.classList.add('gallery__item');
      return `
            <li class="gallery__item">
                <a href="${item.largeImageURL}">
                    <img src="${item.webformatURL}" alt="${item.tags}" class="gallery__image" />
                </a>
            </li>
        `;
    })
    .join('');

  imagesList.insertAdjacentHTML('afterbegin', imageElements);
};
