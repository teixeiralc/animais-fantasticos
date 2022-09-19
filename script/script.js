// Tab Menu

function initTabMenuNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const activeClass = "active";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(i) {
      // i = index
      tabContent.forEach((content) => {
        content.classList.remove(activeClass);
      });

      tabContent[i].classList.add(activeClass);
    }

    tabMenu.forEach((item, i) => {
      item.addEventListener("click", () => {
        activeTab(i);
      });
    });
  }
}

initTabMenuNav();

// Accordion List

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordionList dt");
  const activeClass = "active";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();
