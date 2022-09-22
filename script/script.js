// Tab Menu

function initTabMenuNav() {
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

initTabMenuNav();

// Accordion List

function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
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
  const internalLinks = document.querySelectorAll(
    '[data-menu="smooth"] a[href^="#"]'
  );

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
  const sections = document.querySelectorAll("[data-anime='scroll']");

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

// Dataset

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
