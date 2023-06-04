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
 
const galleryCardsList = galleryItems.map((el) => createGalleryEl(el))

imageListEl.insertAdjacentHTML("afterbegin", galleryCardsList.join(""))

imageListEl.addEventListener('click', openImage)

function openImage(event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return
    }
const imageLink = event.target.getAttribute('data-source');
const instance = basicLightbox.create
(`<img src="${imageLink}" width="800" height="600">`)

instance.show()
function closeByEsc(event) {
    if (event.key === "Escape") {
        instance.close();
    window.removeEventListener('keydown', closeByEsc);
    }
}
window.addEventListener('keydown', closeByEsc);
};



