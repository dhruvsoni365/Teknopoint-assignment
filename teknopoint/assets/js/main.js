
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween:60,
  slidesPerGroup: 1,
  //   loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});