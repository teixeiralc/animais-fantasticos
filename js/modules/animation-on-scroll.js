export default class AnimationOnScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHeightHalf = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Gets the distance of each item in relation
  // to the top of the page
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHeightHalf),
      };
    });
  }

  // Checks the distance of each section
  // in relation to the scroll
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('animate');
      } else if (item.element.classList.contains('animate')) {
        item.element.classList.remove('animate');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
