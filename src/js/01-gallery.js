import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

const createGallery = galleryItems.map(createGalleryMarkup).join('');
galleryContainer.insertAdjacentHTML('beforeend', createGallery);


function createGalleryMarkup ({ preview, original, description }) {
  return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    `;
};

new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250
    });