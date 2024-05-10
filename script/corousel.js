var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
    breakpoints: {
      992: {
        slidesPerView : 5,
        spaceBetween: 20,
      }
    },
});