import debounce from './debounce.js';

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.activeClass = 'active';
    this.changeEvent = new Event('changeEvent');
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
  }

  bindEvents() {
    // bind this to all the callback methods
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 100);
  }

  // CSS TRANSITION

  transition(active) {
    this.slide.style.transition = active ? 'transform .3s' : '';
  }

  // SLIDES EVENTS

  moveSlide(distX) {
    // updates the calculated distance into the css property
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    // calculates the movement of the slide
    this.dist.movement = (this.dist.startX - clientX) * 1.4;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(e) {
    // activates the onMove method based on
    // the event type that started the function
    let movetype;

    if (e.type === 'mousedown') {
      e.preventDefault();
      this.dist.startX = e.clientX;
      movetype = 'mousemove';
    } else {
      this.dist.startX = e.changedTouches[0].clientX;
      movetype = 'touchmove';
    }

    this.wrapper.addEventListener(movetype, this.onMove);
    this.transition(false);
  }

  onMove(e) {
    // activates the moveSlide method with the finalPosition
    // argument calculated in updatePosition
    const pointerPosition =
      e.type === 'mousemove' ? e.clientX : e.changedTouches[0].clientX;

    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(e) {
    // removes the onMove EventListener for each event type
    const movetype = e.type === 'mouseup' ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    // changes the slide according to the user's
    // choice to go to the prev or next one
    if (this.dist.movement > 150 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -150 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.cur);
    }
  }

  addEvents() {
    // start
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);

    // end
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  // SLIDE NAV

  activePrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
  }

  activeNextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next);
  }

  // SLIDES CONFIG

  slidePosition(slide) {
    // calculates the margin of every slide
    // and returns the position value for the slide
    // to be perfectly centered
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    // creates an array with all the slides 'li'
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        position,
        element,
      };
    });
  }

  slidesIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      // if index doesn't exists (i.e. index === 0), prev: undefined
      cur: index,
      next: index !== last ? index + 1 : undefined,
      // if index is equal to the last index of the array, next: undefined
    };
  }

  changeSlide(index) {
    // changes the centered slide based on a given index
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();

    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeActiveClass() {
    // adds an active class to the centered slide
    this.slideArray.forEach((slide) =>
      slide.element.classList.remove(this.activeClass)
    );
    this.slideArray[this.index.cur].element.classList.add(this.activeClass);
  }

  onResize() {
    // repositionizes the middle slide at the center
    // of the resized screen
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.cur);
    }, 500);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  init() {
    this.slidesConfig();
    this.transition(true);
    this.bindEvents();
    this.addEvents();
    this.changeSlide(0);
    this.addResizeEvent();
    return this;
  }
}

// Nav buttons for the slide
export default class SlideNav extends Slide {
  constructor(...args) {
    super(...args);
    this.bindControlEvents();
  }

  // HTML BUTTONS (PREV, NEXT)

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }

  // CUSTOM CONTROL BUTTONS (BASED ON THE INDEX)

  createControl() {
    // Creates all the buttons
    const control = document.createElement('ul');
    control.dataset.control = 'slide';

    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${
        index + 1
      }</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, index) {
    // Activates the changeSlide method
    // using the index of the clicked button
    item.addEventListener('click', (e) => {
      e.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener('changeEvent', this.activeControlItem);
  }

  activeControlItem() {
    // Adds 'active' class to the active button
    this.controlArray.forEach((item) =>
      item.classList.remove(this.activeClass)
    );
    this.controlArray[this.index.cur].classList.add(this.activeClass);
  }

  addControl(customControl) {
    // Starts the function
    this.control =
      document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];
    this.controlArray.forEach(this.eventControl);
    this.activeControlItem();
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
