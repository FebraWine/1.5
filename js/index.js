const element = document.querySelector(".swiper-btn-el");
const text = document.querySelector(".swiper-btn-text");
const icon = document.querySelector(".swiper-btn-img");
const elementsAll = document.querySelectorAll(".swiper-slide");
let elementsActive = 0;

if (window.innerWidth < 498) {
  elementsActive = 9999;
} else if (window.innerWidth > 767 && window.innerWidth < 1002) {
  elementsActive = 6;
  swiper.destroy();
} else {
  elementsActive = 8;
  swiper.destroy();
}

elementsToShow(elementsActive);

function elementsToShow(i) {
  elementsAll.forEach((el) => {
    if (i > 0) {
      el.classList.add("swiper-slide--show");
    }
    i--;
  });
}

element.addEventListener("click", () => {
  if (text.textContent === "Показать всё") {
    text.textContent = "Скрыть";
    icon.classList.add("swiper-btn-img--transform");
    elementsAll.forEach((el) => {
      el.classList.add("swiper-slide--show");
    });
  } else {
    text.textContent = "Показать всё";
    icon.classList.remove("swiper-btn-img--transform");
    elementsToHidden();
  }
});

function elementsToHidden() {
  let remove = 0;
  elementsAll.forEach((el) => {
    if (remove >= elementsActive) {
      el.classList.remove("swiper-slide--show");
    }
    remove++;
  });
}
