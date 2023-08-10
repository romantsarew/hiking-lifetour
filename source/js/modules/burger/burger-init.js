function burgerMenuInit() {
  const header = document.querySelector('.header');
  const navMain = document.querySelector('.header__nav');
  const navButton = document.querySelector('.header__nav-button');
  const body = document.body;

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
          body.classList.add('menu--opened');
        } else {
          navMain.classList.add('header__nav--closed');
          navMain.classList.remove('header__nav--opened');
          body.classList.remove('menu--opened');
        }
      },
      {
        passive: true,
      }
  );

  document.addEventListener('click', function (event) {
    const isClickInsideMenu = header.contains(event.target);

    if (!isClickInsideMenu) {
      navMain.classList.add('header__nav--closed');
      navMain.classList.remove('header__nav--opened');
      body.classList.remove('menu--opened');
    }
  });
}

export {burgerMenuInit};
