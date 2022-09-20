import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divElementContainer = document.querySelector(".gallery");
divElementContainer.insertAdjacentHTML("beforeend", createMarkup());

function createMarkup() {
  const markup = [];
  for (const galleryItem of galleryItems) {
    markup.push(
      `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
        <img
            class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"
         />
        </a>
        </div>`
    );
  }
  return markup.join("");
}
