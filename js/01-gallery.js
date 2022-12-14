import { galleryItems } from "./gallery-items.js";

const divElementContainer = document.querySelector(".gallery"); // получение ссылки на контейнер куда будет добавлятся разметка

// ЧЕРЕЗ КЛАСС

let instance = "";

class Gallery {
  constructor(galleryItems, divElementContainer) {
    // конструктор метода класса
    this.galleryItems = galleryItems;
    this.divElementContainer = divElementContainer;
  }
  createMarkup(galleryItems) {
    // метод класса который создает разметку
    console.log(galleryItems);
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
  onEscPressDown(event) {
    // метод класса по обработке события нажатия клавиши ЕСК
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", this.onEscPressDown);
    }
  }
  foo(event) {
    // метод класса создающий и добавляющий разметку открывающегося окна для картинки
    console.log("start picture listener");
    event.preventDefault(); // удаление перехода по умолчанию по ссылке
    if (!event.target.dataset.source) {
      return;
    }
    instance = basicLightbox.create(
      `
  		<img width="1400" height="900" src="${event.target.dataset.source}">
  	`
    );
    instance.show();
  }
  addListeners() {
    // метод класса добавляющий слушители событий
    divElementContainer.addEventListener("click", this.foo);
    document.addEventListener("keydown", this.onEscPressDown);
  }
  init() {
    // инициализирующий метод класса
    divElementContainer.insertAdjacentHTML(
      "beforeend",
      this.createMarkup(this.galleryItems)
    );
    this.addListeners();
  }
}

new Gallery(galleryItems, divElementContainer).init(); // создание новой галлереи с передачей ей ссылки на контейнер и объекта галлереи

// ЧЕРЕЗ ФУНКЦИИ

// divElementContainer.insertAdjacentHTML("beforeend", createMarkup()); // добавление разметки на страницу

// divElementContainer.addEventListener("click", foo); // добавление слушателя событий на клик по картинке с запуском функции foo()

// let instance = "";

// function foo(evt) {
//   evt.preventDefault(); // удаление перехода по умолчанию по ссылке
//   document.addEventListener("keydown", onEscPressDown);
//   if (!evt.target.dataset.source) {
//     return;
//   }
//   instance = basicLightbox.create(
//     `
//   		<img width="1400" height="900" src="${evt.target.dataset.source}">
//   	`
//   );
//   instance.show();
// }

// function onEscPressDown(event) {
//   if (event.code === "Escape") {
//     instance.close();
//     document.removeEventListener("keydown", onEscPressDown);
//   }
// }

// // создание разметки
// function createMarkup() {
//   const markup = [];
//   for (const galleryItem of galleryItems) {
//     markup.push(
//       `<div class="gallery__item">
//         <a class="gallery__link" href="${galleryItem.original}">
//         <img
//             class="gallery__image"
//             src="${galleryItem.preview}"
//             data-source="${galleryItem.original}"
//             alt="${galleryItem.description}"
//          />
//         </a>
//         </div>`
//     );
//   }
//   return markup.join("");
// }
