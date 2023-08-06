const introSlider = document.querySelector('.intro__swiper');
const toursSlider = document.querySelector('.tours__slider');
const trainersSlider = document.querySelector('.trainers__slider');
const opinionsSlider = document.querySelector('.opinions__slider');
const advantagesSlider = document.querySelector('.advantages__slider');
const fotoSlider = document.querySelector('.foto__slider');

function swiperIntroTurnOn() {

  if (introSlider) {
    // eslint-disable-next-line no-undef, no-unused-vars
    const swiper = new Swiper(introSlider, {
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

function swiperTrainersTurnOn() {

  if (trainersSlider) {
    // eslint-disable-next-line no-undef, no-unused-vars
    const swiper = new Swiper(trainersSlider, {
      initialSlide: 0,
      cssMode: true,
      direction: 'horizontal',
      loop: false,

      breakpoints: {
        // when window width is >= 1200px
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
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
        nextEl: '.trainers__button--next',
        prevEl: '.trainers__button--prev',
      },

    });
  }
}

function swiperOpinionsTurnOn() {
  if (opinionsSlider) {
    // eslint-disable-next-line no-undef, no-unused-vars
    const swiper = new Swiper(opinionsSlider, {
      initialSlide: 0,
      cssMode: true,
      direction: 'horizontal',
      loop: false,

      breakpoints: {
        // when window width is >= 1200px
        1200: {
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
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
        nextEl: '.opinions__button--next',
        prevEl: '.opinions__button--prev',
      },

    });
  }
}

function swiperAdvantagesTurnOn() {
  const width = window.innerWidth;
  if (width > 1200) {
    // eslint-disable-next-line no-undef, no-unused-vars
    const swiper = new Swiper(advantagesSlider, {
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 4,
      spaceBetween: 30,
      loop: true,

      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
      },
    });
  }
}

function swiperFotoTurnOn() {
  if (fotoSlider) {
    // eslint-disable-next-line no-undef, no-unused-vars
    const swiper = new Swiper(fotoSlider, {
      loop: false,
      spaceBetween: 5,
      slidesPerView: 'auto',

      breakpoints: {
        // when window width is >= 1200px
        1200: {
          spaceBetween: 5,
        },
        // when window width is >= 768px
        768: {
          spaceBetween: 5,
        },
        // when window width is >= 320px
        320: {
          spaceBetween: 3,
        },
      },

      navigation: {
        nextEl: '.foto__button--next',
        prevEl: '.foto__button--prev',
      },

    });
  }
}


export {swiperIntroTurnOn, swiperToursTurnOn, swiperTrainersTurnOn, swiperOpinionsTurnOn, swiperAdvantagesTurnOn, swiperFotoTurnOn};
