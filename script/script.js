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

// Smooth Scroll

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initSmoothScroll();

// Animation at scroll

function initAnimationOnScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowHeightHalf = window.innerHeight * 0.6;

    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHeightHalf < 0;
        if (isSectionVisible) {
          section.classList.add("animate");
        }
      });
    }

    scrollAnimation();

    window.addEventListener("scroll", scrollAnimation);
  }
}

initAnimationOnScroll();