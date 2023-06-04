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
 data-source="${original}"
 alt="${description}">
 </a>
 </li>`;
 
console.log(createGalleryEl)

const galleryCardsList = galleryItems.map((el) => createGalleryEl(el))
    
console.log(...galleryCardsList)
imageListEl.insertAdjacentHTML("afterbegin", galleryCardsList.join(""))
