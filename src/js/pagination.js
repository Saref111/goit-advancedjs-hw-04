const requestData = {
  q: '',
  currentPage: 1,
  pageSize: 40,
};

export const isListEnd = (responseData, requestData) => {
  return responseData.totalHits - requestData.currentPage * requestData.pageSize <= 0;
}

export const updateRequestData = searchQuery => {
  if (requestData.q !== searchQuery) {
    requestData.q = searchQuery;
    requestData.currentPage = 1;
  }
  return requestData;
}
