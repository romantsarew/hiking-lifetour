const trainersSlider = document.querySelector('.intro__swiper');
const toursSlider = document.querySelector('.tours__slider');

function swiperIntroTurnOn() {

  if (trainersSlider) {
    // eslint-disable-next-line no-undef, no-unused-vars
    const swiper = new Swiper(trainersSlider, {
      initialSlide: 0,
      cssMode: true,
      direction: 'horizontal',
      loop: true,

      pagination: {
        el: '.intro__slider-pagination',
        clickable: true,
      },
    });
  }
}

function swiperToursTurnOn() {

  if (toursSlider) {
    // eslint-disable-next-line no-undef, no-unused-vars
    const swiper = new Swiper(toursSlider, {
      initialSlide: 0,
      cssMode: true,
      direction: 'horizontal',
      loop: false,

      breakpoints: {
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
          initialSlide: 0,
        },
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          initialSlide: 0,
        },
      },

      navigation: {
        nextEl: '.tours__button--next',
        prevEl: '.tours__button--prev',
      },

    });
  }
}

export {swiperIntroTurnOn, swiperToursTurnOn};
