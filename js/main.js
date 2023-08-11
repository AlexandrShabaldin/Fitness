var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".explore-button-next",
      prevEl: ".explore-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      820: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    }
  });

let menuBtn = document.querySelector('.header__nav-btn');
let menu = document.querySelector('.nav');
const body = document.body;
menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('noscroll')
})