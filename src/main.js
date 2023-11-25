import { fetchImages } from './js/api';
import { renderImagesList, renderError, showLoadMoreButton, hideLoadMoreButton, clearList } from './js/ui';

const searchFormElement = document.querySelector('.search-form');
const requestData = {
  q: '',
  currentPage: 1,
  pageSize: 40,
};
const handleLoad = async event => {
  event.preventDefault();
  hideLoadMoreButton(handleLoad);

  const formData = new FormData(searchFormElement);
  const searchQuery = formData.get('searchQuery');

  if (requestData.searchQuery !== searchQuery) {
    requestData.searchQuery = searchQuery;
    requestData.currentPage = 1;
  }

  try {
    const resp = await fetchImages({ ...requestData });
    
    if (!resp.hits.length) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    renderImagesList(resp.hits, requestData.currentPage !== 1);
    showLoadMoreButton(handleLoad);
    requestData.currentPage += 1;
  } catch (error) {
    renderError(error.message);
    clearList();
  }
};

searchFormElement.addEventListener('submit', handleLoad);
