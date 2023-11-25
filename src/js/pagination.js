const requestData = {
  searchQuery: '',
  currentPage: 1,
  pageSize: 40,
};

export const isListEnd = (responseData, _requestData) => {
  return (
    responseData.totalHits - _requestData.currentPage * _requestData.pageSize <=
    0
  );
};

export const updateRequestData = (searchQuery, targetElement) => {
  if (requestData.searchQuery !== searchQuery || targetElement.tagName === 'FORM') {
    requestData.searchQuery = searchQuery;
    requestData.currentPage = 1;
  }
  return { ...requestData };
};

export const incrementPage = () => {
  requestData.currentPage += 1;
};
