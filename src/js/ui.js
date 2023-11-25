export const renderImagesList = (list) => {
    const imagesList = document.querySelector('.gallery');
    
    imagesList.innerHTML = '';
    
    const imageElements = list.map((item) => {
        const img = document.createElement('img');
        img.src = item.webformatURL;
        img.classList.add('images-list__item');
        return img;
    });

    imagesList.append(...imageElements);
}
