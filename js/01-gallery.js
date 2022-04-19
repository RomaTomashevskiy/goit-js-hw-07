import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);





const galleryBox = document.querySelector('.gallery');

galleryBox.insertAdjacentHTML('beforeend', makeMarkurGallery(galleryItems));


galleryBox.addEventListener('click', onOpenModal);





 function makeMarkurGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    </div>`
    }).join('')
};


function onOpenModal(e) {
    e.preventDefault()

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    const resultOpenModal = e.target.dataset.source
    
    const instance = basicLightbox.create(`
        <img src="${resultOpenModal}" width="800" height="600">
    `)

    instance.show()

};




