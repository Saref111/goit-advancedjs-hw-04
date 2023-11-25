import { fetchImages } from './js/api';
import { renderImagesList } from './js/ui';

const searchFormElement = document.querySelector('.search-form');

searchFormElement.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const searchQuery = formData.get('searchQuery');
  try {
    const resp = await fetchImages({ searchQuery });

    if (!resp.hits.length) {
      throw new Error('Sorry, there are no images matching your search query. Please try again.');
    }

    renderImagesList(resp.hits);
  } catch (error) {
    console.error(error);
  }
});
