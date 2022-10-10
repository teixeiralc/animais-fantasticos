export default class Modal {
  constructor(btnToOpen, btnToClose, container, userEvent) {
    this.btnToOpen = document.querySelector(btnToOpen);
    this.btnToClose = document.querySelector(btnToClose);
    this.container = document.querySelector(container);
    this.userEvent = userEvent;

    // bind this to the callback make reference to the class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle('active');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutside(event) {
    if (event.target === this.container) this.toggleModal();
  }

  addEvent() {
    this.btnToOpen.addEventListener(this.userEvent, this.eventToggleModal);
    this.btnToClose.addEventListener(this.userEvent, this.eventToggleModal);
    this.container.addEventListener(this.userEvent, this.clickOutside);
  }

  init() {
    if (this.btnToOpen && this.btnToClose && this.container) this.addEvent();
    return this;
  }
}
