if (window.innerWidth > 498) {
    swiper.destroy()
}  
const element = document.querySelector('.swiper_btn-el');
const elements = document.querySelector('.swiper');
const text = document.querySelector('.swiper_btn-text');
const icon = document.querySelector('.swiper_btn-img');


element.addEventListener('click', () => {
  if (text.textContent === 'Показать всё') {
    text.textContent = 'Скрыть';
    elements.classList.remove("swiper--notAll");
    icon.classList.add('swiper_btn-img--transform');

  } else {
    text.textContent = 'Показать всё';
    elements.classList.add("swiper--notAll");
    icon.classList.remove('swiper_btn-img--transform')
  }
});

