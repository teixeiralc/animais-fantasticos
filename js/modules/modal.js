export default function initModal() {
  const btnToOpen = document.querySelector("[data-modal='open']");
  const btnToClose = document.querySelector("[data-modal='close']");
  const container = document.querySelector("[data-modal='container']");

  if (btnToOpen && btnToClose && container) {
    function toggleModal(event) {
      event.preventDefault();
      container.classList.toggle("active");
    }

    function clickOutside(event) {
      if (event.target === this) toggleModal(event);
    }

    btnToOpen.addEventListener("click", toggleModal);
    btnToClose.addEventListener("click", toggleModal);
    container.addEventListener("click", clickOutside);
  }
}
