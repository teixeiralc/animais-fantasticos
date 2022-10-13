import outsideClick from './outside-click.js';

export default class MobileMenu {
  constructor(menuButton, menuList, userEvents) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    // 'touchstart' and 'click' are set as default
    // if no userEvents are given
    if (userEvents === undefined) this.userEvents = ['touchstart', 'click'];
    else this.userEvents = userEvents;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.userEvents, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addEvent() {
    this.userEvents.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) this.addEvent();
    return this;
  }
}
