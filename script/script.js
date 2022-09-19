const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("active");

  function activeTab(i) {
    // i = index
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });

    tabContent[i].classList.add("active");
  }

  tabMenu.forEach((item, i) => {
    item.addEventListener("click", () => {
      activeTab(i);
    });
  });
}
