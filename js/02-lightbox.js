import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageListEl = document.querySelector('.gallery');

const createGalleryEl = ({
    preview,
    description,
    original,
 }) =>
 `<li class="gallery__item">
 <a class="gallery__link" href="${original}">
 <img 
 class="gallery__image"
 src="${preview}" 
  alt="${description}">
 </a>
 </li>`;

const galleryCardsList = galleryItems.map((el) => createGalleryEl(el))
    
imageListEl.insertAdjacentHTML("afterbegin", galleryCardsList.join(""))

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    aptionPosition: "bottom",
});
 