const trainersSlider = document.querySelector('.intro__swiper');

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

export {swiperIntroTurnOn};
