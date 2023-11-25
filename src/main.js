const searchFormElement = document.querySelector('.search-form');

searchFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const searchQuery = formData.get('searchQuery');
});
