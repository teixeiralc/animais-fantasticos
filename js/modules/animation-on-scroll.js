export default class AnimationOnScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHeightHalf = window.innerHeight * 0.6;

    this.scrollAnimation = this.scrollAnimation.bind(this);
  }

  scrollAnimation() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowHeightHalf < 0;
      if (isSectionVisible) {
        section.classList.add('animate');
      } else if (section.classList.contains('animate')) {
        section.classList.remove('animate');
      }
    });
  }

  init() {
    this.scrollAnimation();
    window.addEventListener('scroll', this.scrollAnimation);
  }
}
