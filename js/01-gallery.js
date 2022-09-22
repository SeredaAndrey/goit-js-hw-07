import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const divElementContainer = document.querySelector(".gallery"); // получение ссылки на контейнер куда будет добавлятся разметка

divElementContainer.insertAdjacentHTML("beforeend", createMarkup()); // добавление разметки на страницу

divElementContainer.addEventListener("click", foo); // добавление слушателя событий на клик по картинке с запуском функции foo()

function foo(evt) {
  evt.preventDefault(); // удаление перехода по умолчанию по ссылке
  if (!evt.target.dataset.source) {
    return;
  }
  basicLightbox
    .create(
      `
  		<img width="1400" height="900" src="${evt.target.dataset.source}">
  	`
    )
    .show();
}

// создание разметки
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
