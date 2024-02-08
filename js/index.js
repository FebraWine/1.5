if (window.innerWidth > 498) {
    swiper.destroy()
}  
const element = document.querySelector('.swiper-btn-el');
const elements = document.querySelector('.swiper');
const text = document.querySelector('.swiper-btn-text');
const icon = document.querySelector('.swiper-btn-img');


element.addEventListener('click', () => {
  if (text.textContent === 'Показать всё') {
    text.textContent = 'Скрыть';
    elements.classList.remove("swiper--notAll");
    icon.classList.add('swiper-btn-img--transform');

  } else {
    text.textContent = 'Показать всё';
    elements.classList.add("swiper--notAll");
    icon.classList.remove('swiper-btn-img--transform')
  }
});

