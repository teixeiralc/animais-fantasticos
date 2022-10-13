import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, userEvents) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';

    // 'touchstart' and 'click' are set as default 
    // if no userEvents are given
    if (userEvents === undefined) this.userEvents = ['touchstart', 'click'];
    else this.userEvents = userEvents;

    this.activateDropdownMenu = this.activateDropdownMenu.bind(this);
  }

  activateDropdownMenu(event) {
    const element = event.currentTarget;
    event.preventDefault();
    element.classList.add(this.activeClass);
    outsideClick(element, this.userEvents, () =>
      element.classList.remove('active')
    );
  }

  addEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activateDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addEvent();
    return this;
  }
}
