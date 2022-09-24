export default function initAnimationOnScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowHeightHalf = window.innerHeight * 0.6;

    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHeightHalf < 0;
        if (isSectionVisible) {
          section.classList.add("animate");
        } else if (section.classList.contains("animate")) {
          section.classList.remove("animate");
        }
      });
    }

    scrollAnimation();

    window.addEventListener("scroll", scrollAnimation);
  }
}