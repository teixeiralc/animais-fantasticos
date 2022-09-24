import outsideClick from "./outside-click.js";

export default function initMobileMenu() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      menuButton.classList.add("active");
      menuList.classList.add("active");
      outsideClick(menuList, events, () => {
        menuButton.classList.remove("active");
        menuList.classList.remove("active");
      });
    }
    events.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, openMenu)
    );
  }
}
