export default function initTabMenuNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const activeClass = "active";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(i) {
      // i = index
      tabContent.forEach((content) => {
        content.classList.remove(activeClass, tabContent[i].dataset.anime);
      });

      const animeClass = tabContent[i].dataset.anime;
      tabContent[i].classList.add(activeClass, animeClass);
    }

    tabMenu.forEach((item, i) => {
      item.addEventListener("click", () => {
        activeTab(i);
      });
    });
  }
}