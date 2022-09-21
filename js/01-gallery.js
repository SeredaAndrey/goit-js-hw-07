import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// получение ссылки на контейнер куда будет добавлятся разметка
const divElementContainer = document.querySelector(".gallery");

// добавление разметки на страницу
divElementContainer.insertAdjacentHTML("beforeend", createMarkup());

divElementContainer.addEventListener("click", foo);

function foo(event) {
  event.preventDefault();
  console.log(event.target);
  if (event.target.classList !== ".gallery__item") {
    return;
  }
  const link = event.original;
  console.log(event);
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
