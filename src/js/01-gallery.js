// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(SimpleLightbox)

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
`  <a class="gallery__item"
   href="${original}">
   <img class="gallery__image"
   src="${preview}" 
   alt="${description}" />
   </a>
`
).join('');

gallery.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
gallery.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return
    }
})



