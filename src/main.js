import { fetchImages } from './js/api';
import { renderImagesList, renderError } from './js/ui';

const searchFormElement = document.querySelector('.search-form');
const paginationData = {
  q: '',
  currentPage: 1,
  pageSize: 40,
};

searchFormElement.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const searchQuery = formData.get('searchQuery');
  try {
    if (paginationData.q !== searchQuery) {
        paginationData.q = searchQuery;
        paginationData.currentPage = 1;
    }

    const resp = await fetchImages({ searchQuery, ...paginationData });
    paginationData.currentPage += 1;

    if (!resp.hits.length) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    renderImagesList(resp.hits);
  } catch (error) {
    renderError(error.message);
  }
});
