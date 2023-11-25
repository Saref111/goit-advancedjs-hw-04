import { fetchImages } from './api';
import {
  renderImagesList,
  renderError,
  showLoadMoreButton,
  hideLoadMoreButton,
  clearList,
  renderNotification,
  renderInfo,
  setSimpleLightbox,
  scrollDown,
} from './ui';
import { isListEnd, updateRequestData, incrementPage } from './pagination';
import { enableLoadingOnScroll, disableLoadingOnScroll } from './endlessScroll';

const handleError = error => {
  renderError(error.message);
  clearList();
};

const handleListEnd = handleLoad => {
  // hideLoadMoreButton(handleLoad);
  disableLoadingOnScroll(); // comment this line and uncomment the previous one to use the load more button
  renderInfo("We're sorry, but you've reached the end of search results.");
};

const renderList = (requestData, responseData, handleLoad) => {
  const isPaginated = requestData.currentPage !== 1;
  renderImagesList(responseData.hits, isPaginated);
  setSimpleLightbox();
  // showLoadMoreButton(handleLoad);
  enableLoadingOnScroll(handleLoad); // comment this line and uncomment the previous one to use the load more button
  renderNotification(`Hooray! We found ${responseData.totalHits} images.`);
  incrementPage();
  if (isPaginated) scrollDown();
};

export const setUpForm = searchFormElement => {
  const handleLoad = async event => {
    event.preventDefault();
    // hideLoadMoreButton(handleLoad);
    disableLoadingOnScroll(); // comment this line and uncomment the previous one to use the load more button

    const formData = new FormData(searchFormElement);
    const searchQuery = formData.get('searchQuery');
    const requestData = updateRequestData(searchQuery);

    try {
      const resp = await fetchImages({ ...requestData });

      if (!resp.hits.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      renderList(requestData, resp, handleLoad);

      if (isListEnd(resp, requestData)) {
        handleListEnd(handleLoad);
        return;
      }
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  };

  searchFormElement.addEventListener('submit', event => {
    handleLoad(event);
  });
};
