import outsideClick from './outside-click.js';

export default function initMobileMenu() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['click', 'touchstart'];

  function openMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    menuButton.classList.add('active');
    menuList.classList.add('active');
    outsideClick(menuList, events, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  if (menuButton) {
    events.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, openMenu)
    );
  }
}
