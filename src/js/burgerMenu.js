document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuBody = document.querySelector('.mobile-menu__body');
  const mobileMenuList = mobileMenuBody.querySelector('.mobile-menu__list');
  const closeMenuBtn = document.querySelector('.mobile-menu-close');
  const { body } = document;
  function openMenu() {
    mobileMenu.classList.add('active');
    body.classList.add('lock');
    mobileMenuBody.classList.add('active');
    mobileMenuList.querySelectorAll('a').forEach((link) => {
      link.classList.add('mobile-menu__link');
    });
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    body.classList.remove('lock');
    mobileMenuBody.classList.remove('active');
    mobileMenuList.querySelectorAll('a').forEach((link) => {
      link.classList.remove('mobile-menu__link');
    });
  }
  if (openMenuBtn) {
    openMenuBtn.addEventListener('click', () => {
      openMenu();
    });

    mobileMenu.addEventListener('click', (e) => {
      const { target } = e;

      if (target === mobileMenu || target === closeMenuBtn || target.classList.contains('mobile-menu__link')) {
        closeMenu();
      }
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      closeMenu();
    }
  });
});
