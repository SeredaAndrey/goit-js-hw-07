import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// получение ссылки на контейнер куда будет добавлятся разметка
const divElementContainer = document.querySelector(".gallery");

// добавление разметки на страницу
divElementContainer.insertAdjacentHTML("beforeend", createMarkup());

divElementContainer.addEventListener("click", foo);

function foo(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(evt.target);
  basicLightbox
    .create(
      `
  		<img width="1400" height="900" src="${evt.target("#data-source")}">
  	`
    )
    .show();
}

// document.querySelector("button.image").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`
//     )
//     .show();
// };

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
