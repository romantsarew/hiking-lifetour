function burgerMenuInit() {

  const navMain = document.querySelector('.header__nav');
  const navButton = document.querySelector('.header__nav-button');

  navMain.classList.remove('header__nav--nojs');

  if (navMain.classList.contains('header__nav')) {
    navMain.classList.add('header__nav--closed');
  }

  navButton.addEventListener(
      'click',
      function () {
        if (navMain.classList.contains('header__nav--closed')) {
          navMain.classList.remove('header__nav--closed');
          navMain.classList.add('header__nav--opened');
        } else {
          navMain.classList.add('header__nav--closed');
          navMain.classList.remove('header__nav--opened');
        }
      },
      {
        passive: true,
      }
  );
}

export {burgerMenuInit};
